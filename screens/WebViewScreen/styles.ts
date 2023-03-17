import styled from 'styled-components/native';

export const StyledWebViewModalHeader = styled.View`
  height: ${({ theme }) => theme.sizes.webViewHeader}px;
  background-color: ${({ theme }) => theme.colors.purple};
  justify-content: center;
  padding-left: ${({ theme }) => theme.space.s}px;
`;

export const StyledWebViewModalText = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
`;
