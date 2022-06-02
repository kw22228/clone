import styled from 'styled-components';
import { Circle, Form } from './components/';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme.bgColor};
    width: 100vw;
    align-items: center;
    min-height: 100vh;
`;
const Title = styled.h1`
    color: ${props => props.theme.textColor};
`;
function App() {
    return (
        <Container>
            <Title>Hello</Title>
            <Circle bgColor="teal" borderColor="blue" />
            <Circle bgColor="tomato" />
            <hr />
            <Form />
            <hr />
        </Container>
    );
}

export default App;
