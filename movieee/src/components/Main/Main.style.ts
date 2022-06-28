import styled from 'styled-components';
import { widthPadding } from '../../styles/variable';

export const Wrapper = styled.div`
    background-color: black;
    height: 800px;
    padding: 0 ${widthPadding};
`;

export const Banner = styled.div<{ bgPhoto: string }>`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;

    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
        url(${props => props.bgPhoto});
    background-size: cover;
`;

export const Title = styled.h2`
    font-size: 2.2rem;
    width: 40%;
    margin-bottom: 20px;
`;

export const OverView = styled.p`
    font-size: 1rem;
    width: 40%;
`;

export const SliderWrapper = styled.div`
    position: relative;
    top: -155px;
`;

export const SliderTitle = styled.span`
    font-weight: 600;
    color: ${props => props.theme.white.darker};
`;
