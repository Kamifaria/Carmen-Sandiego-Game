import styled from "styled-components";

export const StyledGameScreen = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  overflow: hidden;
  border: 2px solid grey;
`;

export const ScreenWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  width: 60%;
  height: calc(100% - 40px);
  max-height: 70vh;
  background-color: black;
  border: 6px solid grey;
  overflow: hidden;
`;

export const LeftColumn = styled.div`
  position: relative;
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #20646c;
  border-right: 2px solid grey;
`;

export const LeftColumnImage = styled.img<{ isVisible: boolean }>`
  position: relative;
  width: 100%;
  height: 100%;
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
`;

export const RightColumn = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  height: 100%;
  background-color: black;
  border-left: 2px solid grey;
  color: white;
`;

export const RightColumnDescription = styled.p<{ isVisible: boolean }>`
  font-family: "Pixelify Sans";
  font-size: 2.5rem;
  text-align: start;
  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
  position: relative;
  z-index: 1;
`;

export const BottomSection = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-top: 2px solid grey;
  color: black;
  font-family: "Pixelify Sans", sans-serif;
  font-size: 2rem;
  margin-top: auto;
`;

export const CluesComputerWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 80%;
  z-index: 3;
`;

export const OptionsContainer = styled.div<{ isVisible: boolean }>`
  position: absolute;
  width: 100%;
  height: 80%;
  display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: black;
  border-top: 2px solid grey;
  z-index: 2;
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

/* ✅ Área de digitação com texto em cima e máquina fixada embaixo */
export const TypingArea = styled.div`
  flex: 1;
  width: 100%;
  background-color: #f8f8f8;
  font-family: "Pixelify Sans", sans-serif;
  font-size: 1.95rem;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 20px 10px 20px;
  border-right: 2px dotted grey;
  border-left: 2px dotted grey;
  border-top: 2px solid black;
  overflow: hidden;
  background-image: linear-gradient(
    to bottom,
    #f8f8f8 50%,
    rgba(0, 0, 0, 0.1) 50%
  );
`;

export const MessageContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow-y: auto;
  padding: 20px 0;
  scroll-behavior: smooth;
`;

export const TypingAreaItem = styled.div`
  margin-bottom: 10px;
`;

/* ✅ Máquina sempre fixa no fundo */
export const TypewriterContainer = styled.div<{ isTyping: boolean }>`
  width: 100%;
  height: 200px;
  background: ${({ isTyping }) =>
    isTyping
      ? `url('https://64.media.tumblr.com/d4eff9e875bc23d6bad290e97d5259f0/tumblr_p3om3qq1c71ww81r3o1_540.gif') no-repeat center bottom`
      : `url('/oldTypewriterSprite.svg') no-repeat center bottom`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center bottom;
`;

export const ButtonContainerWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
