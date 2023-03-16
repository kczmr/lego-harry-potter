import queryString from 'query-string';

type MappedObject<T, K = string> = Record<K, T>;

const stringifyQueryParams = <T>(path: string, params: T): string => {
  const stringifiedParams = queryString.stringify(params);

  return `${path}?${stringifiedParams}`;
};

const endpoints: MappedObject<(params?: string | MappedObject<any>) => string> =
  {
    minifigs: (params) => {
      const { id } = params as MappedObject<string>;

      return stringifyQueryParams(`minifigs/${id}`, params);
    },
  };

export default endpoints;
