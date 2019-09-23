import { useContext } from 'react';
import { createGlobalStyle } from 'styled-components';
import { AudioPlayerContext } from '../contexts/AudioPlayerContext';

const GlobalStyle = createGlobalStyle`
    *,*::before,*::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    html {
        font-size: ${props => props.fontSize + 'px'};
    }

    body {
    padding: ${props => (props.isAudioActive ? '50px 0 150px 0' : '50px 0')};
    font-family: sans-serif;
    background-color: ${props => props.theme.colors.black};
    }

    button:active, button:focus {
        outline: none;
        border: none;
    }

    /* simple - enter transition 300ms, exit 150ms */
    .fade-appear,
    .fade-enter {
        opacity: 0;
        z-index: 1;
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
