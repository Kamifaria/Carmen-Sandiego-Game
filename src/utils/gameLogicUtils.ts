export interface DifficultySettings {
  pathLength: number;
  maxHours: number;
  rankName: string;
}

export const getDifficultySettings = (casesResolved: number): DifficultySettings => {
  if (casesResolved < 5) {
    return {
      pathLength: 4,
      maxHours: 168, // 1 semana (como no original)
      rankName: "Novato"
    };
  } else if (casesResolved < 15) {
    return {
      pathLength: 5,
      maxHours: 156,
      rankName: "Detetive"
    };
  } else if (casesResolved < 30) {
    return {
      pathLength: 6,
      maxHours: 144,
      rankName: "Inspetor"
    };
  } else {
    return {
      pathLength: 8,
      maxHours: 120,
      rankName: "Superintendente"
    };
  }
};
