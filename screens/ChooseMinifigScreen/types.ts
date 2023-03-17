import { NavigationStackParamList } from 'setup/Navigation/types';
import { MinifigTileProps } from 'components/MinifigTile/types';
import {
  UseMinifigsQueryReturnType,
  Minifig,
} from 'api/queries/useMinifigsQuery/types';

export interface MinifigsItem
  extends Pick<MinifigTileProps, 'title' | 'imageUrl'>,
    Pick<Minifig, 'set_url'> {
  key: string;
}

export interface UseChooseMinifigScreenReturnType {
  items: MinifigsItem[];
  minifigsQuery: Omit<UseMinifigsQueryReturnType, 'data'>;
}

export type ChooseMinifigScreenProps = ScreenProps<
  NavigationStackParamList,
  'ChooseMinifigScreen'
>;
