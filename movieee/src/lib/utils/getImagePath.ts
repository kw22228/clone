import { MOVIE_IMG_URL } from './constants';

const getImagePath = (id: string, format: string = 'original') => {
    return `${MOVIE_IMG_URL}${format}/${id}`;
};

export default getImagePath;
