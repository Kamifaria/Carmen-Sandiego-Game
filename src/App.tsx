import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import LoadGame from './components/LoadGame/LoadGame';
import Options from './components/Options/Options';
import GameScreen from './components/GameScreen/GameScreen';
import { AuthProvider } from './services/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/load-game" element={<LoadGame />} />
        <Route path="/options" element={<Options />} />
        <Route path="/game" element={<GameScreen />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;
