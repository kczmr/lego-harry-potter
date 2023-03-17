import { useMemo } from 'react';
import useMinifigsQuery from 'api/queries/useMinifigsQuery';
import { UseChooseMinifigScreenReturnType, MinifigsItem } from './types';

export const useChooseMinifigScreen = (): UseChooseMinifigScreenReturnType => {
  const minifigsQuery = useMinifigsQuery();
  const { data } = minifigsQuery;

  const items =
    useMemo(
      () =>
        data?.results
          .sort(() => Math.random() - Math.random())
          .slice(0, 5)
          .map(
            ({ name, set_img_url, set_num }) =>
              ({
                title: name,
                imageUrl: set_img_url,
                key: set_num,
              } as MinifigsItem)
          ),
      [data]
    ) || [];

  return { items, minifigsQuery };
};
