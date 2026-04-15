// CluesComputer.tsx
import React, { useState, useEffect } from "react";
import {
  StyledCluesComputer,
  CluesContainer,
  ScreenHeader,
  ClueButton,
  FilterButton,
  SuspectsGallery,
  SuspectCard,
  DossierTabs,
  TabButton,
  DossierEntry
} from "./CluesComputer.styles";
import { trupeiros, Trupe } from "../../utils/trupeUtils";

const clues = {
  Sexo: ["Masculino", "Feminino"],
  Hobby: ["Tenis", "Basquete", "Alpinismo", "Futebol"],
  Cabelo: ["Loiro", "Ruivo", "Castanho", "Preto"],
  Caracteristica: ["Joias", "Tatuagem", "Cicatriz", "Óculos"],
  Veiculo: ["Limousine", "Conversivel", "Moto", "Jipe"],
};

type ClueType = keyof typeof clues;

interface SelectedClues {
  Sexo: string;
  Hobby: string;
  Cabelo: string;
  Caracteristica: string;
  Veiculo: string;
}

interface CluesComputerProps {
  onFilterSuspects: (suspects: string[]) => void;
  isSuspectListUpdated: boolean;
  setIsSuspectListUpdated: (value: boolean) => void;
}

const CluesComputer: React.FC<CluesComputerProps> = ({
  onFilterSuspects,
  isSuspectListUpdated,
  setIsSuspectListUpdated,
}) => {
  const [selectedClues, setSelectedClues] = useState<SelectedClues>(() => {
    if (typeof window !== "undefined") {
      const navEntry = window.performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming;
      if (navEntry && navEntry.type === "reload") {
        localStorage.removeItem("selectedClues");
        localStorage.removeItem("filteredViloes");
      }

      const savedClues = localStorage.getItem("selectedClues");
      if (savedClues) {
        try {
          return JSON.parse(savedClues) as SelectedClues;
        } catch {
          return {
            Sexo: "",
            Hobby: "",
            Cabelo: "",
            Caracteristica: "",
            Veiculo: "",
          };
        }
      }
    }
    return {
      Sexo: "",
      Hobby: "",
      Cabelo: "",
      Caracteristica: "",
      Veiculo: "",
    };
  });

  const [filteredViloes, setFilteredViloes] = useState<Trupe[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("filteredViloes");
      if (saved) {
        try {
          const parsed = JSON.parse(saved) as Trupe[];
          const currentNames = parsed.map(p => p.nome);
          return trupeiros.filter(t => currentNames.includes(t.nome));
        } catch {
          return trupeiros;
        }
      }
    }
    return trupeiros;
  });

  const [activeTab, setActiveTab] = useState<'clues' | 'dossiers'>('clues');

  useEffect(() => {
    localStorage.setItem("selectedClues", JSON.stringify(selectedClues));
  }, [selectedClues]);

  useEffect(() => {
    localStorage.setItem("filteredViloes", JSON.stringify(filteredViloes));
  }, [filteredViloes]);

  const handleClueClick = (clueType: ClueType) => {
    setSelectedClues((prevState) => {
      const currentIndex = clues[clueType].indexOf(prevState[clueType]);
      const nextIndex = (currentIndex + 1) % (clues[clueType].length + 1);
      return {
        ...prevState,
        [clueType]:
          nextIndex === clues[clueType].length
            ? ""
            : clues[clueType][nextIndex],
      };
    });
  };

  const handleFilter = () => {
    const filtered = trupeiros.filter((vilao) =>
      Object.entries(selectedClues).every(([key, value]) => {
        if (!value) return true;
        const vilaoKey = key.toLowerCase() as keyof Trupe;
        return vilao[vilaoKey] === value;
      })
    );
    setFilteredViloes(filtered);
    onFilterSuspects(filtered.map((vilao) => vilao.nome));
    setIsSuspectListUpdated(true);
  };

  return (
    <StyledCluesComputer>
      <ScreenHeader>INTERPOL COMPUTER</ScreenHeader>
      
      <DossierTabs>
        <TabButton $active={activeTab === 'clues'} onClick={() => setActiveTab('clues')}>
          Filtros
        </TabButton>
        <TabButton $active={activeTab === 'dossiers'} onClick={() => setActiveTab('dossiers')}>
          Dossiês
        </TabButton>
      </DossierTabs>

      <CluesContainer>
        {activeTab === 'clues' ? (
          <>
            {Object.keys(clues).map((clueType) => (
              <ClueButton
                key={clueType}
                onClick={() => handleClueClick(clueType as ClueType)}
              >
                <span className="clue-type">{clueType}:</span>
                <span className="clue-option">
                  {selectedClues[clueType as ClueType] || ""}
                </span>
              </ClueButton>
            ))}
            <div style={{ display: 'flex', gap: '10px' }}>
              <FilterButton onClick={handleFilter}>PESQUISAR</FilterButton>
              <FilterButton 
                onClick={() => {
                  setSelectedClues({ Sexo: "", Hobby: "", Cabelo: "", Caracteristica: "", Veiculo: "" });
                  setFilteredViloes(trupeiros);
                  onFilterSuspects([]);
                  setIsSuspectListUpdated(false);
                  localStorage.removeItem("selectedClues");
                  localStorage.removeItem("filteredViloes");
                }}
                style={{ backgroundColor: '#444', borderColor: '#666' }}
              >
                LIMPAR
              </FilterButton>
            </div>

            <SuspectsGallery>
              {filteredViloes.length > 0 ? (
                filteredViloes.map((vilao) => (
                  <SuspectCard key={vilao.nome} $isWarrant={filteredViloes.length === 1}>
                    <img className="photo" src={vilao.imagem} alt={vilao.nome} />
                    <div className="name">{vilao.nome}</div>
                    <div className="stamp">WARRANT</div>
                  </SuspectCard>
                ))
              ) : (
                <p style={{ color: "red", textAlign: "center" }}>NENHUM SUSPEITO ENCONTRADO.</p>
              )}
            </SuspectsGallery>
          </>
        ) : (
          <div style={{ paddingBottom: '20px' }}>
            {trupeiros.map((vilao) => (
              <DossierEntry key={vilao.nome}>
                <img className="dossier-photo" src={vilao.imagem} alt={vilao.nome} />
                <div className="dossier-info">
                  <div className="d-name">{vilao.nome}</div>
                  <div className="d-row"><span>Sexo:</span> {vilao.sexo}</div>
                  <div className="d-row"><span>Hobby:</span> {vilao.hobby}</div>
                  <div className="d-row"><span>Cabelo:</span> {vilao.cabelo}</div>
                  <div className="d-row"><span>Traço:</span> {vilao.caracteristica}</div>
                  <div className="d-row"><span>Veículo:</span> {vilao.veiculo}</div>
                  <div className="d-bio">Bio: {vilao.outro}</div>
                </div>
              </DossierEntry>
            ))}
          </div>
        )}
      </CluesContainer>
    </StyledCluesComputer>
  );
};

export default CluesComputer;
