import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface SavedGameData {
  date: string;
}

const LoadGame = () => {
  const [savedGame, setSavedGame] = useState<SavedGameData | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedData = localStorage.getItem('savedGame');
    if (savedData) {
      setSavedGame(JSON.parse(savedData) as SavedGameData);
    }
  }, []);

  const handleLoadGameClick = () => {
    if (savedGame) {
      alert('Game loaded successfully!');
      navigate('/game');
    } else {
      alert('No saved game found.');
    }
  };

  return (
    <div>
      <h2>Load Game</h2>
      <p>Click the button below to load your saved game:</p>
      <button onClick={handleLoadGameClick}>Load Game</button>
      <p>{savedGame && `Last saved: ${savedGame.date}`}</p>
      <Link to="/home">Back to Home</Link>
    </div>
  );
};

export default LoadGame;

