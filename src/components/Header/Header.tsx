import React, { useState, useRef, useEffect } from "react";
import Typist from "react-typist";
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

const HeaderComponent: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  const [isDossiersSelected, setIsDossiersSelected] = useState(false);
  const [selectedTrupeiro, setSelectedTrupeiro] = useState<Trupe | null>(null);
  const [isFooterTyping, setIsFooterTyping] = useState(false);

  const dossiersRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    if (dossiersRef.current) {
      const { top, left, height } = dossiersRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: top + height,
        left: left,
      });
      setShowDropdown(!showDropdown);
      setIsDossiersSelected(!isDossiersSelected);
    }
  };

  const handleDropdownItemClick = (suspeito: Trupe) => {
    setSelectedTrupeiro(suspeito);
    setShowDropdown(false);
    setIsFooterTyping(false);
  };

  useEffect(() => {
    if (showDropdown && dossiersRef.current) {
      const { top, left, height } = dossiersRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: top + height,
        left: left,
      });
    }
  }, [showDropdown]);

  const handleClickOutside = (e: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setSelectedTrupeiro(null);
      setIsDossiersSelected(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleTypingDone = () => {
    setIsFooterTyping(true);
  };

  return (
    <>
      <Header>
        <HeaderItem>Jogo</HeaderItem>
        <HeaderItem>Opções</HeaderItem>
        <HeaderItem>Acme</HeaderItem>
        <HeaderItem
          ref={dossiersRef}
          onClick={toggleDropdown}
          isSelected={isDossiersSelected}
        >
          Dossiês
        </HeaderItem>
        <Dropdown
          top={dropdownPosition.top}
          left={dropdownPosition.left}
          show={showDropdown}
        >
          {trupeiros.map((suspeito: Trupe) => (
            <DropdownItem
              key={suspeito.nome}
              onClick={() => handleDropdownItemClick(suspeito)}
            >
              {suspeito.nome}
            </DropdownItem>
          ))}
        </Dropdown>
      </Header>

      {selectedTrupeiro && (
        <ModalBackground>
          <ModalContainer ref={modalRef}>
            <ModalBody>
              <ImageContainer>
                <Image
                  src={selectedTrupeiro.imagem}
                  alt={selectedTrupeiro.nome}
                />
              </ImageContainer>
              <ContentContainer>
                <ModalContent>
                  <TypistWrapper>
                    <Typist cursor={{ show: false }} onTypingDone={handleTypingDone}>
                      <p><strong>Nome:</strong> {selectedTrupeiro.nome}</p>
                      <p><strong>Sexo:</strong> {selectedTrupeiro.sexo}</p>
                      <p><strong>Idade:</strong> {selectedTrupeiro.idade || "Não disponível"}</p>
                      <p><strong>Hobby:</strong> {selectedTrupeiro.hobby}</p>
                      <p><strong>Cabelo:</strong> {selectedTrupeiro.cabelo}</p>
                      <p><strong>Veículo:</strong> {selectedTrupeiro.veiculo}</p>
                    </Typist>
                  </TypistWrapper>
                </ModalContent>
              </ContentContainer>
            </ModalBody>
            <ModalFooter isVisible={isFooterTyping}>
              <TypistWrapper>
                {isFooterTyping && (
                  <Typist cursor={{ show: false }}>
                    <p><strong>Característica:</strong> {selectedTrupeiro.caracteristica}</p>
                    <p><strong>Outro:</strong> {selectedTrupeiro.outro || "Não disponível"}</p>
                  </Typist>
                )}
              </TypistWrapper>
            </ModalFooter>
          </ModalContainer>
        </ModalBackground>
      )}
    </>
  );
};

export default HeaderComponent;
