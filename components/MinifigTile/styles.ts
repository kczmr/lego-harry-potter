import styled, { css } from 'styled-components/native';
import { StyledMinifigTileProps } from './types';

export const StyledMinifigTile = styled.Pressable<StyledMinifigTileProps>`
  align-items: center;
  justify-content: space-between;
  height: ${({ theme }) => theme.sizes.miniFig.height}px;
  width: ${({ theme }) => theme.sizes.miniFig.width}px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.sizes.radius}px;
  padding: ${({ theme }) => theme.space.s + 4}px;
  ${({ isActive, theme }) =>
    isActive &&
    css`
      border-color: ${theme.colors.orange};
      border-width: ${theme.sizes.miniFig.radiusWidth}px;
    `};
`;

export const StyledMinifigImage = styled.Image`
  height: ${({ theme }) => theme.sizes.miniFig.image.height}px;
  width: ${({ theme }) => theme.sizes.miniFig.image.width}px;
  margin-bottom: ${({ theme }) => theme.space.m}px;
`;

export const StyledMinifigTitle = styled.Text`
  color: ${({ theme }) => theme.colors.grey};
  font-weight: bold;
  margin-bottom: ${({ theme }) => theme.space.s}px;
`;

export const StyledMinifigDetailsText = styled.Text`
  color: ${({ theme }) => theme.colors.orange};
  font-weight: 500;
  margin-bottom: ${({ theme }) => theme.space.s}px;
`;
