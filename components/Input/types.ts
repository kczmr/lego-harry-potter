import { TextInputProps } from 'react-native';

export interface StyledInputProps {
  isError?: boolean;
}

export interface InputProps extends TextInputProps {
  label: string;
  error?: string;
}
