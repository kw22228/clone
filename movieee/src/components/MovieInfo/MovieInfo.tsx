import { useNavigate, useParams } from 'react-router-dom';
import { useViewportScroll } from 'framer-motion';
import * as s from './MovieInfo.style';
import { movieDetailArrKey, movieDetailKey, movieDetailPath } from '../../lib/utils/constants';
import MovieAPI from '../../lib/api/movie';
import { useFetch } from '../../lib/hooks/useFetch';
import getImagePath from '../../lib/utils/getImagePath';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faGratipay } from '@fortawesome/free-brands-svg-icons';
import { MovieDetail } from '../../lib/types/movieDetail';

interface IMovieDetail {
    isLoading: boolean;
    data: MovieDetail;
}
const MovieInfo = () => {
    const navigate = useNavigate();
    const { movieId } = useParams<{ movieId: string }>();
    const { scrollY } = useViewportScroll();

    //data fetch
    const { isLoading, data } = useFetch<MovieDetail>(
        movieDetailArrKey(movieId),
        movieDetailPath(movieId),
        MovieAPI.detail
    ) as IMovieDetail;

    const clickWrapper = () => {
        navigate('/');
    };

    return (
        <>
            <s.Overlay onClick={clickWrapper} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />
            <s.InfoBox layoutId={String(movieId)} scrolly={scrollY.get()}>
                {isLoading ? (
                    <div>Loading...</div>
                ) : (
                    <>
                        <s.Image imgPath={getImagePath(data?.backdrop_path, 'w400')} />

                        <s.Container>
                            <s.Title>{data?.title}</s.Title>
                            <s.FontWrap>
                                <s.PlayButton>
                                    <FontAwesomeIcon icon={faPlay} />
                                    Play
                                </s.PlayButton>
                                <FontAwesomeIcon icon={faGratipay} />
                            </s.FontWrap>
                            <s.Description>{data?.overview}</s.Description>
                        </s.Container>
                    </>
                )}
            </s.InfoBox>
        </>
    );
};

export default MovieInfo;
