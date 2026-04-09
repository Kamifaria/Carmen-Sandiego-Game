import React, { useState, useEffect, useCallback, useRef, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";

import { useAuth } from "../../services/AuthContext";
import { pickRandomLocation, LocationData, locationsData } from "../../utils/localUtils";
import { pickRandomArtefact } from "../../utils/artefactsUtils";
import { trupeiros } from "../../utils/trupeUtils";

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
  const [startedArtefact, setStartedArtefact] = useState<string>("");
  const [suspectGender, setSuspectGender] = useState<string>("");
  const [showButtons, setShowButtons] = useState(false);
  const [showLeftColumn, setShowLeftColumn] = useState(true);
  const [showMapView, setShowMapView] = useState(false);
  const [showSearchOptions, setShowSearchOptions] = useState(false);
  const [showCluesComputer, setShowCluesComputer] = useState(false);
  const [isSuspectListUpdated, setIsSuspectListUpdated] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

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
    setBottomMessage(`Você procurou em: ${placeName}. Nenhuma pista encontrada por enquanto.`);
    // Aqui você poderia adicionar lógica para mostrar pistas reais baseadas no suspeito
  };

  const handleCitySelect = (cityName: string) => {
    const city = locationsData.find(l => l.name === cityName);
    if (city) {
      setCurrentLocation(city);
      setBottomMessage(`Você viajou para: ${cityName}`);
      setShowMapView(false); // Fecha o mapa após viajar
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
    const randomTrupeiro = trupeiros[Math.floor(Math.random() * trupeiros.length)];
    setSuspectGender(randomTrupeiro.sexo);
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
                onFilterSuspects={(suspects) => console.log(suspects)} 
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
