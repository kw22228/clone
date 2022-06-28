import { useEffect, useState } from 'react';
import * as s from './Main.style';

import MovieAPI from '../../lib/api/movie';
import { useFetch } from '../../lib/hooks/useFetch';
import getImagePath from '../../lib/utils/getImagePath';
import { IMovieList } from '../../lib/types/movieType';
import { movieNowPlayingKey, movieNowPlayingPath } from '../../lib/utils/constants';

import Loader from '../Loader/Loader';
import Slider from '../Slider/Slider';

import { sliderOffset } from '../../lib/utils/constants';

const Main = () => {
    const { isLoading, data } = useFetch<IMovieList>(
        movieNowPlayingKey,
        movieNowPlayingPath,
        MovieAPI.all
    );
    const maxPage = data //
        ? Math.ceil(data?.results.length / sliderOffset) - 2
        : 0;

    const [sliderPage, setSliderPage] = useState(0);
    const [leaving, setLeaving] = useState(false);
    const increaseIndex = () => {
        if (leaving) return;

        toggleLeaving();
        setSliderPage(prev => (prev === maxPage ? 0 : prev + 1));
    };
    const toggleLeaving = () => setLeaving(prev => !prev);

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <s.Wrapper>
                    <s.Banner
                        bgPhoto={getImagePath(data?.results[0].backdrop_path || '')}
                        onClick={increaseIndex}
                    >
                        <s.Title>{data?.results[0].title}</s.Title>
                        <s.OverView>{data?.results[0].overview}</s.OverView>
                    </s.Banner>

                    <s.SliderWrapper>
                        <s.SliderTitle>Popular on NetFlix</s.SliderTitle>
                        <Slider toggleLeaving={toggleLeaving} sliderPage={sliderPage} />
                    </s.SliderWrapper>
                </s.Wrapper>
            )}
        </>
    );
};

export default Main;
