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
    padding: 20px 10px;
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
