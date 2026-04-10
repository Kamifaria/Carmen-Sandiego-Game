// Button.tsx
import React from "react";
import {
  ButtonContainer,
  ButtonStyled,
  ButtonIcon,
  ButtonText
} from "./Button.styles";

interface ButtonProps {
  onClick: () => void;
  iconSrc: string;
  altText: string;
  buttonText: string;
  isSelected: boolean;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  iconSrc,
  altText,
  buttonText,
  isSelected
}) => (
  <ButtonContainer>
    <ButtonStyled
      onClick={e => { e.stopPropagation(); onClick(); }}
      isSelected={isSelected}
    >
      <ButtonIcon src={iconSrc} alt={altText} isSelected={isSelected} />
      <ButtonText>{buttonText}</ButtonText>
    </ButtonStyled>
  </ButtonContainer>
);

export default Button;
