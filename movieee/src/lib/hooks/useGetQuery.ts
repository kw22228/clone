import { useQueryClient } from 'react-query';

const useGetQuery = (queryKey: string | string[]) => useQueryClient().getQueryData(queryKey);

export default useGetQuery;
