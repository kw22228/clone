import styled from 'styled-components';
import { motion } from 'framer-motion';
import { widthPadding } from '../../styles/variable';

export const Nav = styled(motion.nav)`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    position: fixed;
    top: 0;
    background-color: black;
    font-size: 14px;
`;

export const Col = styled.div`
    display: flex;
    align-items: center;
    padding: 20px ${widthPadding};
`;

export const Logo = styled(motion.svg)`
    margin-right: 50px;
    width: 95px;
    cursor: pointer;
`;

export const LinkItems = styled.ul`
    display: flex;
`;

export const Item = styled.li`
    margin-right: 20px;
    color: ${props => props.theme.white.darker};
    transition: all 0.3s ease-in-out;
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;

    &:hover {
        color: ${props => props.theme.white.lighter};
    }
`;

export const ItemSelector = styled(motion.span)`
    position: absolute;
    background-color: ${props => props.theme.red};
    width: 95%;
    height: 3px;

    bottom: -10px;
    left: 1.5px;
`;

export const Search = styled.span`
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    svg {
        height: 18px;
    }
`;

export const Input = styled(motion.input)`
    transform-origin: right center;
    position: absolute;
    left: -175px;
    z-index: -1;
    padding: 8px 10px;
    padding-left: 35px;
    border: 1px solid ${props => props.theme.white.lighter};
    background-color: transparent;
    color: white;
`;
