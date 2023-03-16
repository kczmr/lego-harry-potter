export interface StyledMinifigTileProps {
  isActive: boolean;
}

export interface MinifigTileProps extends StyledMinifigTileProps {
  title: string;
  imageUrl?: string;
  onPress: VoidFunction;
  onDetailsPress: VoidFunction;
}
