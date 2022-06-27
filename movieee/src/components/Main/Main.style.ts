import styled from 'styled-components';
import { widthPadding } from '../../styles/variable';

export const Wrapper = styled.div`
    background-color: black;
`;

export const Banner = styled.div<{ bgPhoto: string }>`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;

    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
        url(${props => props.bgPhoto});
    background-size: cover;
    padding: 0 ${widthPadding};
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
