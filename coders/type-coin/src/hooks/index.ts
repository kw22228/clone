import { fetchData, fetchDataSlice } from '../api';
import { useQuery, useQueryClient, UseQueryResult } from 'react-query';

export const useFetch = <T>(
    queryKey: string | [string, string],
    path: string,
    options?: Object
): UseQueryResult<T> => {
    return useQuery(queryKey, () => fetchData(path), options);
};

export const useFetchSlice = <T>(
    queryKey: string | [string, string],
    path: string,
    slice: number,
    options?: Object
): UseQueryResult<T> => useQuery(queryKey, () => fetchDataSlice(path, slice), options);

export const useGetFetchQuery = (queryKey: string | [string, string]) =>
    useQueryClient().getQueryData(queryKey);
