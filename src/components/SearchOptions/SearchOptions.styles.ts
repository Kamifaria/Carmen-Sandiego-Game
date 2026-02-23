import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #000;
  padding: 20px;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 70px;
`;

export const SearchImage = styled.img<{ index: number }>`
  width: 150px;
  height: 100px;
  object-fit: cover;
  margin: 10px;
  cursor: pointer;

  ${({ index }) =>
    index % 3 === 1 &&
    `
    transform: translateY(-70px);
    z-index: 1;
  `}

  ${({ index }) =>
    index % 3 === 0 &&
    `
    transform: translateY(40px);
  `}

  ${({ index }) =>
    index % 3 === 2 &&
    `
    transform: translateY(30px);
  `}
`;

export const NameList = styled.ul`
  list-style-type: none;
  margin-top: auto;
  padding: 0;
  text-align: center;
  color: white;
  font-size: 2.5rem;
  font-family: "Pixelify Sans";
  width: 500px;
`;

export const NameItem = styled.li<{ isFocused: boolean }>`
  cursor: pointer;
  color: ${({ isFocused }) => (isFocused ? "black" : "white")};
  background-color: ${({ isFocused }) =>
    isFocused ? "white" : "transparent"};
  text-align: center;
`;
