import * as s from './Main.style';
import MovieAPI from '../../lib/api/movie';
import { useFetch } from '../../lib/hooks/useFetch';
import getImagePath from '../../lib/utils/getImagePath';
import { IMovieList } from '../../lib/types/movieType';
import Loader from '../Loader/Loader';

const Main = () => {
    const { isLoading, data } = useFetch<IMovieList>(
        ['movies', 'nowPlaying'],
        'movie/now_playing',
        MovieAPI.all
    );

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <s.Wrapper>
                    <s.Banner bgPhoto={getImagePath(data?.results[0].backdrop_path || '')}>
                        <s.Title>{data?.results[0].title}</s.Title>
                        <s.OverView>{data?.results[0].overview}</s.OverView>
                    </s.Banner>
                </s.Wrapper>
            )}
        </>
    );
};

export default Main;
