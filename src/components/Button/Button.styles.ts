import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const ButtonStyled = styled.button<{ isSelected: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => (props.isSelected ? "#dedede" : "none")};
  border: ${(props) => (props.isSelected ? "5px solid red" : "2px solid black")};
  cursor: pointer;
  padding: 10px;
  border-radius: 5px;
  color: black;
  width: 100px;
  box-shadow: 5px 5px 5px black;
  height: 100px;
  margin: 0 15px;
  font-family: "Pixelify Sans", sans-serif;
  font-size: 1rem;
  text-align: center;
`;

export const ButtonIcon = styled.img`
  width: 70px;
  height: 50px;
  margin-bottom: 5px;
`;

export const ButtonText = styled.span`
  font-family: "Pixelify Sans", sans-serif;
  text-align: start;
`;
