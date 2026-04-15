import { LocationData } from "../utils/localUtils";
import { Trupe } from "../utils/trupeUtils";

export interface Clue {
  text: string;
  npcType?: 'librarian' | 'banker' | 'pilot' | 'merchant';
}

const getNpcForPlace = (placeName: string): Clue['npcType'] => {
  const name = placeName.toLowerCase();
  
  if (name.includes('biblioteca') || name.includes('livraria') || name.includes('museu') || name.includes('palácio')) {
    return 'librarian';
  }
  
  if (name.includes('banco') || name.includes('financeiro') || name.includes('bolsa')) {
    return 'banker';
  }
  
  if (name.includes('aeroporto') || name.includes('porto') || name.includes('terminal')) {
    return 'pilot';
  }

  return 'merchant';
};

export const generateClue = (villain: Trupe, nextCity: LocationData, placeName: string): Clue => {
  const npcType = getNpcForPlace(placeName);
  const metadata = nextCity.metadata;

  const cityClues = [
    `Eles mencionaram que precisavam trocar dinheiro por ${metadata?.currency || 'moeda local'}.`,
    `Vi uma bandeira com as cores ${metadata?.flag || 'estrangeira'} no veículo de fuga.`,
    `Eles estavam lendo um guia turístico sobre ${metadata?.landmark || 'um monumento famoso'}.`,
    `O suspeito perguntou qual a distância até ${nextCity.name}.`
  ];

  const traitClues = [
    `A pessoa tinha cabelos ${villain.cabelo.toLowerCase()}.`,
    `Disseram que era ${villain.sexo === 'Feminino' ? 'uma mulher' : 'um homem'}.`,
    `Vi que o(a) suspeito(a) estava praticando ${villain.hobby.toLowerCase()}.`,
    `O(a) suspeito(a) tinha como característica: ${villain.caracteristica.toLowerCase()}.`
  ];

  const fullText = `${cityClues[Math.floor(Math.random() * cityClues.length)]} ${traitClues[Math.floor(Math.random() * traitClues.length)]}`;

  return {
    text: fullText,
    npcType
  };
};

export const filterTrupe = (allSuspects: Trupe[], filters: any): Trupe[] => {
  return allSuspects.filter(s => {
    return (!filters.sexo || s.sexo === filters.sexo) &&
           (!filters.hobby || s.hobby === filters.hobby) &&
           (!filters.cabelo || s.cabelo === filters.cabelo) &&
           (!filters.caracteristica || s.caracteristica === filters.caracteristica) &&
           (!filters.veiculo || s.veiculo === filters.veiculo);
  });
};
