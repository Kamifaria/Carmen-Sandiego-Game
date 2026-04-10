import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const ButtonStyled = styled.button<{ isSelected: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${(props) =>
    props.isSelected
      ? "radial-gradient(circle, rgba(0, 255, 204, 0.25) 0%, rgba(0, 60, 40, 0.8) 100%)"
      : "linear-gradient(180deg, rgba(10, 25, 30, 0.85) 0%, rgba(0, 10, 15, 0.95) 100%)"};
  border: ${(props) =>
    props.isSelected ? "2px solid #00ffcc" : "1px solid #1a4a55"};
  box-shadow: ${(props) =>
    props.isSelected
      ? "0 0 20px rgba(0, 255, 204, 0.4), inset 0 0 15px rgba(0, 255, 204, 0.2)"
      : "0 5px 15px rgba(0, 0, 0, 0.6)"};
  color: ${(props) => (props.isSelected ? "#ffffff" : "#00ffcc")};
  cursor: pointer;
  padding: 10px;
  border-radius: 8px;
  width: 120px;
  height: 100px;
  font-family: "Courier New", monospace;
  font-size: 1.1rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(8px);
  outline: none;

  &:hover {
    background: ${(props) =>
      props.isSelected
        ? "radial-gradient(circle, rgba(0, 255, 204, 0.35) 0%, rgba(0, 60, 40, 0.9) 100%)"
        : "linear-gradient(180deg, rgba(15, 35, 45, 0.9) 0%, rgba(5, 15, 20, 1) 100%)"};
    border: 1px solid #00ffcc;
    box-shadow: 0 0 15px rgba(0, 255, 204, 0.3);
    transform: translateY(-2px);
  }
`;

export const ButtonIcon = styled.img<{ isSelected: boolean }>`
  width: 45px;
  height: 45px;
  margin-bottom: 8px;
  object-fit: contain;
  /* Make all icons fit the dark neon theme regardless of orig image */
  filter: ${(props) =>
    props.isSelected
      ? "invert(1) drop-shadow(0 0 5px rgba(255,255,255,0.8))"
      : "invert(0.8) sepia(1) hue-rotate(130deg) saturate(3) drop-shadow(0 0 2px rgba(0,255,204,0.4))"};
  transition: all 0.3s ease;
`;

export const ButtonText = styled.span`
  line-height: 1;
`;
