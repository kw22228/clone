export const API_KEY = '73eab92d7a8bf144919d62ba312e413a';
export const BASE_URL = 'https://api.themoviedb.org/3/';

export const MOVIE_IMG_URL = 'https://image.tmdb.org/t/p/';

export const sliderOffset = 6;

// react-query keys
export const movieNowPlayingKey = ['movies', 'nowPlaying'];
export const movieDetailKey: string = 'details';
export const movieDetailArrKey = (movieId: string | undefined): any => ['detail', 123];

// react-query api path
export const movieNowPlayingPath = 'movie/now_playing';
export const movieDetailPath = (movieId: string | undefined): string =>
    movieId ? `movie/${movieId}` : '';
