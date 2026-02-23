import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, GlobalStyle, Message } from './Register.styles';

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
      const response = await fetch('http://localhost:3001/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password, confirmPassword }),
      });

      if (response.ok) {
        const result = await response.json();
        if (result && result.message) {
          setMessage(result.message);
          setIsError(false);
          setTimeout(() => navigate('/login'), 2000);
        } else {
          console.error('Resposta do servidor não contém mensagem esperada:', result);
        }
      } else if (response.status === 400) {
        const errorResponse = await response.json();
        setMessage(errorResponse.message);
        setIsError(true);
      } else {
        console.error('Falha ao enviar solicitação de registro:', response.status);
      }
    } catch (error) {
      console.error('Erro ao tentar registrar:', error);
      setMessage('Erro ao tentar registrar');
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
