import styled from 'styled-components/native';

export const StyledOrderMinifigScreenTitle = styled.Text`
  font-weight: bold;
  font-size: 24px;
  color: white;
  align-self: center;
  padding-top: ${({ theme }) => theme.space.l * 2}px;
  margin-bottom: ${({ theme }) => theme.space.l}px;
`;
