// CluesComputer.tsx
import React, { useState, useEffect } from "react";
import {
  StyledCluesComputer,
  CluesContainer,
  ScreenHeader,
  ClueButton,
  FilterButton
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
          return JSON.parse(saved) as Trupe[];
        } catch {
          return [];
        }
      }
    }
    return [];
  });

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
      <CluesContainer>
        <ScreenHeader>Pistas</ScreenHeader>
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
        <FilterButton onClick={handleFilter}>PESQUISAR</FilterButton>
        {filteredViloes.length === 1 && (
          <p>
            Agora você tem um mandado de prisão para{" "}
            <strong>{filteredViloes[0].nome}</strong>
          </p>
        )}
      </CluesContainer>
    </StyledCluesComputer>
  );
};

export default CluesComputer;
