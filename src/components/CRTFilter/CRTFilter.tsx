import React from 'react';
import styled, { keyframes } from 'styled-components';

const flicker = keyframes`
  0% { opacity: 0.27861; }
  5% { opacity: 0.34769; }
  10% { opacity: 0.23604; }
  15% { opacity: 0.90626; }
  20% { opacity: 0.18128; }
  25% { opacity: 0.83891; }
  30% { opacity: 0.65583; }
  35% { opacity: 0.57807; }
  40% { opacity: 0.26559; }
  45% { opacity: 0.84693; }
  50% { opacity: 0.96019; }
  55% { opacity: 0.08594; }
  60% { opacity: 0.20313; }
  65% { opacity: 0.71988; }
  70% { opacity: 0.53455; }
  75% { opacity: 0.37268; }
  80% { opacity: 0.19145; }
  85% { opacity: 0.07483; }
  90% { opacity: 0.57158; }
  95% { opacity: 0.41203; }
  100% { opacity: 0.36193; }
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: #000;
`;

const Overlay = styled.div`
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.2) 50%), 
              linear-gradient(90deg, rgba(255, 0, 0, 0.04), rgba(0, 255, 0, 0.01), rgba(0, 0, 255, 0.04));
  background-size: 100% 3px, 3px 100%;
`;

const Grain = styled.div`
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 11;
  background: rgba(18, 16, 16, 0.05);
  opacity: 0.05;
  animation: ${flicker} 0.15s infinite;
`;

const Vignette = styled.div`
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 12;
  box-shadow: inset 0 0 100px rgba(0,0,0,0.5);
  background: radial-gradient(circle, rgba(0,0,0,0) 60%, rgba(0,0,0,0.4) 100%);
`;

const Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  /* Optional: subtle glow filter for that retro look */
  /* filter: brightness(1.1) contrast(1.1); */
`;

interface CRTFilterProps {
  children: React.ReactNode;
}

const CRTFilter: React.FC<CRTFilterProps> = ({ children }) => {
  return (
    <Container>
      <Content>{children}</Content>
      <Overlay />
      <Grain />
      <Vignette />
    </Container>
  );
};

export default CRTFilter;
