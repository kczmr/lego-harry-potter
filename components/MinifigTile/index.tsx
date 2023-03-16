import React from 'react';
import { Pressable } from 'react-native';
import { MinifigTileProps } from './types';
import {
  StyledMinifigTile,
  StyledMinifigImage,
  StyledMinifigTitle,
  StyledMinifigDetailsText,
} from './styles';

const MinifigTile: React.FC<MinifigTileProps> = ({
  isActive,
  imageUrl,
  onPress,
  onDetailsPress,
  title,
}) => (
  <StyledMinifigTile testID='minifig' {...{ isActive, onPress }}>
    {/* add image loading */}
    <StyledMinifigImage testID='minifigImage' source={{ uri: imageUrl }} />
    <StyledMinifigTitle>{title}</StyledMinifigTitle>
    <Pressable onPress={onDetailsPress}>
      <StyledMinifigDetailsText>Show details</StyledMinifigDetailsText>
    </Pressable>
  </StyledMinifigTile>
);

export default MinifigTile;
