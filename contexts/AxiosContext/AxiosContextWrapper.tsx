import React, { PropsWithChildren, useMemo } from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import Axios from 'axios';
import { AxiosContextProvider } from './index';
import { API_KEY } from './consts';

const AxiosContextWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: 2 }, mutations: { retry: 2 } },
  });

  const basicConfiguration = useMemo(() => {
    const headers = {
      'Content-Type': 'application/json',
      accept: 'application/json',

      // key should be stored in envs
      Authorization: `key ${API_KEY}`,
    };

    return {
      // url should be stored in envs
      baseURL: 'https://rebrickable.com/api/v3/lego/',
      headers,
    };
  }, []);

  const api = Axios.create(basicConfiguration);

  return (
    <AxiosContextProvider value={{ api }}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </AxiosContextProvider>
  );
};

export default AxiosContextWrapper;
