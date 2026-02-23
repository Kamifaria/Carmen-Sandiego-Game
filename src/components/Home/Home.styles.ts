// src/components/Home/Home.styles.ts
import styled from 'styled-components';

export const StyledHome = styled.div`
  background-image: url('https://i1.sndcdn.com/artworks-000069403388-nm33w4-t500x500.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Pixelify Sans', sans-serif;
  color: #0f0;
`;

export const Title = styled.h2`
  font-size: 60px;
  margin-bottom: 20px;
  position: absolute;
  top: 10%;
`;

export const Navigation = styled.nav`
  margin-top: 40px;

  a {
    display: inline-block;
    margin-right: 20px;
    padding: 10px 20px;
    color: #0f0;
    text-decoration: none;
    border: 1px solid #0f0;
    transition: all 0.3s ease;

    &:hover {
      background-color: #0f0;
      color: #000;
    }
  }
`;

export const GameOptions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const StyledButton = styled.button`
  font-family: 'Pixelify Sans', sans-serif;
  font-size: 16px;
  background-color: #000;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #333;
  }
`;
