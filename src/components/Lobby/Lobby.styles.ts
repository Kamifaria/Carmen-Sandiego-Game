import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const StyledLobby = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle at center, #0a192f 0%, #020c1b 100%);
  color: #fff;
  padding: 20px;
  overflow-y: auto;
`;

export const LobbyContent = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  animation: ${fadeIn} 0.6s ease-out;

  @media (max-width: 768px) {
    gap: 15px;
  }
`;

export const LobbyHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-bottom: 2px solid #1e3a8a;
  padding-bottom: 10px;

  h1 {
    font-family: "Space Mono", monospace;
    font-size: clamp(1.5rem, 5vw, 2.5rem);
    color: #64ffda;
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 4px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const RankCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 25px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 20px;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0; left: 0; width: 4px; height: 100%;
    background: #64ffda;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    text-align: center;
    padding: 15px;
  }
`;

export const BadgeIcon = styled.div`
  width: 80px;
  height: 80px;
  background: #112240;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  border: 2px solid #64ffda;
  box-shadow: 0 0 15px rgba(100, 255, 218, 0.3);
  flex-shrink: 0;
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const StatItem = styled.div`
  background: rgba(17, 34, 64, 0.6);
  padding: 15px;
  border-radius: 8px;
  border: 1px solid #1e3a8a;
  
  label {
    display: block;
    font-size: 0.75rem;
    color: #8892b0;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
  
  span {
    font-size: 1.5rem;
    font-weight: bold;
    color: #e6f1ff;
    font-family: "Space Mono", monospace;
  }
`;

export const MissionButton = styled.button`
  background: #64ffda;
  color: #0a192f;
  border: none;
  padding: clamp(12px, 3vw, 18px) clamp(20px, 5vw, 40px);
  font-family: "Space Mono", monospace;
  font-weight: bold;
  font-size: 1.2rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
  align-self: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-top: 20px;
  width: 100%;
  max-width: 400px;

  &:hover {
    background: #00d4ff;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 212, 255, 0.3);
  }
`;

export const CriminalsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(clamp(100px, 20vw, 130px), 1fr));
  gap: 15px;
  margin-top: 20px;
`;

export const CriminalCard = styled.div<{ captured?: boolean }>`
  aspect-ratio: 1;
  background-color: #0b1f2a;
  border: 1px solid #1e3a8a;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:hover {
    border-color: #64ffda;
    transform: scale(1.05);
    z-index: 5;
    box-shadow: 0 0 20px rgba(100, 255, 218, 0.2);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* Show faces but grayscale if not captured */
    filter: ${({ captured }) => (captured ? "none" : "grayscale(1) brightness(0.8)")};
    opacity: ${({ captured }) => (captured ? 1 : 0.7)};
    transition: filter 0.5s, transform 0.3s;
  }

  &::after {
    content: ${({ captured }) => (captured ? '"PRESO"' : '"SOLTO"')};
    position: absolute;
    bottom: 5px;
    left: 50%;
    transform: translateX(-50%);
    background: ${({ captured }) => (captured ? "#ff4444" : "#112240")};
    color: white;
    font-size: 0.6rem;
    padding: 2px 8px;
    border-radius: 4px;
    font-weight: bold;
    font-family: "Space Mono", monospace;
    letter-spacing: 1px;
    border: 1px solid ${({ captured }) => (captured ? "#8b0000" : "#1e3a8a")};
  }

  /* Scanline overlay for uncaptured */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: ${({ captured }) => (captured ? "none" : "repeating-linear-gradient(0deg, transparent 0px, transparent 2px, rgba(100, 255, 218, 0.05) 2px, rgba(100, 255, 218, 0.05) 4px)")};
    z-index: 2;
    pointer-events: none;
  }
`;
