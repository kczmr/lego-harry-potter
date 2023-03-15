import React from 'react';
import { ButtonProps } from './types';
import { StyledButton, StyledButtonLabel } from './styles';

const Button: React.FC<ButtonProps> = ({ label, isDisabled, ...rest }) => (
  <StyledButton accessibilityRole='button' disabled={isDisabled} {...rest}>
    <StyledButtonLabel>{label}</StyledButtonLabel>
  </StyledButton>
);

export default Button;
