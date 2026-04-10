import React, { useState, useEffect, useRef } from "react";
import { Trupe, trupeiros } from "../../utils/trupeUtils";

import {
  TypistWrapper,
  Header,
  HeaderItem,
  Dropdown,
  DropdownItem,
  ModalBackground,
  ModalContainer,
  ModalBody,
  ImageContainer,
  Image,
  ContentContainer,
  ModalContent,
  ModalFooter,
} from "./Header.styles";

// Custom simple typewriter hook to avoid react-typist bugs
const useTypewriter = (text: string, speed = 25) => {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed("");
    setDone(false);
    let i = 0;
    const t = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) {
        clearInterval(t);
        setDone(true);
      }
    }, speed);
    return () => clearInterval(t);
  }, [text, speed]);

  return { displayed, done };
};

export const HeaderComponent: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedTrupeiro, setSelectedTrupeiro] = useState<Trupe | null>(null);

  const modalRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const handleDropdownItemClick = (e: React.MouseEvent, suspeito: Trupe) => {
    e.stopPropagation();
    setSelectedTrupeiro(suspeito);
    setShowDropdown(false);
  };

  const handleClickOutside = (e: MouseEvent) => {
    // If we click outside the modal, close it
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setSelectedTrupeiro(null);
    }
  };

  useEffect(() => {
    if (selectedTrupeiro) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [selectedTrupeiro]);

  return (
    <>
      <Header>
        <HeaderItem>Jogo</HeaderItem>
        <HeaderItem>Opções</HeaderItem>
        <HeaderItem>Acme</HeaderItem>
        <HeaderItem onClick={toggleDropdown} isSelected={showDropdown}>
          Dossiês
          <Dropdown show={showDropdown}>
            {trupeiros.map((suspeito: Trupe) => (
              <DropdownItem
                key={suspeito.nome}
                onClick={(e) => handleDropdownItemClick(e, suspeito)}
              >
                {suspeito.nome}
              </DropdownItem>
            ))}
          </Dropdown>
        </HeaderItem>
      </Header>

      {selectedTrupeiro && (
        <ModalBackground>
          <ModalContainer ref={modalRef}>
            <ModalBody>
              <ImageContainer>
                <Image src={selectedTrupeiro.imagem} alt={selectedTrupeiro.nome} />
              </ImageContainer>
              <ContentContainer>
                <ModalContent>
                  <DossierDetails suspeito={selectedTrupeiro} />
                </ModalContent>
              </ContentContainer>
            </ModalBody>
          </ModalContainer>
        </ModalBackground>
      )}
    </>
  );
};

// Extracted to manage its own typewriter state cleanly
const DossierDetails: React.FC<{ suspeito: Trupe }> = ({ suspeito }) => {
  const detailsText = `Name: ${suspeito.nome}
Sex: ${suspeito.sexo}
Age: ${suspeito.idade || "Desconhecida"}
Hobby: ${suspeito.hobby}  
Hair: ${suspeito.cabelo}
Vehicle: ${suspeito.veiculo}`;

  const { displayed: topDisplayed, done: topDone } = useTypewriter(detailsText, 20);

  const footerText = `Feature: ${suspeito.caracteristica}
Other: ${suspeito.outro || "N/A"}`;
  const { displayed: bottomDisplayed } = useTypewriter(topDone ? footerText : "", 20);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <TypistWrapper style={{ whiteSpace: "pre-wrap" }}>
        {topDisplayed}
        {!topDone && <span style={{ animation: "flicker 1s infinite" }}>_</span>}
      </TypistWrapper>

      <ModalFooter isVisible={topDone} style={{ marginTop: 'auto' }}>
        <TypistWrapper style={{ whiteSpace: "pre-wrap" }}>
          {bottomDisplayed}
          {topDone && <span style={{ animation: "flicker 1s infinite" }}>_</span>}
        </TypistWrapper>
      </ModalFooter>
    </div>
  );
};

export default HeaderComponent;
