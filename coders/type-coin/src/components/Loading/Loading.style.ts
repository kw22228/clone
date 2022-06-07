import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70vh;
    font-size: 1.2rem;
`;
export const Loading = styled.div`
    color: ${props => props.theme.textColor};
`;
