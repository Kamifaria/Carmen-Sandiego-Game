export const artefacts = [
    "Dedos de Sukuna",
    "Olhos Escarlates do clã Kurta",
    "Esferas do Dragão",
    "Pedra Filosofal",
    "Katana do Yorichi",
    "Akuma no Mi",
    "Pochita",
    "Swordfish II",
    "Kurama",
    "Death Note",
    "Behelit Vermelho",
    "Santo Graal",
    "Murasame",
    "Dragon Slayer",
    "Zanpakuto",
    "Skill Hunter",
    "Exódia",
    "Pista Tubarão Hot Wheels",
    "Rinnegan",
  ];
  
  export function pickRandomArtefact(): string {
    const randomIndex = Math.floor(Math.random() * artefacts.length);
    return artefacts[randomIndex];
  }
  