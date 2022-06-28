import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Slider = styled.div`
    position: relative;
`;

export const Row = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 10px;
    position: absolute;
    width: 100%;
`;

export const Box = styled(motion.div)<{ bgphoto: string }>`
    height: 150px;
    background-image: url(${props => props.bgphoto});
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;

    &:first-child {
        transform-origin: left;
    }
    &:last-child {
        transform-origin: right;
    }
`;

export const Info = styled(motion.div)`
    padding: 10px;
    background-color: ${props => props.theme.black.lighter};
    opacity: 0;
    width: 100%;

    position: absolute;
    bottom: 0;

    h4 {
        text-align: center;
        font-weight: bold;
        font-size: 15px;
    }
`;
