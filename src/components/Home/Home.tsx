// src/components/Home/Home.tsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../services/AuthContext';
import {
  StyledHome,
  Title,
  Navigation,
  GameOptions,
  StyledButton
} from './Home.styles';

const Home = () => {
  const { user, setUser } = useAuth();
  const [savedGame, setSavedGame] = useState<any>(null);
  const navigate = useNavigate();

  const handleNewGame = () => {
    console.log('Iniciar um novo jogo');
    navigate('/game');
  };

  const handleLoadGame = () => {
    const savedData = localStorage.getItem('savedGame');
    if (savedData) {
      const game = JSON.parse(savedData);
      setSavedGame(game);
    } else {
      setSavedGame(null);
    }
  };

  const handleOptions = () => {
    console.log('Exibir opções');
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/');
  };

  return (
    <StyledHome>
      <Title>Where in the World is Genei Ryodan?</Title>
      {user ? (
        <GameOptions>
          <h3>Welcome, {user.username}</h3>
          <StyledButton onClick={handleNewGame}>New Game</StyledButton>
          <StyledButton onClick={handleLoadGame}>Load Game</StyledButton>
          {savedGame && (
            <div>
              <h2>Saved Game Information</h2>
              <p>Last saved: {savedGame.date}</p>
            </div>
          )}
          <StyledButton onClick={handleOptions}>Options</StyledButton>
          <StyledButton onClick={handleLogout}>Logout</StyledButton>
        </GameOptions>
      ) : (
        <Navigation>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </Navigation>
      )}
    </StyledHome>
  );
};

export default Home;
