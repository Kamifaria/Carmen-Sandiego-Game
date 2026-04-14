import styled, { keyframes } from "styled-components";

const planeMove = keyframes`
  0% { transform: translate(-100% , 0) rotate(10deg); left: 0%; top: 60%; }
  50% { transform: translate(0, -50px) rotate(0deg); left: 50%; top: 40%; }
  100% { transform: translate(100%, 0) rotate(-10deg); left: 100%; top: 20%; }
`;

const cloudMove = keyframes`
  from { background-position: 0 0; }
  to { background-position: 1000px 0; }
`;

export const TransitionOverlay = styled.div<{ isVisible: boolean }>`
  position: fixed;
  inset: 0;
  background: #050e14;
  z-index: 9999;
  display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: url('https://www.transparenttextures.com/patterns/carbon-fibre.png');
    opacity: 0.2;
    pointer-events: none;
  }
`;

export const MapBackground = styled.div`
  position: absolute;
  width: 150%;
  height: 100%;
  background: url('https://static.vecteezy.com/system/resources/previews/000/390/535/original/world-map-vector.jpg') no-repeat center;
  background-size: contain;
  opacity: 0.1;
  filter: invert(1) sepia(1) saturate(5) hue-rotate(175deg);
`;

export const Plane = styled.img`
  position: absolute;
  width: 120px;
  image-rendering: pixelated;
  z-index: 10;
  animation: ${planeMove} 3s ease-in-out infinite;
`;

export const Clouds = styled.div`
  position: absolute;
  inset: 0;
  background: url('https://www.transparenttextures.com/patterns/clouds.png');
  opacity: 0.3;
  animation: ${cloudMove} 20s linear infinite;
  pointer-events: none;
`;

export const destinationInfo = styled.div`
  position: absolute;
  bottom: 100px;
  text-align: center;
  font-family: "Space Mono", monospace;
  
  h2 {
    color: #64ffda;
    font-size: 2rem;
    margin-bottom: 10px;
    letter-spacing: 5px;
    text-transform: uppercase;
  }
  
  p {
    color: #8892b0;
    font-size: 1rem;
    letter-spacing: 2px;
  }
`;
