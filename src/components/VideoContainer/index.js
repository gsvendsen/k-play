import React from 'react'
import { VideoContainerStyle } from './VideoContainerStyle';

const VideoContainer = (props) => {
    return (
        <VideoContainerStyle>
            {props.children}
        </VideoContainerStyle>
    )
}

export default VideoContainer

