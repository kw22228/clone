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
