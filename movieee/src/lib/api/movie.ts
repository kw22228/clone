import axios from 'axios';
import getQuery from '../utils/getQuery';
import delay from '../utils/promiseDelay';

interface IAxios<T> {
    data: T;
}

const MovieAPI = {
    all: async <T>(path: string, quries: string[] = []): Promise<T> => {
        const url = getQuery(path, quries);
        await delay(1200);

        const { data }: IAxios<T> = await axios.get(url);

        return data;
    },
    detail: async <T>(path: string, quries: string[] = []): Promise<T> => {
        const url = getQuery(path, quries);
        const { data }: IAxios<T> = await axios.get(url);

        return data;
    },
};

export default MovieAPI;
