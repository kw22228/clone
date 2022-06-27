import { useEffect, useRef, useState } from 'react';
import * as s from './Slider.style';
import { AnimatePresence } from 'framer-motion';
import debounce from '../../lib/utils/debounce';
import { rowVariants } from '../../lib/animation/variants/slider';
import useGetQuery from '../../lib/hooks/useGetQuery';
import { movieNowPlayingKey, sliderOffset } from '../../lib/utils/constants';
import { IMovieList } from '../../lib/types/movieType';
import getImagePath from '../../lib/utils/getImagePath';

const Slider = ({
    sliderPage,
    toggleLeaving,
}: {
    sliderPage: number;
    toggleLeaving: () => void;
}) => {
    const data = useGetQuery(movieNowPlayingKey) as IMovieList;

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
                        .map(({ id, title, backdrop_path }, index) => (
                            <s.Box //
                                bgphoto={getImagePath(backdrop_path, 'w200')}
                                key={id}
                            >
                                {title}
                            </s.Box>
                        ))}
                </s.Row>
            </AnimatePresence>
        </s.Slider>
    );
};

export default Slider;
