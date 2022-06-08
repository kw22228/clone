import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.h1`
    color: ${props => props.theme.accentColor};
    font-size: 48px;
`;

export const HomeLink = styled(Link)`
    position: absolute;
    background-color: ${props => props.theme.textColor};
    color: ${props => props.theme.bgColor};
    padding: 8px 15px;
    font-weight: bold;
    border-radius: 20px;
    right: 20px;
    top: 25px;
    transition: all 0.3s ease-in-out;

    &:hover {
        background-color: ${props => props.theme.accentColor};
        color: ${props => props.theme.textColor};
    }
`;
