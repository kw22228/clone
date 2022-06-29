import { useEffect, useRef, useState } from 'react';
import * as s from './Slider.style';
import { AnimatePresence } from 'framer-motion';
import debounce from '../../lib/utils/debounce';
import { boxVariants, infoVariants, rowVariants } from '../../lib/animation/variants/slider';
import useGetQuery from '../../lib/hooks/useGetQuery';
import { movieNowPlayingKey, sliderOffset } from '../../lib/utils/constants';
import { IMovieList } from '../../lib/types/movieType';
import getImagePath from '../../lib/utils/getImagePath';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPlayCircle } from '@fortawesome/free-regular-svg-icons';
import { faGratipay } from '@fortawesome/free-brands-svg-icons';
import { faChevronCircleDown, faStar } from '@fortawesome/free-solid-svg-icons';

const Slider = ({
    sliderPage,
    toggleLeaving,
}: {
    sliderPage: number;
    toggleLeaving: () => void;
}) => {
    const navigate = useNavigate();
    const data = useGetQuery(movieNowPlayingKey) as IMovieList;

    //box click
    const onBoxClicked = (movieId: number) => {
        navigate(`/movies/${movieId}`);
    };

    //Resize
    const [domWidth, setDomWidth] = useState(window.innerWidth);
    const windowRef = useRef(window);
    const handleResize = (e: Event) => setDomWidth(window.innerWidth);
    const debounceResize = debounce(handleResize, 500);
    useEffect(() => {
        windowRef.current.addEventListener('resize', debounceResize);
        return () => windowRef.current.addEventListener('resize', debounceResize);
    }, []);

    return (
        <s.Slider>
            <AnimatePresence //
                initial={false}
                onExitComplete={toggleLeaving}
            >
                <s.Row
                    custom={domWidth}
                    key={sliderPage}
                    variants={rowVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{
                        duration: 1,
                        type: 'tween',
                    }}
                >
                    {data?.results
                        .slice(1) //제일 처음쓴 영화는 제외.
                        .slice(sliderPage * sliderOffset, sliderPage * sliderOffset + sliderOffset)
                        .map(({ id, backdrop_path, title, vote_average, popularity }) => (
                            <s.Box //
                                bgphoto={getImagePath(backdrop_path, 'w300')}
                                variants={boxVariants}
                                whileHover="hover"
                                initial="normal"
                                transition={{
                                    type: 'tween',
                                }}
                                key={id}
                                layoutId={String(id)}
                            >
                                <s.Info variants={infoVariants}>
                                    <h4>{title}</h4>
                                    <s.FontWrap>
                                        <span>
                                            <FontAwesomeIcon icon={faPlayCircle} />
                                            <FontAwesomeIcon icon={faGratipay} />
                                        </span>
                                        <span>
                                            <FontAwesomeIcon
                                                icon={faChevronCircleDown}
                                                onClick={onBoxClicked.bind(null, id)}
                                            />
                                        </span>
                                    </s.FontWrap>
                                    <s.RateWrap>
                                        <span>
                                            <FontAwesomeIcon icon={faStar} />
                                            {vote_average}
                                        </span>
                                        <span>
                                            <FontAwesomeIcon icon={faEye} />
                                            {Math.ceil(popularity)}
                                        </span>
                                    </s.RateWrap>
                                </s.Info>
                            </s.Box>
                        ))}
                </s.Row>
            </AnimatePresence>
        </s.Slider>
    );
};

export default Slider;
