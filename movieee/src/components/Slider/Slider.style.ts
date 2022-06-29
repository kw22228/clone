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
    /* cursor: pointer; */

    &:first-child {
        transform-origin: left;
    }
    &:last-child {
        transform-origin: right;
    }
`;

export const Info = styled(motion.div)`
    padding: 10px;
    background-color: ${props => props.theme.black.veryDark};
    opacity: 0;
    width: 100%;
    position: absolute;
    bottom: -52px;

    h4 {
        font-weight: bold;
        font-size: 12px;
    }
`;

export const FontWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;

    span svg {
        cursor: pointer;
        margin-right: 5px;
        font-size: 23px;
        color: white;

        &:hover {
            color: ${props => props.theme.white.darker};
        }
    }
`;

export const RateWrap = styled.div`
    margin-top: 10px;
    font-size: 8px;

    span {
        margin-right: 10px;
    }

    span:first-child svg {
        font-size: 8px;
        color: gold;
        margin-right: 2px;
    }

    span:last-child svg {
        font-size: 8px;
        color: white;
        margin-right: 2px;
    }
`;
