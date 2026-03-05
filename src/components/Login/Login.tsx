// src/components/Login/Login.tsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../services/AuthContext';
import api from '../../services/api';
import { GlobalStyle, Container, ErrorMessage } from './Login.styles';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { setUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const container = document.querySelector('.container');
    if (container) {
      container.classList.add('show');
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await api.post('/api/login', { username, password });

      if (response.data.message === 'Login successful') {
        const userData = response.data.user;
        localStorage.setItem('userId', userData.id);
        localStorage.setItem('username', userData.username);
        setUser({ username: userData.username });
        navigate('/game');
      } else {
        setError('Usuário ou senha incorretos.');
      }
    } catch (err) {
      console.error('Erro no login:', err);
      setError('Falha na autenticação. Verifique suas credenciais.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <GlobalStyle />
      <Container className="container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <input
            type="submit"
            value={isLoading ? "Carregando..." : "Login"}
            disabled={isLoading}
            style={{ opacity: isLoading ? 0.7 : 1, cursor: isLoading ? 'not-allowed' : 'pointer' }}
          />
          {error && <ErrorMessage className="active">{error}</ErrorMessage>}
        </form>
        <div className="signup-text">
          <p>
            Don't have an account? <a href="/register">Sign up</a>
          </p>
        </div>
      </Container>
    </>
  );
};

export default Login;
