import React from 'react'
import { VideoContainerStyle } from './VideoContainerStyle';

const VideoContainer = (props) => {
    console.log(props)
    
    return (
        <VideoContainerStyle>
            {props.children}
        </VideoContainerStyle>
    )
}

export default VideoContainer

