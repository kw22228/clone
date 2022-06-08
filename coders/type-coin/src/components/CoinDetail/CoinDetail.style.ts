import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const RoundBox = styled.div<{ between?: boolean }>`
    display: flex;
    justify-content: ${props => (props.between ? 'space-between' : 'space-around')};
    align-items: center;
    background-color: ${props => props.theme.textColor};
    width: 100%;
    padding: 20px 0px;
    border-radius: 20px;
    margin-top: 20px;
`;

export const Item = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${props => props.theme.bgColor};
    font-weight: bold;
`;

export const Description = styled.div`
    margin-top: 20px;
    color: ${props => props.theme.textColor};
`;

//tabs
export const TabWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 20px 0px;
    gap: 20px;
`;

export const Tab = styled.div<{ isActive?: boolean }>`
    background-color: ${props =>
        props.isActive ? props.theme.accentColor : props.theme.textColor};
    color: ${props => (props.isActive ? props.theme.textColor : props.theme.bgColor)};

    font-weight: bold;
    text-align: center;
    border-radius: 100px;
    padding: 10px 0px;
    transition: all 0.3s ease-in-out;

    a {
        display: block;
        width: 100%;
        height: 100%;
    }
`;
