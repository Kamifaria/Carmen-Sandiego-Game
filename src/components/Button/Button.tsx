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
    <ButtonStyled onClick={onClick} isSelected={isSelected}>
      <ButtonIcon src={iconSrc} alt={altText} />
      <ButtonText>{buttonText}</ButtonText>
    </ButtonStyled>
  </ButtonContainer>
);

export default Button;
