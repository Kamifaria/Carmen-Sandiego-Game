import styled from "styled-components";

// -- Wrappers for the Typewriter effect
export const TypistWrapper = styled.div`
  font-size: 1.1rem;
`;

// -- Main Menu Bar (Looks like Windows 95 / MS-DOS)
export const Header = styled.div`
  width: 100%;
  background-color: #d4cfc1;
  color: black;
  font-family: "Pixelify Sans", sans-serif;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 2px solid #000;
  padding: 2px 8px;
  z-index: 10;
  box-shadow: inset 0 2px 0 rgba(255, 255, 255, 0.8), inset 0 -2px 0 rgba(0, 0, 0, 0.2);
`;

export const HeaderItem = styled.div<{ isSelected?: boolean }>`
  position: relative;
  font-size: 1.3rem;
  padding: 4px 12px;
  cursor: pointer;
  background-color: ${({ isSelected }) => (isSelected ? "#000" : "transparent")};
  color: ${({ isSelected }) => (isSelected ? "#fff" : "#000")};
  letter-spacing: 1px;
  user-select: none;

  &:hover {
    background-color: ${({ isSelected }) => (isSelected ? "#000" : "#a8a497")};
    color: ${({ isSelected }) => (isSelected ? "#fff" : "#000")};
  }
`;

export const Dropdown = styled.div<{ show: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #d4cfc1;
  border: 2px solid #000;
  box-shadow: 4px 4px 0 rgba(0,0,0,0.5);
  min-width: 180px;
  display: ${({ show }) => (show ? "flex" : "none")};
  flex-direction: column;
  z-index: 20;
  padding: 4px 0;
`;

export const DropdownItem = styled.div`
  font-size: 1.1rem;
  padding: 6px 12px;
  cursor: pointer;
  color: #000;
  font-family: "Pixelify Sans", sans-serif;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

// -- Dossier Modal Overlay (Center screen reading)
export const ModalBackground = styled.div`
  font-family: "Pixelify Sans", sans-serif;
  position: absolute;
  inset: 0; 
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 50;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #f0e6cc;
  width: 500px;
  max-width: 90%;
  max-height: 80%;
  border: 3px solid #111;
  box-shadow: 6px 6px 0 rgba(0, 0, 0, 0.8);
  overflow: hidden;
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: row;
  padding: 15px;
  border-bottom: 2px dashed #888;
`;

export const ImageContainer = styled.div`
  flex: 0 0 120px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
  border: 2px solid #333;
  box-shadow: 3px 3px 0 #888;
  background: #ccc;
`;

export const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-left: 15px;
  color: #111;
`;

export const ModalContent = styled.div`
  font-family: "Courier New", monospace;
  font-size: 1.05rem;

  p { margin: 0 0 6px 0; font-weight: bold; }
  strong { color: #555; margin-right: 4px; }
`;

export const ModalFooter = styled.div<{ isVisible: boolean }>`
  background: #e6dfca;
  color: #111;
  font-family: "Courier New", monospace;
  font-size: 1.05rem;
  padding: 15px;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 0.3s ease-out;

  p { margin: 0 0 4px 0; font-weight: bold; }
  strong { color: #555; margin-right: 4px; }
`;
