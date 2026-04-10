import styled from "styled-components";

// -- Wrappers for the Typewriter effect
export const TypistWrapper = styled.div`
  font-size: 1.1rem;
`;

// -- Main Menu Bar (High-Tech FBI Console)
export const Header = styled.div`
  width: 100%;
  background: linear-gradient(180deg, #020b14 0%, #061523 100%);
  color: #00ffcc;
  font-family: "Courier New", monospace;
  font-weight: bold;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid #00ffcc;
  padding: 5px 15px;
  z-index: 10;
  box-shadow: 0 4px 15px rgba(0, 255, 204, 0.15);
`;

export const HeaderItem = styled.div<{ isSelected?: boolean }>`
  position: relative;
  font-size: 1.1rem;
  padding: 8px 18px;
  margin-right: 15px;
  cursor: pointer;
  background-color: ${({ isSelected }) => (isSelected ? "rgba(0, 255, 204, 0.15)" : "transparent")};
  color: ${({ isSelected }) => (isSelected ? "#ffffff" : "#00ffcc")};
  letter-spacing: 2px;
  text-transform: uppercase;
  border-radius: 4px;
  border: 1px solid ${({ isSelected }) => (isSelected ? "#00ffcc" : "transparent")};
  transition: all 0.3s ease;
  user-select: none;

  &:hover {
    background-color: rgba(0, 255, 204, 0.1);
    color: #ffffff;
    box-shadow: 0 0 10px rgba(0, 255, 204, 0.4);
    border: 1px solid rgba(0, 255, 204, 0.5);
  }
`;

// -- High-Tech Dropdown
export const Dropdown = styled.div<{ show: boolean }>`
  position: absolute;
  top: calc(100% + 5px);
  left: 0;
  background: rgba(5, 14, 20, 0.95);
  backdrop-filter: blur(8px);
  border: 1px solid #00ffcc;
  box-shadow: 0 8px 25px rgba(0, 255, 204, 0.2);
  min-width: 220px;
  display: ${({ show }) => (show ? "flex" : "none")};
  flex-direction: column;
  z-index: 20;
  padding: 8px 0;
  border-radius: 4px;
`;

export const DropdownItem = styled.div`
  font-size: 0.95rem;
  padding: 10px 18px;
  cursor: pointer;
  color: #cce0ee;
  font-family: "Courier New", monospace;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: all 0.2s;

  &:hover {
    background-color: rgba(0, 255, 204, 0.2);
    color: #ffffff;
    padding-left: 24px;
  }
`;

// -- Dossier Modal Overlay (Sleek Holographic Panel)
export const ModalBackground = styled.div`
  position: absolute;
  inset: 0; 
  background: radial-gradient(circle at center, rgba(0, 15, 25, 0.8) 0%, rgba(0, 0, 0, 0.95) 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 50;
  backdrop-filter: blur(5px);
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, rgba(11, 31, 42, 0.9) 0%, rgba(5, 14, 20, 0.95) 100%);
  width: 550px;
  max-width: 90%;
  max-height: 80%;
  border: 1px solid #00ffcc;
  box-shadow: 0 0 30px rgba(0, 255, 204, 0.15), inset 0 0 20px rgba(0, 0, 0, 0.8);
  overflow: hidden;
  border-radius: 8px;
  position: relative;

  &::before {
    content: "INTERPOL MAINFRAME // SECURE LINK";
    position: absolute;
    top: 0; left: 0; right: 0;
    padding: 4px 15px;
    background: #00ffcc;
    color: #000;
    font-family: "Courier New", monospace;
    font-size: 0.75rem;
    font-weight: bold;
    letter-spacing: 3px;
    z-index: 2;
  }
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: row;
  padding: 40px 20px 20px 20px;
  border-bottom: 1px solid rgba(0, 255, 204, 0.3);
`;

export const ImageContainer = styled.div`
  flex: 0 0 140px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const Image = styled.img`
  width: 120px;
  height: 120px;
  object-fit: contain;
  border: 2px solid #00ffcc;
  box-shadow: 0 0 15px rgba(0, 255, 204, 0.3);
  background: rgba(0, 0, 0, 0.5);
  filter: hue-rotate(180deg) contrast(1.2);
`;

export const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  color: #00ffcc;
`;

export const ModalContent = styled.div`
  font-family: "Courier New", monospace;
  font-size: 1rem;

  p { margin: 0 0 8px 0; letter-spacing: 1px; }
  strong { color: #ffffff; margin-right: 6px; text-shadow: 0 0 5px rgba(255,255,255,0.5); }
`;

export const ModalFooter = styled.div<{ isVisible: boolean }>`
  background: rgba(0, 255, 204, 0.05);
  color: #ff4444;
  font-family: "Courier New", monospace;
  font-size: 1rem;
  padding: 20px;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 0.5s ease-out;

  p { margin: 0 0 6px 0; letter-spacing: 1px; }
  strong { color: #ffffff; margin-right: 6px; }
`;
