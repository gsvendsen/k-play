import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
    *,*::before,*::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    body {
    padding: 50px 0 0 0;
    font-family: sans-serif;
    background-color:#1B1B1B;
}


`;

export default GlobalStyle;
