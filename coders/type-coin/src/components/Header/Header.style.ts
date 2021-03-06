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
    font-size: 38px;
    font-weight: bold;
`;

export const CustomLink = styled(Link)`
    position: absolute;
    right: 20px;
    background-color: ${props => props.theme.textColor};
    color: ${props => props.theme.bgColor};
    padding: 8px 15px;
    font-weight: bold;
    border-radius: 20px;
    transition: all 0.3s ease-in-out;

    &:hover {
        background-color: ${props => props.theme.accentColor};
        color: ${props => props.theme.textColor};
    }
`;

export const DarkBtn = styled.button`
    position: absolute;
    left: 20px;
`;
