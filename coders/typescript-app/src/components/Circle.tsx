import styled from 'styled-components';

interface CircleProps {
    bgColor: string;
    borderColor?: string;
}

interface ContainerProps {
    bgColor: string;
    borderColor: string;
}

const Container = styled.div<ContainerProps>`
    background-color: ${props => props.bgColor};
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 10px solid ${props => props.borderColor};
`;

function Circle({ bgColor, borderColor }: CircleProps) {
    return <Container bgColor={bgColor} borderColor={borderColor ?? bgColor} />;
}

export default Circle;
