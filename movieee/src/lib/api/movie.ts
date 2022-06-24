import axios from 'axios';
import getQuery from '../utils/getQuery';

interface IAxios<T> {
    data: T;
}
const MovieAPI = {
    all: async <T>(path: string, quries: string[] = []): Promise<T> => {
        const url = getQuery(path, quries);
        const { data }: IAxios<T> = await axios.get(url);

        return data;
    },
};

export default MovieAPI;
