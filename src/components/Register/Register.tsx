import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, GlobalStyle, Message } from './Register.styles';
import api from '../../services/api';

const Register: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await api.post('/api/register', { username, email, password, confirmPassword });

      if (response.status === 201) {
        setMessage(response.data.message || 'Registration successful!');
        setIsError(false);
        setTimeout(() => navigate('/login'), 2000);
      }
    } catch (error: any) {
      console.error('Erro ao tentar registrar:', error);
      if (error.response && error.response.data && error.response.data.message) {
        setMessage(error.response.data.message);
      } else {
        setMessage('Erro ao tentar registrar');
      }
      setIsError(true);
    }
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Confirm Password:</label>
            <input
              type="password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <input type="submit" value="Register" />
        </form>
        <div className="signup-text">
          <p>
            Already have an account? <a href="/login">Sign in</a>
          </p>
        </div>
        <Message show={message !== ''} error={isError}>
          <div className="icon">{isError ? '❌' : '✅'}</div>
          {message}
        </Message>
      </Container>
    </>
  );
};

export default Register;
