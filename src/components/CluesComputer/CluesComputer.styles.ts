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
  padding: 15px 20px;
  margin-top: 20px;
  font-family: "Pixelify Sans", sans-serif;
  font-size: 1.5rem;
  color: #fff;
  cursor: pointer;
  background-color: #008000;
  border: 2px solid #006400;
  border-radius: 5px;
  transition: background-color 0.3s;
`;

export const SuspectsGallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  overflow-y: auto;
  gap: 15px;
  margin-top: 20px;
  padding: 15px;
  width: 100%;
  max-height: 250px;
  background-color: #222;
  border: 2px dashed #fcd116;
  border-radius: 5px;
  box-sizing: border-box;
`;

export const SuspectCard = styled.div<{ $isWarrant: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 110px;
  background-color: #f4e8c1;
  border: 1px solid #000;
  padding: 5px;
  box-shadow: 2px 2px 5px rgba(0,0,0,0.5);
  font-family: "Courier New", Courier, monospace;
  
  .photo {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border: 2px solid black;
    filter: sepia(0.6) contrast(1.2) grayscale(0.5); 
  }

  .name {
    color: black;
    font-size: 0.9rem;
    font-weight: bold;
    margin-top: 5px;
    text-align: center;
    text-transform: uppercase;
  }

  .stamp {
    position: absolute;
    color: red;
    border: 3px solid red;
    transform: rotate(-15deg);
    font-size: 1.2rem;
    font-weight: bold;
    top: 30px;
    background: rgba(255,255,255,0.8);
    padding: 2px;
    z-index: 2;
    display: ${props => props.$isWarrant ? 'block' : 'none'};
  }
`;
