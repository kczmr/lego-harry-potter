import { MinifigTileProps } from 'components/MinifigTile/types';
import { UseMinifigsQueryReturnType } from 'api/queries/useMinifigsQuery/types';

export interface MinifigsItem
  extends Pick<MinifigTileProps, 'title' | 'imageUrl'> {
  key: string;
}

export interface UseChooseMinifigScreenReturnType {
  items: MinifigsItem[];
  minifigsQuery: Omit<UseMinifigsQueryReturnType, 'data'>;
}
