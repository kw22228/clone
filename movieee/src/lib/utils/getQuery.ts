import { API_KEY, BASE_URL } from '../utils/constants';

const getQuery = (path: string, queries: string[] = []): string => {
    const url = `${BASE_URL}${path}?api_key=${API_KEY}`;

    return queries.reduce((acc, cur) => `${acc}&${cur}`, url);
};

export default getQuery;
