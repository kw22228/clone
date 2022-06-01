import styled, { keyframes } from 'styled-components';

const Title = styled.h1`
    color: ${props => props.theme.textColor};
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: ${props => props.theme.backgroundColor};
`;

const rotateAnimate = keyframes`
    0% {
        transform: rotate(0deg);
        border-radius: 0px;
    }
    50% {
        transform: rotate(360deg);
        border-radius: 50%;
    }
    100%{
        transform: rotate(0deg);
        border-radius: 0px;
    }
`;

const Emoji = styled.span`
    font-size: 30px;
`;

const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    width: 200px;
    background-color: tomato;
    animation: ${rotateAnimate} 5s linear infinite;

    ${Emoji} {
        &:hover {
            font-size: 98px;
        }
    }
    &:hover {
        width: 400px;
        height: 400px;
    }
`;

function App() {
    return (
        <Wrapper>
            <Title>Hello</Title>
            <Box>
                <Emoji>😍😍</Emoji>
            </Box>
        </Wrapper>
    );
}

export default App;
