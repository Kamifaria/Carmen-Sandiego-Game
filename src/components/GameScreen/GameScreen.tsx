import React, { useState, useEffect, useCallback, useRef, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";

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
  RightColumnDescription,
  BottomSection,
  OptionsContainer,
  TypingArea,
  TypingAreaItem,
  MessageContainer,
  TypewriterContainer,
  ButtonContainerWrapper
} from "./GameScreen.styles";

const GameScreen = () => {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  // Proteção de Rota
  useEffect(() => {
    const storedUser = localStorage.getItem('username');
    if (!storedUser && !user) {
      navigate('/login');
    } else if (storedUser && !user) {
      setUser({ username: storedUser });
    }
  }, [user, setUser, navigate]);

  const [step, setStep] = useState(0);
  const [messagesToShow, setMessagesToShow] = useState<string[]>([]);
  const [messagesDisplayed, setMessagesDisplayed] = useState<string[]>([]);
  const [readyForNext, setReadyForNext] = useState(true);
  const [bottomMessage, setBottomMessage] = useState("");
  const [rankAtual, setRankAtual] = useState("Novato");
  const [casesResolved] = useState(0);
  const [currentLocation, setCurrentLocation] = useState<LocationData>(pickRandomLocation());
  const [villain, setVillain] = useState<Trupe>(trupeiros[0]);
  const [gamePath, setGamePath] = useState<LocationData[]>([]);
  const [currentPathIndex, setCurrentPathIndex] = useState(0);
  const [startedArtefact, setStartedArtefact] = useState<string>("");
  const [suspectGender, setSuspectGender] = useState<string>("");
  const [showButtons, setShowButtons] = useState(false);
  const [showLeftColumn, setShowLeftColumn] = useState(true);
  const [showMapView, setShowMapView] = useState(false);
  const [showSearchOptions, setShowSearchOptions] = useState(false);
  const [showCluesComputer, setShowCluesComputer] = useState(false);
  const [isSuspectListUpdated, setIsSuspectListUpdated] = useState(false);
  const [elapsedHours, setElapsedHours] = useState(0);
  const [issuedWarrant, setIssuedWarrant] = useState<string | null>(null);
  const [gameState, setGameState] = useState<"playing"|"won"|"lost">("playing");
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const formatDateTime = (hoursAcc: number) => {
    const days = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"];
    const totalHours = 9 + hoursAcc;
    const dayIndex = Math.floor(totalHours / 24) % 7;
    const hourOfDay = totalHours % 24;
    return `${days[dayIndex]}, ${hourOfDay.toString().padStart(2, '0')}:00`;
  };

  const advanceTime = (hours: number, additionalMessage: string = "") => {
    if (gameState !== "playing") return;
    let newHours = elapsedHours + hours;
    const hourOfDay = (9 + newHours) % 24;
    let sleepMessage = "";
    if (hourOfDay >= 22 || hourOfDay < 6) {
      newHours += 8; // Dormiu
      sleepMessage = " 😴 (O detetive dormiu 8 horas...)";
    }
    setElapsedHours(newHours);
    
    if (newHours >= 152) { // 6 dias úteis max
      setGameState("lost");
      setBottomMessage(`⏰ O prazo de Domingo às 17h estourou! O ladrão escapou no escuro... FIM DE JOGO.`);
    } else {
      setBottomMessage(additionalMessage + sleepMessage);
    }
  };

  const messages = useMemo(() => [
    { type: "text", content: "Você foi identificado, {username}. Seu rank atual é {rankAtual}." },
    { type: "text", content: "*** URGENTE ***" },
    { type: "text", content: "Um tesouro nacional foi roubado em {currentLocation}." },
    { type: "text", content: "O tesouro foi identificado como {startedArtefact}." },
    { type: "text", content: "{suspectGender} na cena do crime." },
    { type: "text", content: "Sua missão: rastrear o criminoso de {currentLocation} até seu esconderijo e prendê-lo!" },
    { type: "text", content: "Você tem até Domingo, 18:00 h" },
    { type: "text", content: "Boa sorte {rankAtual}." }
  ], []);

  const handleNextStep = useCallback(() => {
    if (!readyForNext || step >= messages.length) return;

    const genderLabel = suspectGender === "Feminino" ? "Mulher suspeita vista" : "Homem suspeito visto";
    const newMessage = messages[step].content
      .replace("{username}", user?.username || "")
      .replace("{rankAtual}", rankAtual)
      .replace("{currentLocation}", currentLocation.name)
      .replace("{startedArtefact}", startedArtefact)
      .replace("{suspectGender}", genderLabel);

    if (!messagesDisplayed.includes(newMessage)) {
      setMessagesDisplayed((prev) => [...prev, newMessage]);
    }

    setMessagesToShow((prev) => [...prev, newMessage]);
    setStep((prev) => prev + 1);
    setReadyForNext(false);
    setBottomMessage("");
  }, [readyForNext, step, messages, suspectGender, user?.username, rankAtual, currentLocation.name, startedArtefact, messagesDisplayed]);

  const handleContinue = useCallback(() => {
    if (step < messages.length) {
      handleNextStep();
    } else {
      setShowButtons(true);
      setBottomMessage("");
      setShowLeftColumn(false);
    }
  }, [handleNextStep, messages.length, step]);

  const handleSearch = (placeName: string) => {
    if (gameState !== "playing") return;

    if (gamePath.length > 0 && currentLocation.name === gamePath[currentPathIndex].name) {
      if (currentPathIndex === gamePath.length - 1) {
        if (issuedWarrant === villain.nome) {
          setGameState("won");
          setBottomMessage(`🚨 VOCÊ ACHOU O(A) ${villain.nome}! A polícia identificou o seu mandado de prisão válido. CASO ENCERRADO. PARABÉNS!`);
        } else if (issuedWarrant) {
          setGameState("lost");
          setBottomMessage(`🚨 Você achou o suspeito, MAS seu mandado era para ${issuedWarrant}. Sem mandado legal correto, o larápio riu e fugiu! FIM DE JOGO.`);
        } else {
          setGameState("lost");
          setBottomMessage(`🚨 Você achou o esconderijo do suspeito, mas esqueceu de emitir um Mandado de Prisão no computador!! A polícia não pôde prender e o ladrão fugiu. FIM DE JOGO.`);
        }
      } else {
        const nextCity = gamePath[currentPathIndex + 1];
        const clueType = Math.random() > 0.5 ? 'city' : 'villain';
        
        let msg = "";
        if (clueType === 'city') {
          msg = `🕵️‍♀️ Dica no ${placeName}: Ouvi dizer que fugiram para um local assim: "${nextCity.description.substring(0, 60)}..."`;
        } else {
          const attributes = [
            `tinha cabelo ${villain.cabelo}`,
            `gostava de ${villain.hobby}`,
            `tinha a seguinte característica: ${villain.caracteristica}`,
            `foi visto entrando num(a) ${villain.veiculo}`
          ];
          const randomAttr = attributes[Math.floor(Math.random() * attributes.length)];
          msg = `🕵️‍♀️ Dica no ${placeName}: O suspeito esteve aqui e lembro que ele(a) ${randomAttr}.`;
        }
        advanceTime(2, msg);
      }
    } else {
      advanceTime(2, `❌ Você revistou o(a) ${placeName}. Não achamos nada útil. Acho que perdeu o rastro! Volte e tente outra cidade.`);
    }
  };

  const handleCitySelect = (cityName: string) => {
    if (gameState !== "playing") return;

    const city = locationsData.find(l => l.name === cityName);
    if (city) {
      setCurrentLocation(city);
      setShowMapView(false);
      
      const nextCityInPath = gamePath[currentPathIndex + 1];
      if (nextCityInPath && city.name === nextCityInPath.name) {
        setCurrentPathIndex(prev => prev + 1);
        advanceTime(4, `✈️ Você viajou para ${cityName}. Há rumores recentes do criminoso por aqui!`);
      } else {
        advanceTime(4, `✈️ Você viajou para ${cityName}. Parece tudo muito quieto. Você está no lugar errado!`);
      }
    }
  };

  const updateRank = (casesResolved: number): string => {
    if (casesResolved >= 30) return "Superintendente";
    if (casesResolved >= 20) return "Agente";
    if (casesResolved >= 10) return "Inspetor";
    if (casesResolved >= 3) return "Investigador";
    if (casesResolved >= 1) return "Detetive";
    return "Novato";
  };

  useEffect(() => {
    setRankAtual(updateRank(casesResolved));
    setStartedArtefact(pickRandomArtefact());
    
    // Sortear o vilão
    const randomVillain = trupeiros[Math.floor(Math.random() * trupeiros.length)];
    setVillain(randomVillain);
    setSuspectGender(randomVillain.sexo);

    // Gerar uma nova trilha aleatória de 4 cidades
    const shuffledLocations = [...locationsData].sort(() => 0.5 - Math.random());
    const path = shuffledLocations.slice(0, 4);
    setGamePath(path);
    setCurrentLocation(path[0]);
    setCurrentPathIndex(0);
    setElapsedHours(0);
    setGameState("playing");
    setIssuedWarrant(null);
    setBottomMessage("");
  }, [casesResolved]);

  useEffect(() => {
    if (!readyForNext && audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(console.error);
    }
  }, [readyForNext]);

  return (
    <StyledGameScreen
      onClick={handleContinue}
      onKeyDown={(e) => e.key === "Enter" && handleContinue()}
      tabIndex={0}
    >
      <audio ref={audioRef} src="/typewriter-key.mp3" />
      <HeaderComponent />
      <ScreenWrapper>
        <LeftColumn>
          {showLeftColumn && (
            <TypingArea>
              <MessageContainer>
                {messagesToShow.slice(0, -1).map((message, index) => (
                  <TypingAreaItem key={index}>{message}</TypingAreaItem>
                ))}
                <Typist
                  key={step.toString()}
                  cursor={{ show: true, blink: true, element: "|" }}
                  onTypingDone={() => setReadyForNext(true)}
                  avgTypingDelay={50}
                >
                  {messagesToShow[messagesToShow.length - 1]}
                </Typist>
              </MessageContainer>
              <TypewriterContainer isTyping={!readyForNext} />
            </TypingArea>
          )}
        </LeftColumn>
        <RightColumn>
          <RightColumnDescription isVisible={!showLeftColumn}>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '2px solid red', paddingBottom: '10px', marginBottom: '10px', color: 'red' }}>
              <strong>📍 {currentLocation.name}</strong>
              <strong>⏳ {formatDateTime(elapsedHours)}</strong>
            </div>
            {currentLocation.description}
          </RightColumnDescription>
          <OptionsContainer isVisible={showMapView || showSearchOptions || showCluesComputer}>
            {showSearchOptions && (
              <SearchOptions 
                currentCountry={currentLocation.name} 
                onSearch={handleSearch} 
              />
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
                onFilterSuspects={(suspects) => {
                  if (suspects.length === 1) {
                    setIssuedWarrant(suspects[0]);
                    setBottomMessage(`📑 Mandado de prisão emitido legalmente para: ${suspects[0]}!`);
                  } else {
                    setIssuedWarrant(null);
                  }
                }} 
                isSuspectListUpdated={isSuspectListUpdated}
                setIsSuspectListUpdated={setIsSuspectListUpdated}
              />
            )}
          </OptionsContainer>
          <BottomSection>
            {bottomMessage}
            {showButtons && (
              <ButtonContainerWrapper>
                <Button
                  onClick={() => setShowMapView(!showMapView)}
                  iconSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUnYZVbZDsyH9wI8lAgRTjRsxZtwHuO_PYYQ&s"
                  altText="Viagem"
                  buttonText="VIAGEM"
                  isSelected={showMapView}
                />
                <Button
                  onClick={() => setShowSearchOptions(!showSearchOptions)}
                  iconSrc="https://static.thenounproject.com/png/644045-200.png"
                  altText="Procurar"
                  buttonText="PROCURAR"
                  isSelected={showSearchOptions}
                />
                <Button
                  onClick={() => setShowCluesComputer(!showCluesComputer)}
                  iconSrc="https://static.thenounproject.com/png/1713640-200.png"
                  altText="Pistas"
                  buttonText="PISTAS"
                  isSelected={showCluesComputer}
                />
              </ButtonContainerWrapper>
            )}
          </BottomSection>
        </RightColumn>
      </ScreenWrapper>
    </StyledGameScreen>
  );
};

export default GameScreen;
