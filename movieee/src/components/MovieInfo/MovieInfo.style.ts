import styled from 'styled-components';
import { motion } from 'framer-motion';

export const InfoBox = styled(motion.div)<{ scrolly: number }>`
    width: 35vw;
    height: 80vh;
    background-color: ${props => props.theme.black.lighter};
    border-radius: 20px;
    overflow: hidden;
    position: absolute;
    top: ${props => props.scrolly + 70}px;
    left: 33%;
    margin: 0 auto;
`;

export const Overlay = styled(motion.div)`
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    opacity: 0;
`;

export const Container = styled.div`
    position: relative;
    top: -70px;

    padding: 0 20px;
`;
export const Image = styled.div<{ imgPath: string }>`
    width: 100%;
    background-size: cover;
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent),
        url(${props => props.imgPath});
    height: 300px;
`;

export const Title = styled.h2`
    color: ${props => props.theme.white.lighter};
    font-size: 28px;
    font-weight: bold;
    padding: 10px;
`;

export const FontWrap = styled.div`
    margin-top: 24px;
    display: flex;

    & > svg {
        font-size: 30px;
        margin-left: 10px;
    }
`;

export const PlayButton = styled.div`
    color: ${props => props.theme.black.veryDark};
    width: 120px;
    height: 30px;
    background-color: white;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;

    svg {
        font-size: 20px;
        margin-right: 10px;
    }
`;

export const Description = styled.div`
    margin-top: 20px;
`;
