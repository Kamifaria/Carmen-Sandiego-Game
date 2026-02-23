// Header.styles.ts
import styled from "styled-components";

export const TypistWrapper = styled.div`
  font-size: 1.5rem;
`;

export const Header = styled.div`
  width: 60.2%;
  background-color: white;
  color: black;
  font-family: "Pixelify Sans", sans-serif;
  font-size: 3rem;
  display: flex;
  justify-content: flex-start;
  position: fixed;
  top: 80px;
  z-index: 9;
  border-bottom: 4px solid black;
  border-top: 4px solid grey;
  border-left: 4px solid grey;
  border-right: 4px solid grey;
`;

export const HeaderItem = styled.div<{ isSelected?: boolean }>`
  margin-right: 20px;
  cursor: pointer;
  position: relative;
  font-size: 2.5rem;
  background-color: ${({ isSelected }) =>
    isSelected ? "black" : "transparent"};
  color: ${({ isSelected }) => (isSelected ? "white" : "black")};
  padding: 10px;
  border-radius: 4px;
`;

export const Dropdown = styled.div<{ show: boolean; top: number; left: number }>`
  position: absolute;
  background-color: white;
  border: 2px solid black;
  border-radius: 4px;
  width: auto;
  max-height: auto;
  display: ${({ show }) => (show ? "block" : "none")};
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
`;

export const DropdownItem = styled.div`
  font-size: 2rem;
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: black;
    color: white;
  }
`;

export const ModalBackground = styled.div`
  font-family: "Pixelify Sans", sans-serif;
  position: fixed;
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  width: 60%;
  max-width: 800px;
  height: 350px;
  overflow: hidden;
  border: solid black;
  box-shadow: 3px 3px 0px white, 5px 5px 0px black, 7px 7px 0px white,
    9px 9px 0px black;
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
`;

export const ImageContainer = styled.div`
  flex: 0 0 200px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 20px 10px 0px 10px;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 200px;
  max-height: 100%;
  box-shadow: 8px 5px;
`;

export const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
  padding: 15px 0 2px 10px;
  overflow-y: auto;
`;

export const ModalContent = styled.div`
  font-size: 1.5rem;

  p {
    margin: 0;
    padding: 0;
    line-height: 1.5;
  }

  strong {
    display: inline;
  }
`;

export const ModalFooter = styled.div<{ isVisible: boolean }>`
  background: white;
  text-align: left;
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 15px;
  margin-top: auto;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 0.5s ease-out;
  overflow: hidden;

  p {
    margin: 0;
    padding: 0;
    line-height: 1.5;
  }

  p + p {
    margin-top: 20px;
  }

  strong {
    display: inline;
  }
`;
