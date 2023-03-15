import styled from 'styled-components/native';

export const StyledButton = styled.Pressable.attrs({
  activeOpacity: 0.9,
})`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border-radius: ${({ theme }) => theme.sizes.radius}px;
  padding: ${({ theme }) => `${theme.space.s + 2}px ${theme.space.s + 4}px`};
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.lightGrey : theme.colors.blue};
`;

export const StyledButtonLabel = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
  font-size: 16px;
`;
