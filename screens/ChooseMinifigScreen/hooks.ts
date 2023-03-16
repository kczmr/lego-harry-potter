import { UseChooseMinifigScreenReturnType, MinifigsItem } from './types';

export const useChooseMinifigScreen = (): UseChooseMinifigScreenReturnType => {
  const demoItem = {
    title: 'Harry Potter',
    key: '1',
    imageUrl: 'https://cdn.rebrickable.com/media/sets/fig-000457/60621.jpg',
  };

  const items: MinifigsItem[] = [
    demoItem,
    demoItem,
    demoItem,
    demoItem,
    demoItem,
  ];

  return { items };
};
