import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}

    @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@1,300&display=swap');

    *{
        box-sizing: border-box;
    }
    body{
        font-weight: 300;
        font-family: 'Source Sans Pro', sans-serif;
        color: ${props => props.theme.white.darker};
        background-color: black;
    }

    a{
        color: inherit;
        text-decoration:none;
    }
`;

export default GlobalStyle;
