import {useContext} from 'react'
import { createGlobalStyle } from 'styled-components';
import { AudioPlayerContext } from '../contexts/AudioPlayerContext'

const GlobalStyle = createGlobalStyle`
    *,*::before,*::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    html {
        font-size: 16px;
    }

    body {
    padding: ${props => props.isAudioActive ? '50px 0 150px 0' : '50px 0'};
    font-family: sans-serif;
    background-color:#1B1B1B;
    }

    button:active, button:focus {
        outline: none;
        border: none;
    }
`;

export default GlobalStyle;
