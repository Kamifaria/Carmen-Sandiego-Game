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

// ─────────────────────────────────────────────
// ROOT SCREEN — full viewport, cinematic bg
// ─────────────────────────────────────────────
export const StyledGameScreen = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
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
  align-items: stretch;
  width: 95vw;
  max-width: 1300px;
  height: 80vh;
  background-color: #000;
  border: 3px solid #2a5f6b;
  box-shadow:
    0 0 0 1px #000,
    0 0 30px rgba(0, 200, 255, 0.15),
    inset 0 0 40px rgba(0, 0, 0, 0.8);
  overflow: hidden;
  border-radius: 4px;
`;

// ─────────────────────────────────────────────
// LEFT COLUMN — typewriter intro area
// ─────────────────────────────────────────────
export const LeftColumn = styled.div<{ hidden?: boolean }>`
  position: relative;
  flex: 0 0 380px;
  width: 380px;
  height: 100%;
  display: ${({ hidden }) => (hidden ? "none" : "flex")};
  flex-direction: column;
  background-color: #20646c;
  border-right: 2px solid #2a5f6b;
  transition: all 0.4s ease;
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
  font-family: "Courier New", monospace;
  font-size: 0.9rem;
  letter-spacing: 1px;
  color: #ff4444;
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
  background-color: #050e14;
  z-index: 10;
  overflow: hidden;
`;

// ─────────────────────────────────────────────
// BOTTOM MESSAGE + BUTTONS
// ─────────────────────────────────────────────
export const BottomSection = styled.div`
  width: 100%;
  min-height: 90px;
  max-height: 90px;
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
