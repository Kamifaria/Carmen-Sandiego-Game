import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding: 20px;
  /* Glowing background effect fitting the dark FBI Terminal motif */
  background: radial-gradient(circle at center, rgba(0, 255, 204, 0.05) 0%, rgba(0, 0, 0, 0.8) 100%);
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 40px;
`;

export const SearchImage = styled.img<{ index: number }>`
  width: 140px;
  height: 110px;
  object-fit: cover;
  margin: 15px;
  cursor: pointer;
  border: 1px solid rgba(0, 255, 204, 0.3);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.8);
  border-radius: 8px;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  
  /* Apply dark neon filters to make varied images fit perfectly */
  filter: sepia(1) hue-rotate(140deg) saturate(1.5) brightness(0.7);

  &:hover {
    transform: scale(1.1) translateY(-10px);
    filter: sepia(0) hue-rotate(0) saturate(1) brightness(1.2);
    border: 1px solid #00ffcc;
    box-shadow: 0 10px 25px rgba(0, 255, 204, 0.4);
    z-index: 10;
  }

  ${({ index }) =>
    index % 3 === 1 &&
    `
    transform: translateY(-40px);
    z-index: 1;
  `}

  ${({ index }) =>
    index % 3 === 0 &&
    `
    transform: translateY(20px);
  `}

  ${({ index }) =>
    index % 3 === 2 &&
    `
    transform: translateY(10px);
  `}
`;

export const NameList = styled.ul`
  list-style-type: none;
  margin-top: 30px;
  padding: 0;
  text-align: center;
  width: 500px;
  max-width: 90%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const NameItem = styled.li<{ isFocused: boolean }>`
  cursor: pointer;
  font-family: "Courier New", monospace;
  font-size: 1.8rem;
  font-weight: bold;
  letter-spacing: 4px;
  text-transform: uppercase;
  padding: 15px;
  border-radius: 6px;
  
  color: ${({ isFocused }) => (isFocused ? "#ffffff" : "rgba(0, 255, 204, 0.7)")};
  background: ${({ isFocused }) =>
    isFocused ? "rgba(0, 255, 204, 0.2)" : "rgba(0, 0, 0, 0.6)"};
  border: 1px solid ${({ isFocused }) => (isFocused ? "#00ffcc" : "rgba(0, 255, 204, 0.2)")};
  box-shadow: ${({ isFocused }) =>
    isFocused ? "0 0 20px rgba(0, 255, 204, 0.4), inset 0 0 10px rgba(0, 255, 204, 0.1)" : "none"};
  transform: ${({ isFocused }) => (isFocused ? "scale(1.05)" : "scale(1)")};
  
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  /* Scanline gloss effect inside the focused bar */
  &::after {
    content: "";
    position: absolute;
    top: 0; left: -100%; right: 0; bottom: 0;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
    transition: all 0.5s ease;
  }

  ${({ isFocused }) => isFocused && `
    &::after {
      left: 100%;
    }
  `}

  &:hover {
    color: #ffffff;
    background: rgba(0, 255, 204, 0.15);
    border: 1px solid rgba(0, 255, 204, 0.6);
  }
`;
