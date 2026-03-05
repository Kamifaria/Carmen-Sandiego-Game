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
    try {
      const response = await api.post('/api/login', { username, password });

      // Verificando o retorno "Login successful" conforme solicitado
      if (response.data.message === 'Login successful') {
        const userData = response.data.user;

        // Persistência: Salvando dados do usuário no localStorage
        localStorage.setItem('userId', userData.id);
        localStorage.setItem('username', userData.username);

        // Atualizando o contexto global
        setUser({ username: userData.username });

        // Transição de tela para o jogo
        navigate('/game');

        // Limpeza de Cache: Recarrega se necessário (opcional em SPA, mas solicitado)
        // window.location.reload(); 
      } else {
        setError('Usuário ou senha incorretos.');
      }
    } catch (err) {
      console.error('Erro no login:', err);
      setError('Falha na autenticação. Verifique suas credenciais.');
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
          <input type="submit" value="Login" />
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
