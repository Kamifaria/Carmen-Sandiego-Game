import styled from "styled-components";

export const StyledCluesComputer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-family: "Pixelify Sans", sans-serif;
  background-color: black;
  border: 2px solid grey;
`;

export const CluesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 90%;
  max-width: 800px;
  max-height: 80vh;
  margin: 0 auto;
  padding: 20px 5px;
  color: #fff;
  background-color: black;
  border: 20px solid #bb9469;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

export const ScreenHeader = styled.div`
  width: 100%;
  text-align: center;
  padding: 10px 0px;
  font-size: 3rem;
  background-color: #222;
  border-bottom: 2px solid #555;
`;

export const ClueButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  padding: 10px 20px;
  font-family: "Pixelify Sans", sans-serif;
  font-size: 1.5rem;
  color: #fff;
  cursor: pointer;
  background-color: black;
  border: 2px solid #555;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #555;
  }

  .clue-type {
    margin-right: auto;
  }

  .clue-option {
    color: yellow;
    text-align: center;
  }
`;

export const FilterButton = styled.button`
  width: 100%;
  align-self: flex-start;
  padding: 20px 20px;
  margin-top: 60px;
  font-family: "Pixelify Sans", sans-serif;
  font-size: 2rem;
  color: #fff;
  cursor: pointer;
  background-color: #008000;
  border: 2px solid #006400;
  border-radius: 5px;
  transition: background-color 0.3s;
`;
