import { UseQueryResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export interface Minifig {
  set_num: string;
  name: string;
  num_parts: number;
  set_img_url: string;
  set_url: string;
  last_modified_at: string;
}

export interface MinifigsQueryResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Minifig[];
}

export type UseMinifigsQueryReturnType = UseQueryResult<
  MinifigsQueryResponse,
  AxiosError
>;
