import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Slider = styled.div`
    position: relative;
    top: -100px;
`;

export const Row = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 5px;
    position: absolute;
    width: 100%;
`;

export const Box = styled(motion.div)<{ bgphoto: string }>`
    height: 150px;
    font-size: 15px;

    background-image: url(${props => props.bgphoto});
    background-size: cover;
    background-position: center center;
`;
