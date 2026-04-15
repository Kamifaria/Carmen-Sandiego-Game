export type Rank = 'Novato' | 'Investigador' | 'Agente Sênior' | 'Ás da Interpol';

export interface CareerStats {
  casesSolved: number;
  currentRank: Rank;
}

export const getRankByCases = (cases: number): Rank => {
  if (cases < 3) return 'Novato';
  if (cases < 6) return 'Investigador';
  if (cases < 10) return 'Agente Sênior';
  return 'Ás da Interpol';
};

export const saveVictory = (): CareerStats => {
  const saved = localStorage.getItem('carmen_sandiego_career');
  let stats: CareerStats = saved ? JSON.parse(saved) : { casesSolved: 0, currentRank: 'Novato' };
  
  stats.casesSolved += 1;
  stats.currentRank = getRankByCases(stats.casesSolved);
  
  localStorage.setItem('carmen_sandiego_career', JSON.stringify(stats));
  return stats;
};

export const getCareerStats = (): CareerStats => {
  const saved = localStorage.getItem('carmen_sandiego_career');
  return saved ? JSON.parse(saved) : { casesSolved: 0, currentRank: 'Novato' };
};
