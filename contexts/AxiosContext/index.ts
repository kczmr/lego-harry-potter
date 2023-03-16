import { createContext, useContext } from 'react';
import Axios from 'axios';
import { AxiosContextValues } from './types';

export const AxiosContext = createContext<AxiosContextValues>({
  api: Axios,
});

export const AxiosContextProvider = AxiosContext.Provider;
export const useAxiosContext = (): AxiosContextValues =>
  useContext(AxiosContext);
