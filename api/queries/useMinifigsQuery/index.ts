import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import endpoints from 'api/endpoints';
import { useAxiosContext } from 'contexts/AxiosContext';
import { API_KEY } from 'contexts/AxiosContext/consts';
import { UseMinifigsQueryReturnType, MinifigsQueryResponse } from './types';

const HARRY_POTTER_THEME_ID = 246;

const useMinifigsQuery = (): UseMinifigsQueryReturnType => {
  const { api } = useAxiosContext();
  const params = {
    page: 1,
    page_size: 1000,
    in_theme_id: HARRY_POTTER_THEME_ID,
    // for iOS i had to add this here
    key: API_KEY,
  };

  return useQuery<MinifigsQueryResponse, AxiosError>(
    ['minifigs', params],
    async () => {
      const { data } = await api.get(endpoints.minifigs(params));

      return data;
    }
  );
};

export default useMinifigsQuery;
