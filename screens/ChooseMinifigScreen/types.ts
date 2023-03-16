import { MinifigTileProps } from 'components/MinifigTile/types';

export interface MinifigsItem
  extends Pick<MinifigTileProps, 'title' | 'imageUrl'> {
  key: string;
}

export interface UseChooseMinifigScreenReturnType {
  items: MinifigsItem[];
}
