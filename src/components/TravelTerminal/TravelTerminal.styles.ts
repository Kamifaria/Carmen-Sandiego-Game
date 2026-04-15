import styled, { keyframes } from "styled-components";

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
`;

export const TerminalWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #050e14;
  display: flex;
  flex-direction: column;
  padding: 30px;
  box-sizing: border-box;
  color: #64ffda;
  font-family: "Space Mono", monospace;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

export const TerminalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #1a4a5a;
  padding-bottom: 15px;
  margin-bottom: 20px;

  h2 {
    margin: 0;
    font-size: 1.5rem;
    letter-spacing: 3px;
    text-transform: uppercase;
  }

  span {
    font-size: 0.8rem;
    color: #ffd700;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
    h2 { font-size: 1.1rem; }
  }
`;

export const ContentRow = styled.div`
  display: flex;
  gap: 30px;
  flex: 1;
  overflow-y: auto;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 15px;
  }
`;

export const DepartureBoard = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-height: min-content;
`;

export const FlightRow = styled.div<{ $isSelected: boolean }>`
  background: ${({ $isSelected }) => ($isSelected ? "rgba(100, 255, 218, 0.15)" : "rgba(11, 31, 42, 0.6)")};
  border: 1px solid ${({ $isSelected }) => ($isSelected ? "#64ffda" : "#1a4a5a")};
  padding: 12px 15px;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: rgba(100, 255, 218, 0.1);
    border-color: #64ffda;
  }

  .city-name {
    font-size: 1rem;
    font-weight: bold;
    letter-spacing: 1px;
  }

  .status {
    font-size: 0.7rem;
    padding: 3px 6px;
    background: ${({ $isSelected }) => ($isSelected ? "#64ffda" : "#1a4a5a")};
    color: ${({ $isSelected }) => ($isSelected ? "#050e14" : "#64ffda")};
    border-radius: 2px;
  }
`;

export const RadarPanel = styled.div`
  width: 250px;
  height: 250px;
  background: #0b1f2a;
  border: 2px solid #1a4a5a;
  border-radius: 50%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0 0 30px rgba(0,0,0,0.5);
  flex-shrink: 0;

  @media (max-width: 900px) {
    align-self: center;
    width: 160px;
    height: 160px;
    margin-top: 10px;
  }

  /* Radar sweep effect */
  &::after {
    content: "";
    position: absolute;
    width: 50%;
    height: 2px;
    background: linear-gradient(to right, rgba(100, 255, 218, 0.5), transparent);
    top: 50%;
    left: 50%;
    transform-origin: left center;
    animation: rotate 4s linear infinite;
  }

  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

export const TargetDot = styled.div<{ $x: number, $y: number, $active: boolean }>`
  position: absolute;
  width: 10px;
  height: 10px;
  background: ${({ $active }) => ($active ? "#ffd700" : "#64ffda")};
  border-radius: 50%;
  left: ${props => props.$x}%;
  top: ${props => props.$y}%;
  transform: translate(-50%, -50%);
  display: ${({ $active }) => ($active ? "block" : "none")};
  box-shadow: 0 0 10px ${props => props.$active ? "#ffd700" : "#64ffda"};
  animation: ${blink} 1s infinite;
`;

export const ConfirmButton = styled.button`
  margin-top: 20px;
  background: #ffd700;
  color: #050e14;
  border: none;
  padding: 15px;
  font-family: inherit;
  font-weight: bold;
  font-size: 1.1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
  letter-spacing: 2px;

  &:hover {
    background: #ffcc00;
    transform: scale(1.02);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    background: #1a4a5a;
    color: #64ffda;
  }
`;
