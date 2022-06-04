import styled from 'styled-components';

export const CoinList = styled.ul``;

export const Coin = styled.li`
    background-color: ${props => props.theme.textColor};
    color: ${props => props.theme.bgColor};
    margin-bottom: 10px;
    border-radius: 15px;

    a {
        transition: all 0.3s ease-in-out;
        display: block;
        padding: 20px;
        border-radius: 15px;
    }
    &:hover {
        a {
            background-color: ${props => props.theme.accentColor};
            color: ${props => props.theme.textColor};
        }
    }
`;
