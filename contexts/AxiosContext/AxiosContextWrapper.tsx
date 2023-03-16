import React, { PropsWithChildren, useMemo } from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import Axios from 'axios';
import { AxiosContextProvider } from './index';

const AxiosContextWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: 2 }, mutations: { retry: 2 } },
  });

  const basicConfiguration = useMemo(() => {
    const headers = {
      'Content-Type': 'application/json',
      accept: 'application/json',
      Authorization: 'key 83b380e9c9b58d09869ac1fd473002b3',
    };

    return {
      // url should be stored in envs
      baseURL: 'https://rebrickable.com/api/v3/lego',
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
