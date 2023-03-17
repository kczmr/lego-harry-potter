import React from 'react';
import { useTheme } from 'styled-components/native';
import { InputProps } from './types';
import { StyledInput, StyledInputLabel, StyledInputError } from './styles';

const Input: React.FC<InputProps> = ({ label, error, ...rest }) => {
  const { colors } = useTheme();

  return (
    <>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledInput
        isError={!!error}
        placeholderTextColor={colors.lightGrey}
        selectionColor={colors.black}
        {...rest}
      />
      <StyledInputError>{error}</StyledInputError>
    </>
  );
};

export default Input;
