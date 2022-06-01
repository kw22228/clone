import styled from 'styled-components';

const Father = styled.div`
    display: flex;
    ${({ direct }) => direct === 'col' && 'flex-direction: column'}
`;

const Box = styled.div`
    background-color: ${({ bgColor }) => (bgColor ? bgColor : 'teal')};
    width: 100px;
    height: 100px;
`;

const Circle = styled(Box)`
    border-radius: 50px;
`;

const Text = styled.span`
    color: white;
`;

const Btn = styled.button`
    color: wheat;
    background-color: tomato;
    border: 0;
    border-radius: 15px;
    width: 50px;
    height: 30px;
`;

const Input = styled.input.attrs({ required: true, maxLength: 8 })`
    background-color: tomato;
`;
function App() {
    return (
        <>
            <Father>
                <Box>
                    <Text>Hello</Text>
                </Box>
                <Box bgColor="tomato" />
                <Circle />
            </Father>
            <hr />
            <Father>
                <Btn>Log in</Btn>
                <Btn as="a" href="/">
                    Log in
                </Btn>
            </Father>
            <hr />
            <Father direct="col">
                <Input />
                <Input />
                <Input />
                <Input />
                <Input />
            </Father>
        </>
    );
}

export default App;
