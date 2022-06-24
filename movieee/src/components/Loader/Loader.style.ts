import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled.div`
    position: sticky;
    height: 100vh;
    background-color: black;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Logo = styled(motion.svg)`
    width: 200px;
    stroke: #d81f26;
    stroke-width: 5;
`;
