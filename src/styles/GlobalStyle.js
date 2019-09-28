import { useContext } from 'react';
import { createGlobalStyle } from 'styled-components';
import { AudioPlayerContext } from '../contexts/AudioPlayerContext';

const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,500&display=swap');

    *,*::before,*::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    html {
        font-size: ${props => props.fontSize + 'px'};
    }

    body {
        padding: ${props => (props.isAudioActive ? '50px 0 140px 0' : '50px 0')};
        font-family: 'IBM Plex Sans', sans-serif;
        background-color: ${props => props.theme.colors.black};
        width:100vw;
        overflow-x:hidden;
    }

    button:active, button:focus {
        outline: none;
        border: none;
    }

    /* simple - enter transition 300ms, exit 150ms */
    .fade-appear,
    .fade-enter {
        opacity: 0;
    }
    .fade-appear-active,
    .fade-enter.fade-enter-active {
        opacity: 1;
        transition: opacity 300ms linear 150ms;
    }

    .fade-exit {
        opacity: 1;
    }

    .fade-exit.fade-exit-active {
        opacity: 0;
        transition: opacity 150ms linear;
    }
`;

export default GlobalStyle;
