import styled, { css } from 'styled-components/native';
import { StyledInputProps } from './types';

export const StyledInput = styled.TextInput<StyledInputProps>`
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.space.s - 4}px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.black};
  border-radius: ${({ theme }) => theme.sizes.radius}px;
  ${({ isError, theme }) =>
    isError &&
    css`
      border-width: 3px;
      border-color: ${theme.colors.red};
    `};
`;

export const StyledInputLabel = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.space.xs}px;
  padding-left: ${({ theme }) => theme.space.s}px;
  font-size: 16px;
  font-weight: bold;
`;

export const StyledInputError = styled.Text`
  color: ${({ theme }) => theme.colors.red};
  margin-top: ${({ theme }) => theme.space.xs}px;
  padding-left: ${({ theme }) => theme.space.s}px;
  font-size: 16px;
  font-weight: bold;
`;
