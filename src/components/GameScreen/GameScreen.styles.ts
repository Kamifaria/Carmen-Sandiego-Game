import styled, { keyframes } from "styled-components";

// ─────────────────────────────────────────────
// ANIMATIONS
// ─────────────────────────────────────────────
const scanline = keyframes`
  0% { background-position: 0 0; }
  100% { background-position: 0 100%; }
`;

const flicker = keyframes`
  0%, 99% { opacity: 1; }
  100% { opacity: 0.97; }
`;

const rainAnim = keyframes`
  0% { background-position: 0px 0px; }
  100% { background-position: 400px 1000px; }
`;

const snowAnim = keyframes`
  0% { background-position: 0px 0px; }
  100% { background-position: 100px 500px; }
`;

export const WeatherOverlay = styled.div<{ $type: 'clear' | 'rain' | 'snow' }>`
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
  display: ${({ $type }) => ($type === 'clear' ? 'none' : 'block')};
  
  background-image: ${({ $type }) => 
    $type === 'rain' ? "url('https://www.transparenttextures.com/patterns/stardust.png')" :
    $type === 'snow' ? "url('https://www.transparenttextures.com/patterns/snow.png')" : 'none'
  };
  
  opacity: 0.4;
  animation: ${({ $type }) => ($type === 'rain' ? rainAnim : snowAnim)} 1.5s linear infinite;
`;

// ─────────────────────────────────────────────
// ROOT SCREEN — full viewport, cinematic bg
// ─────────────────────────────────────────────
export const StyledGameScreen = styled.div`
  position: relative;
  width: 100%;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: radial-gradient(ellipse at center, #0d1f2d 0%, #000 100%);
  overflow: hidden;

  /* CRT scanlines overlay */
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(
      to bottom,
      transparent 0px,
      transparent 2px,
      rgba(0,0,0,0.08) 2px,
      rgba(0,0,0,0.08) 4px
    );
    pointer-events: none;
    z-index: 100;
    animation: ${flicker} 8s infinite alternate;
  }
`;

// ─────────────────────────────────────────────
// MAIN WRAPPER — the game "terminal" window
// ─────────────────────────────────────────────
export const ScreenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 95vw;
  max-width: 1300px;
  height: 85vh;
  background-color: #000;
  border: 3px solid #2a5f6b;
  box-shadow:
    0 0 0 1px #000,
    0 0 30px rgba(0, 200, 255, 0.15),
    inset 0 0 40px rgba(0, 0, 0, 0.8);
  overflow: hidden;
  border-radius: 4px;
`;

export const MainContentArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  flex: 1;
  width: 100%;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

// ─────────────────────────────────────────────
// LEFT COLUMN — typewriter intro area
// ─────────────────────────────────────────────
export const LeftColumn = styled.div<{ $isHidden?: boolean }>`
  position: relative;
  flex: ${({ $isHidden }) => ($isHidden ? "0 0 0px" : "0 0 380px")};
  width: ${({ $isHidden }) => ($isHidden ? "0px" : "380px")};
  opacity: ${({ $isHidden }) => ($isHidden ? 0 : 1)};
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #20646c;
  border-right: ${({ $isHidden }) => ($isHidden ? "0px" : "2px solid #2a5f6b")};
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;

  @media (max-width: 768px) {
    flex: ${({ $isHidden }) => ($isHidden ? "0 0 0px" : "1")};
    width: 100%;
    min-height: ${({ $isHidden }) => ($isHidden ? "0px" : "180px")};
    max-height: 250px;
    border-right: none;
    border-bottom: ${({ $isHidden }) => ($isHidden ? "0px" : "2px solid #2a5f6b")};
  }
`;

export const LeftColumnImage = styled.img<{ isVisible: boolean }>`
  position: relative;
  width: 100%;
  height: 100%;
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
`;

// ─────────────────────────────────────────────
// RIGHT COLUMN — main game area (expands to fill)
// ─────────────────────────────────────────────
export const RightColumn = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  background-color: #050e14;
  color: #e0e0e0;
  overflow: hidden;
`;

// ─────────────────────────────────────────────
// CITY/TIME INFO BAR
// ─────────────────────────────────────────────
export const CityInfoBar = styled.div<{ isVisible: boolean }>`
  display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 8px 20px;
  box-sizing: border-box;
  background: #0b1f2a;
  border-bottom: 1px solid #1a4a5a;
  font-family: "Space Mono", monospace;
  font-size: 0.9rem;
  font-weight: bold;
  letter-spacing: 1px;
  color: #ff4444;
  text-shadow: 0 0 5px rgba(255, 68, 68, 0.5);
  z-index: 2;
  flex-shrink: 0;
`;

// ─────────────────────────────────────────────
// CITY DESCRIPTION TEXT
// ─────────────────────────────────────────────
export const RightColumnDescription = styled.div<{ isVisible: boolean }>`
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  font-family: "Pixelify Sans", sans-serif;
  font-size: 1.25rem;
  line-height: 1.7;
  text-align: start;
  width: 100%;
  flex: 1;
  padding: 20px 25px;
  box-sizing: border-box;
  color: #b8d4e0;
  overflow-y: auto;
  z-index: 1;
`;

export const CityBackground = styled.div<{ $img: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.$img});
  background-size: cover;
  background-position: center;
  opacity: 0.25;
  z-index: 0;
  filter: sepia(0.2) contrast(1.1);
  transition: background-image 1s ease-in-out;
`;

// ─────────────────────────────────────────────
// OPTIONS OVERLAY (Map / Search / Dossier)
// ─────────────────────────────────────────────
export const OptionsContainer = styled.div<{ isVisible: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  /* leave space for BottomSection */
  height: calc(100% - 90px);
  display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
  flex-direction: column;
  align-items: stretch;
  background-color: rgba(5, 14, 20, 0.9);
  backdrop-filter: blur(10px);
  z-index: 10;
  overflow: hidden;
  border-bottom: 2px solid #1a4a5a;

  @media (max-width: 768px) {
    height: calc(100% - 110px);
  }
`;

// ─────────────────────────────────────────────
// BOTTOM MESSAGE + BUTTONS
// ─────────────────────────────────────────────
export const BottomSection = styled.div`
  width: 100%;
  min-height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #0b1f2a;
  border-top: 2px solid #1a4a5a;
  color: #ffffff;
  font-family: "Pixelify Sans", sans-serif;
  font-size: 1rem;
  padding: 5px 15px;
  box-sizing: border-box;
  z-index: 20;
  flex-shrink: 0;
  margin-top: auto;
  text-align: center;

  @media (max-width: 768px) {
    min-height: 110px;
  }
`;

export const BottomMessage = styled.p`
  margin: 0 0 6px 0;
  color: #ffd700;
  font-size: 0.9rem;
  line-height: 1.3;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

// ─────────────────────────────────────────────
// TYPEWRITER AREA
// ─────────────────────────────────────────────
export const TypingArea = styled.div`
  flex: 1;
  width: 100%;
  background: linear-gradient(180deg, #f5f0e8 60%, #e0d8cc 100%);
  font-family: "Courier New", Courier, monospace;
  font-size: 1.1rem;
  line-height: 1.6;
  color: #111;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px 18px 10px 18px;
  border-right: 3px double #888;
  border-left: 3px double #888;
  overflow: hidden;
  box-sizing: border-box;

  /* paper lines effect */
  background-image:
    linear-gradient(180deg, transparent 95%, rgba(0,0,0,0.07) 95%),
    linear-gradient(180deg, #f5f0e8 60%, #e0d8cc 100%);
  background-size: 100% 1.6em;
`;

export const MessageContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow-y: auto;
  padding: 5px 0;
  scroll-behavior: smooth;
`;

export const TypingAreaItem = styled.div`
  margin-bottom: 6px;
  opacity: 0.75;
  font-size: 0.95rem;
`;

// ─────────────────────────────────────────────
// TYPEWRITER IMAGE CONTAINER
// ─────────────────────────────────────────────
export const TypewriterContainer = styled.div<{ isTyping: boolean }>`
  width: 100%;
  height: 160px;
  flex-shrink: 0;
  background: ${({ isTyping }) =>
    isTyping
      ? `url('https://64.media.tumblr.com/d4eff9e875bc23d6bad290e97d5259f0/tumblr_p3om3qq1c71ww81r3o1_540.gif') no-repeat center bottom`
      : `url('/oldTypewriterSprite.svg') no-repeat center bottom`};
  background-size: contain;
`;

// ─────────────────────────────────────────────
// BUTTON ROW
// ─────────────────────────────────────────────
export const ButtonContainerWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    gap: 8px;
  }
`;

// ─────────────────────────────────────────────
// GAME OVER / WIN OVERLAY
// ─────────────────────────────────────────────
export const GameOverlay = styled.div<{ type: "won" | "lost" }>`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ type }) =>
    type === "won"
      ? "radial-gradient(ellipse, rgba(0,60,0,0.95) 0%, rgba(0,0,0,0.98) 100%)"
      : "radial-gradient(ellipse, rgba(80,0,0,0.95) 0%, rgba(0,0,0,0.98) 100%)"};
  z-index: 50;
  font-family: "Pixelify Sans", sans-serif;
  text-align: center;
  padding: 40px;

  h1 {
    font-size: 3rem;
    color: ${({ type }) => (type === "won" ? "#00ff88" : "#ff3333")};
    text-shadow: 0 0 20px ${({ type }) => (type === "won" ? "#00ff88" : "#ff3333")};
    margin-bottom: 20px;
  }

  p {
    font-size: 1.2rem;
    color: #ccc;
    margin-bottom: 30px;
  }

  button {
    padding: 12px 30px;
    font-family: "Pixelify Sans", sans-serif;
    font-size: 1.2rem;
    cursor: pointer;
    background: transparent;
    color: #fff;
    border: 2px solid #fff;
    transition: all 0.2s;
    &:hover {
      background: rgba(255,255,255,0.15);
    }
  }
`;

// legacy – kept so other imports don't break
export const CluesComputerWrapper = styled.div`
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  z-index: 3;
`;
export const SubHeader = styled.div`
  width: 100%;
  background-color: black;
  color: white;
  font-family: "Pixelify Sans", sans-serif;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  border-bottom: double grey;
`;
// ─────────────────────────────────────────────
// WITNESS / NPC INTERACTION
// ─────────────────────────────────────────────
export const WitnessWrapper = styled.div<{ isVisible: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 600px;
  background: rgba(10, 30, 40, 0.95);
  border: 2px solid #2a5f6b;
  display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
  flex-direction: row;
  align-items: center;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 30px rgba(0,0,0,0.8);
  z-index: 100;
  backdrop-filter: blur(10px);
  animation: slideUp 0.4s ease-out;

  @media (max-width: 600px) {
    flex-direction: column;
    width: 95%;
  }

  @keyframes slideUp {
    from { transform: translate(-50%, 0%); opacity: 0; }
    to { transform: translate(-50%, -50%); opacity: 1; }
  }

  @media (max-width: 768px) {
    width: 95%;
    padding: 15px;
    top: auto;
    bottom: 20px;
    transform: translate(-50%, 0%);
    
    @keyframes slideUpMobile {
      from { transform: translate(-50%, 100%); opacity: 0; }
      to { transform: translate(-50%, 0%); opacity: 1; }
    }
    animation: slideUpMobile 0.4s ease-out;
  }
`;

export const WitnessPortrait = styled.div<{ $img: string }>`
  width: 150px;
  height: 150px;
  flex-shrink: 0;
  background-image: url(${props => props.$img});
  background-size: cover;
  background-position: center;
  border: 4px solid #1a4a5a;
  border-radius: 4px;
  margin-right: 20px;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);

  @media (max-width: 600px) {
    margin-right: 0;
    margin-bottom: 15px;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.1) 1px,
      transparent 1px,
      transparent 2px
    );
    pointer-events: none;
  }
`;

export const WitnessText = styled.div`
  flex: 1;
  font-family: "Space Mono", monospace;
  font-size: 1.1rem;
  color: #fff;
  line-height: 1.4;

  span {
    display: block;
    margin-bottom: 10px;
    font-weight: bold;
    color: #ffd700;
    text-transform: uppercase;
    font-size: 0.8rem;
    letter-spacing: 2px;
  }
`;

export const CloseWitnessButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: 1px solid #2a5f6b;
  color: #2a5f6b;
  padding: 4px 10px;
  cursor: pointer;
  font-family: inherit;
  font-size: 0.8rem;
  transition: all 0.2s;

  &:hover {
    background: #2a5f6b;
    color: #fff;
  }
`;
