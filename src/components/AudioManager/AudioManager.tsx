import React, { useEffect, useRef } from 'react';

interface AudioManagerProps {
  currentCity: string;
  isMuted: boolean;
}

const AudioManager: React.FC<AudioManagerProps> = ({ currentCity, isMuted }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Mapeamento de sons por região (Exemplo)
  const getAudioPath = (city: string) => {
    const name = city.toLowerCase();
    if (name.includes('paris') || name.includes('roma') || name.includes('londres')) return '/assets/sounds/ambient_europe.mp3';
    if (name.includes('tóquio') || name.includes('hong kong') || name.includes('seul')) return '/assets/sounds/ambient_asia.mp3';
    if (name.includes('rio de janeiro') || name.includes('bogotá')) return '/assets/sounds/ambient_latin.mp3';
    if (name.includes('cairo') || name.includes('dubai')) return '/assets/sounds/ambient_mideast.mp3';
    return '/assets/sounds/ambient_default.mp3';
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = getAudioPath(currentCity);
      audioRef.current.loop = true;
      if (!isMuted) {
        audioRef.current.play().catch(() => {});
      }
    }
  }, [currentCity, isMuted]);

  return (
    <audio ref={audioRef} style={{ display: 'none' }} />
  );
};

export default AudioManager;
