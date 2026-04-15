import { LocationData } from "../utils/localUtils";
import { Trupe } from "../utils/trupeUtils";

export interface Clue {
  text: string;
  type: 'suspect' | 'city';
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

  // Default NPC for Markets, Cinemas, etc.
  return 'merchant';
};

export const generateClue = (villain: Trupe, nextCity: LocationData, placeName: string): Clue => {
  const isCityClue = Math.random() > 0.4; // 60% chance for city clues
  const npcType = getNpcForPlace(placeName);

  if (isCityClue) {
    const metadata = nextCity.metadata;
    const cityClueTypes = ['description', 'currency', 'flag', 'landmark'];
    const selectedType = metadata 
      ? cityClueTypes[Math.floor(Math.random() * cityClueTypes.length)]
      : 'description';

    let text = "";
    switch (selectedType) {
      case 'currency':
        text = `"O suspeito trocou todo o seu dinheiro por ${metadata?.currency} antes de partir."`;
        break;
      case 'flag':
        text = `"Eu vi uma bandeira com as cores ${metadata?.flag} nas malas do viajante."`;
        break;
      case 'landmark':
        text = `"O viajante parecia muito interessado em visitar o ${metadata?.landmark}."`;
        break;
      default:
        text = `"Fugiram para uma região assim: ${nextCity.description.substring(0, 60)}..."`;
    }

    return { text, type: 'city', npcType };
  } else {
    // Pista sobre o suspeito
    const suspectAttrs = [
      `tinha o cabelo ${villain.cabelo}`,
      `disse que adora ${villain.hobby}`,
      `usava ${villain.caracteristica}`,
      `foi visto dirigindo um(a) ${villain.veiculo}`,
    ];
    const text = `"A pessoa que você procura ${suspectAttrs[Math.floor(Math.random() * suspectAttrs.length)]}."`;
    
    return { text, type: 'suspect', npcType };
  }
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
