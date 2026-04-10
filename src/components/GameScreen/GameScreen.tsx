import React, { useState, useEffect, useCallback, useRef, useMemo } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../services/AuthContext";
import { pickRandomLocation, LocationData, locationsData } from "../../utils/localUtils";
import { pickRandomArtefact } from "../../utils/artefactsUtils";
import { trupeiros, Trupe } from "../../utils/trupeUtils";

import SearchOptions from "../SearchOptions/SearchOptions";
import MapView from "../MapView/MapView";
import CluesComputer from "../CluesComputer/CluesComputer";
import HeaderComponent from "../Header/Header";
import Button from "../Button/Button";

import {
  StyledGameScreen,
  ScreenWrapper,
  LeftColumn,
  RightColumn,
  CityInfoBar,
  RightColumnDescription,
  BottomSection,
  BottomMessage,
  OptionsContainer,
  TypingArea,
  TypingAreaItem,
  MessageContainer,
  TypewriterContainer,
  ButtonContainerWrapper,
  GameOverlay,
} from "./GameScreen.styles";

// ─── Custom Typewriter ──────────────────────────────────────────────
const TypewriterText: React.FC<{ text: string; onDone: () => void }> = ({ text, onDone }) => {
  const [displayed, setDisplayed] = useState("");
  
  useEffect(() => {
    setDisplayed("");
    let i = 0;
    const t = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) {
        clearInterval(t);
        onDone();
      }
    }, 30);
    return () => clearInterval(t);
  }, [text, onDone]);

  return (
    <span>
      {displayed}
      <span style={{ animation: "flicker 1s infinite" }}>|</span>
    </span>
  );
};

// ─── helpers ────────────────────────────────────────────────────────
const DAYS = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"];

function formatTime(hoursElapsed: number): string {
  const total = 9 + hoursElapsed;
  const dayIdx = Math.min(Math.floor(total / 24), 6);
  const h = total % 24;
  return `${DAYS[dayIdx]}, ${String(h).padStart(2, "0")}:00`;
}

function buildPath(count = 4): LocationData[] {
  return [...locationsData].sort(() => 0.5 - Math.random()).slice(0, count);
}

// ─── Component ──────────────────────────────────────────────────────
const GameScreen: React.FC = () => {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Route guard
  useEffect(() => {
    const stored = localStorage.getItem("username");
    if (!stored && !user) navigate("/login");
    else if (stored && !user) setUser({ username: stored });
  }, [user, setUser, navigate]);

  // ── Intro state ────────────────────────────────────────────────
  const [step, setStep] = useState(0);
  const [messagesToShow, setMessagesToShow] = useState<string[]>([]);
  const [readyForNext, setReadyForNext] = useState(true);
  const [introComplete, setIntroComplete] = useState(false);

  // ── Game meta ──────────────────────────────────────────────────
  const [casesResolved, setCasesResolved] = useState(0);
  
  const rankAtual = useMemo(() => {
    if (casesResolved >= 30) return "Superintendente";
    if (casesResolved >= 15) return "Inspetor";
    if (casesResolved >= 5) return "Detetive";
    return "Novato";
  }, [casesResolved]);

  // Load user data on mount
  useEffect(() => {
    if (user?.username) {
      fetch('http://localhost:3001/api/user/' + user.username)
        .then(res => res.json())
        .then(data => {
          if (data && data.user) {
            setCasesResolved(data.user.casesResolved || 0);
          }
        })
        .catch(console.error);
    }
  }, [user?.username]);

  // ── Game round state ───────────────────────────────────────────
  const [villain, setVillain] = useState<Trupe>(trupeiros[0]);
  const [gamePath, setGamePath] = useState<LocationData[]>([]);
  const [currentPathIndex, setCurrentPathIndex] = useState(0);
  const [currentLocation, setCurrentLocation] = useState<LocationData>(pickRandomLocation());
  const [startedArtefact, setStartedArtefact] = useState("");
  const [suspectGender, setSuspectGender] = useState("");
  const [elapsedHours, setElapsedHours] = useState(0);
  const [issuedWarrant, setIssuedWarrant] = useState<string | null>(null);
  const [gameState, setGameState] = useState<"playing" | "won" | "lost">("playing");
  const [bottomMessage, setBottomMessage] = useState("");

  // ── UI toggle state ────────────────────────────────────────────
  const [showMapView, setShowMapView] = useState(false);
  const [showSearchOptions, setShowSearchOptions] = useState(false);
  const [showCluesComputer, setShowCluesComputer] = useState(false);
  const [isSuspectListUpdated, setIsSuspectListUpdated] = useState(false);

  // ── Build new round ────────────────────────────────────────────
  const startNewRound = useCallback(() => {
    const v = trupeiros[Math.floor(Math.random() * trupeiros.length)];
    const path = buildPath(4);
    setVillain(v);
    setSuspectGender(v.sexo);
    setGamePath(path);
    setCurrentPathIndex(0);
    setCurrentLocation(path[0]);
    setStartedArtefact(pickRandomArtefact());
    setElapsedHours(0);
    setIssuedWarrant(null);
    setGameState("playing");
    setBottomMessage("");
    setShowMapView(false);
    setShowSearchOptions(false);
    setShowCluesComputer(false);

    // reset intro so messages reflect new city
    setStep(0);
    setMessagesToShow([]);
    setReadyForNext(true);
    setIntroComplete(false);
  }, []);

  useEffect(() => { startNewRound(); }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Intro messages ─────────────────────────────────────────────
  const messages = useMemo(() => {
    const genderLabel =
      suspectGender === "Feminino" ? "Mulher suspeita vista" : "Homem suspeito visto";
    return [
      `Detetive ${user?.username || ""}. Rank: ${rankAtual}.`,
      "★★★ URGENTE ★★★",
      `Um tesouro foi roubado em ${currentLocation.name}!`,
      `Artefato: "${startedArtefact}".`,
      `${genderLabel} na cena do crime.`,
      `Resolução total até o momento: ${casesResolved} Casos.`,
      `Rastreie o criminoso e prenda-o antes de Domingo, 17:00h.`,
      "Boa sorte, Detetive.",
    ];
  }, [suspectGender, user?.username, rankAtual, currentLocation.name, startedArtefact, casesResolved]);

  const handleNextStep = useCallback(() => {
    if (!readyForNext || step >= messages.length) return;
    setMessagesToShow(prev => [...prev, messages[step]]);
    setStep(prev => prev + 1);
    setReadyForNext(false);
  }, [readyForNext, step, messages]);

  const handleContinue = useCallback(() => {
    if (!introComplete) {
      if (step < messages.length) {
        handleNextStep();
      } else {
        setIntroComplete(true);
      }
    }
  }, [introComplete, step, messages.length, handleNextStep]);

  // ── Time engine ────────────────────────────────────────────────
  const advanceTime = useCallback(
    (hours: number, msg: string) => {
      if (gameState !== "playing") return;
      setElapsedHours(prev => {
        const next = prev + hours;
        // Sleeping logic: between 22:00 and 06:00 add 8h
        const hour = (9 + next) % 24;
        const withSleep = hour >= 22 || hour < 6 ? next + 8 : next;
        const sleepNote = hour >= 22 || hour < 6 ? " 😴 (Detetive dormiu 8h)" : "";
        if (withSleep >= 152) {
          // deadline exceeded  (Mon 09:00 + 152h = Sun 17:00)
          setGameState("lost");
          setBottomMessage("⏰ DOMINGO 17H — O prazo expirou! O ladrão escapou. FIM DE JOGO.");
        } else {
          setBottomMessage(msg + sleepNote);
        }
        return withSleep;
      });
    },
    [gameState]
  );

  // ── Search ─────────────────────────────────────────────────────
  const handleSearch = useCallback(
    (placeName: string) => {
      if (gameState !== "playing") return;
      const onCorrectCity =
        gamePath.length > 0 && currentLocation.name === gamePath[currentPathIndex]?.name;

      if (onCorrectCity) {
        const isLastCity = currentPathIndex === gamePath.length - 1;
        if (isLastCity) {
          // confrontation
          if (issuedWarrant === villain.nome) {
            setGameState("won");
            setBottomMessage(
              `🚨 ${villain.nome} preso(a)! Mandado válido confirmado. CASO ENCERRADO!`
            );
            
            // Gravar estatística de vitória
            if (user?.username) {
              fetch('http://localhost:3001/api/win-case', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username: user.username })
              })
              .then(res => res.json())
              .then(data => {
                if (data.casesResolved) setCasesResolved(data.casesResolved);
              })
              .catch(console.error);
            }

          } else if (issuedWarrant) {
            setGameState("lost");
            setBottomMessage(
              `🚨 Suspeito encontrado, mas mandado para "${issuedWarrant}" é inválido! O ladrão riu e fugiu. FIM DE JOGO.`
            );
          } else {
            setGameState("lost");
            setBottomMessage(
              `🚨 Suspeito encontrado mas NENHUM mandado emitido! Vai buscar o computador primeiro. FIM DE JOGO.`
            );
          }
        } else {
          const next = gamePath[currentPathIndex + 1];
          const pickCity = Math.random() > 0.5;
          let clue: string;
          if (pickCity) {
            clue = `🕵️ Dica em ${placeName}: "Fugiram para um lugar assim: ${next.description.substring(0, 55)}..."`;
          } else {
            const attrs = [
              `cabelo ${villain.cabelo}`,
              `adora ${villain.hobby}`,
              `tem ${villain.caracteristica}`,
              `foi visto em um(a) ${villain.veiculo}`,
            ];
            clue = `🕵️ Dica em ${placeName}: testemunha diz que suspeito tem ${attrs[Math.floor(Math.random() * attrs.length)]}.`;
          }
          advanceTime(2, clue);
        }
      } else {
        advanceTime(
          2,
          `❌ Nada em ${placeName}. Você parece estar na cidade errada. Tente outra rota!`
        );
      }
    },
    [gameState, gamePath, currentLocation, currentPathIndex, issuedWarrant, villain, advanceTime, user]
  );

  // ── Travel ─────────────────────────────────────────────────────
  const handleCitySelect = useCallback(
    (cityName: string) => {
      if (gameState !== "playing") return;
      const city = locationsData.find(l => l.name === cityName);
      if (!city) return;

      setCurrentLocation(city);
      setShowMapView(false);
      setShowSearchOptions(false);

      const nextInPath = gamePath[currentPathIndex + 1];
      if (nextInPath && city.name === nextInPath.name) {
        setCurrentPathIndex(prev => prev + 1);
        advanceTime(4, `✈️ Chegou em ${cityName}. Há pistas do criminoso por aqui!`);
      } else {
        advanceTime(4, `✈️ Chegou em ${cityName}. Tudo quieto aqui — cidade errada!`);
      }
    },
    [gameState, gamePath, currentPathIndex, advanceTime]
  );

  // typewriter audio
  useEffect(() => {
    if (!readyForNext && audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    }
  }, [readyForNext]);

  // ── Restart ────────────────────────────────────────────────────
  const handleRestart = () => {
    startNewRound();
  };

  const anyPanelOpen = showMapView || showSearchOptions || showCluesComputer;

  return (
    <StyledGameScreen
      onClick={handleContinue}
      onKeyDown={e => e.key === "Enter" && handleContinue()}
      tabIndex={0}
    >
      <audio ref={audioRef} src="/typewriter-key.mp3" />
      <HeaderComponent />

      <ScreenWrapper>
        {/* LEFT: typewriter intro — hides smoothly once complete */}
        <LeftColumn $isHidden={introComplete}>
          <TypingArea>
            <MessageContainer>
              {messagesToShow.slice(0, -1).map((msg, i) => (
                <TypingAreaItem key={i}>{msg}</TypingAreaItem>
              ))}
              {messagesToShow.length > 0 && (
                <TypewriterText
                  key={step.toString()}
                  text={messagesToShow[messagesToShow.length - 1]}
                  onDone={() => setReadyForNext(true)}
                />
              )}
            </MessageContainer>
            <TypewriterContainer isTyping={!readyForNext} />
          </TypingArea>
        </LeftColumn>

        {/* RIGHT: main game area */}
        <RightColumn>
          {/* City + Clock bar */}
          <CityInfoBar isVisible={introComplete}>
            <span>📍 <strong>{currentLocation.name}</strong></span>
            <span>⏱ {formatTime(elapsedHours)}</span>
            {issuedWarrant && (
              <span style={{ color: "#ffd700" }}>📑 Mandado: <strong>{issuedWarrant}</strong></span>
            )}
          </CityInfoBar>

          {/* City description (hidden when panel open) */}
          <RightColumnDescription isVisible={introComplete && !anyPanelOpen}>
            {currentLocation.description}
          </RightColumnDescription>

          {/* Map / Search / Clues panel */}
          <OptionsContainer isVisible={introComplete && anyPanelOpen}>
            {showSearchOptions && (
              <SearchOptions currentCountry={currentLocation.name} onSearch={handleSearch} />
            )}
            {showMapView && (
              <MapView
                currentLocation={currentLocation}
                selectedCity={null}
                onCitySelect={handleCitySelect}
              />
            )}
            {showCluesComputer && (
              <CluesComputer
                onFilterSuspects={suspects => {
                  if (suspects.length === 1) {
                    setIssuedWarrant(suspects[0]);
                    setBottomMessage(`📑 Mandado emitido para: ${suspects[0]}!`);
                  } else {
                    setIssuedWarrant(null);
                  }
                }}
                isSuspectListUpdated={isSuspectListUpdated}
                setIsSuspectListUpdated={setIsSuspectListUpdated}
              />
            )}
          </OptionsContainer>

          {/* Bottom bar: message + buttons */}
          <BottomSection>
            {bottomMessage && <BottomMessage title={bottomMessage}>{bottomMessage}</BottomMessage>}
            {introComplete && gameState === "playing" && (
              <ButtonContainerWrapper>
                <Button
                  onClick={() => { setShowMapView(!showMapView); setShowSearchOptions(false); setShowCluesComputer(false); }}
                  iconSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUnYZVbZDsyH9wI8lAgRTjRsxZtwHuO_PYYQ&s"
                  altText="Viagem"
                  buttonText="VIAGEM"
                  isSelected={showMapView}
                />
                <Button
                  onClick={() => { setShowSearchOptions(!showSearchOptions); setShowMapView(false); setShowCluesComputer(false); }}
                  iconSrc="https://static.thenounproject.com/png/644045-200.png"
                  altText="Procurar"
                  buttonText="PROCURAR"
                  isSelected={showSearchOptions}
                />
                <Button
                  onClick={() => { setShowCluesComputer(!showCluesComputer); setShowMapView(false); setShowSearchOptions(false); }}
                  iconSrc="https://static.thenounproject.com/png/1713640-200.png"
                  altText="Pistas"
                  buttonText="PISTAS"
                  isSelected={showCluesComputer}
                />
              </ButtonContainerWrapper>
            )}
          </BottomSection>

          {/* Game Over / Win overlay */}
          {gameState !== "playing" && (
            <GameOverlay type={gameState} onClick={e => e.stopPropagation()}>
              <h1>{gameState === "won" ? "🎉 CASO RESOLVIDO!" : "💀 FIM DE JOGO"}</h1>
              <p>{bottomMessage}</p>
              <button onClick={e => { e.stopPropagation(); handleRestart(); }}>
                {gameState === "won" ? "→ PRÓXIMO CASO" : "→ TENTAR NOVAMENTE"}
              </button>
            </GameOverlay>
          )}
        </RightColumn>
      </ScreenWrapper>
    </StyledGameScreen>
  );
};

export default GameScreen;
