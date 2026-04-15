import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Trupe, trupeiros } from "../../utils/trupeUtils";

import {
  Header,
  HeaderItem,
  ModalBackground,
  FullScreenModal,
  ModalTopBar,
  ModalSplitView,
  LeftListPanel,
  ListPanelItem,
  RightDetailPanel,
  TopDetailsRow,
  BigImage,
  SpecsColumn,
  SystemLogBox,
  TypistWrapper
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

interface HeaderProps {
  isMuted?: boolean;
  onToggleSound?: () => void;
}

export const HeaderComponent: React.FC<HeaderProps> = ({ isMuted, onToggleSound }) => {
  const navigate = useNavigate();
  const [showDatabase, setShowDatabase] = useState(false);
  const [selectedTrupeiro, setSelectedTrupeiro] = useState<Trupe | null>(null);

  const toggleDatabase = () => {
    setShowDatabase((prev) => {
      const next = !prev;
      if (next && !selectedTrupeiro) setSelectedTrupeiro(trupeiros[0]);
      return next;
    });
  };

  return (
    <>
      <Header>
        <HeaderItem>Jogo</HeaderItem>
        <HeaderItem onClick={() => navigate("/lobby")}>Perfil</HeaderItem>
        <HeaderItem onClick={onToggleSound}>
          {isMuted ? "🔇 Som Off" : "🔊 Som On"}
        </HeaderItem>
        <HeaderItem onClick={toggleDatabase} isSelected={showDatabase}>
          Dossiês
        </HeaderItem>
      </Header>

      {showDatabase && selectedTrupeiro && (
        <ModalBackground onClick={() => setShowDatabase(false)}>
          <FullScreenModal onClick={(e) => e.stopPropagation()}>
            <ModalTopBar>
              <h1>INTERPOL CRIMESTOPPERS: FICHAS CRIMINAIS</h1>
              <button onClick={() => setShowDatabase(false)}>X</button>
            </ModalTopBar>
            
            <ModalSplitView>
              {/* Left Panel: List of Names */}
              <LeftListPanel>
                {trupeiros.map((suspeito: Trupe) => (
                  <ListPanelItem
                    key={suspeito.nome}
                    isSelected={selectedTrupeiro.nome === suspeito.nome}
                    onClick={() => setSelectedTrupeiro(suspeito)}
                  >
                    {suspeito.nome}
                  </ListPanelItem>
                ))}
              </LeftListPanel>
              
              {/* Right Panel: Details of selected */}
              <RightDetailPanel>
                <TopDetailsRow>
                  <BigImage src={selectedTrupeiro.imagem} alt={selectedTrupeiro.nome} />
                  
                  <SpecsColumn>
                    <div><span className="label">NOME:</span> <span className="value">{selectedTrupeiro.nome}</span></div>
                    <div><span className="label">SEXO:</span> <span className="value">{selectedTrupeiro.sexo}</span></div>
                    <div><span className="label">IDADE:</span> <span className="value">{selectedTrupeiro.idade}</span></div>
                    <div><span className="label">HOBBY:</span> <span className="value">{selectedTrupeiro.hobby}</span></div>
                    <div><span className="label">CABELO:</span> <span className="value">{selectedTrupeiro.cabelo}</span></div>
                    <div><span className="label">VEÍCULO:</span> <span className="value">{selectedTrupeiro.veiculo}</span></div>
                    <div><span className="label">CARACTERÍSTICA:</span> <span className="value">{selectedTrupeiro.caracteristica}</span></div>
                  </SpecsColumn>
                </TopDetailsRow>

                <SystemLogBox>
                  <SystemLogWriter nome={selectedTrupeiro.nome} outro={selectedTrupeiro.outro} />
                </SystemLogBox>
              </RightDetailPanel>
            </ModalSplitView>
          </FullScreenModal>
        </ModalBackground>
      )}
    </>
  );
};

const SystemLogWriter: React.FC<{ nome: string; outro: string }> = ({ nome, outro }) => {
  const text = `SISTEMA INTERPOL ACESSANDO REGISTROS DE ${nome.toUpperCase()}...
PONTOS DE INTERESSE DETECTADOS:
>> ${outro.toUpperCase()}

[REGISTRO FINALIZADO]`;

  const { displayed, done } = useTypewriter(text, 15);

  return (
    <TypistWrapper>
      {displayed}
      {!done && <span style={{ animation: "flicker 1s infinite" }}>█</span>}
    </TypistWrapper>
  );
};

export default HeaderComponent;
