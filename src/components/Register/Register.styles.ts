import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Pixelify Sans', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-color: #f4f4f4;
    background-image: url('https://i.pinimg.com/originals/79/98/2f/79982f861d571bed57fa8cafc33fea64.gif');
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
  }
`;

export const Container = styled.div`
  position: relative;
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 320px;
  height: auto;
  min-height: 600px;
  background-image: url('https://i.pinimg.com/564x/8a/9b/43/8a9b434004d294b33df4b17fad22c51b.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  h2 {
    text-align: center;
    margin-bottom: 20px;
  }

  input[type="text"],
  input[type="email"],
  input[type="password"] {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
  }

  input[type="submit"] {
    width: 100%;
    padding: 10px;
    margin-top: 10px;
    background-color: #000000;
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 16px;
    cursor: pointer;

    &:hover {
      background-color: #8a0303;
    }
  }

  .signup-text {
    text-align: center;
    color: white;

    a {
      color: white;
      text-decoration: none;
      transition: color 0.3s;

      &:hover {
        text-decoration: underline;
        color: #c7cdd3;
      }
    }
  }
`;

interface MessageProps {
  show: boolean;
  error: boolean;
}

export const Message = styled.div<MessageProps>`
  position: fixed;
  bottom: 20px;
  left: 20px;
  color: ${(props) => (props.error ? '#ff0000' : '#28a745')};
  background-color: #e6f4ea;
  padding: 10px;
  border-radius: 5px;
  border: 2px solid black;
  display: ${(props) => (props.show ? 'flex' : 'none')};
  align-items: center;

  .icon {
    color: ${(props) => (props.error ? '#dc3545' : '#28a745')};
    font-size: 24px;
    margin-right: 10px;
  }
`;
