import React from 'react'
import {AudioPlayerStyle} from './AudioPlayerStyle'
const AudioPlayer = (props) => {

    return (
        <AudioPlayerStyle {...props}>
            <audio>
                <source></source>
            </audio>
        </AudioPlayerStyle>
    )
}

export default AudioPlayer
