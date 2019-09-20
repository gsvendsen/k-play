import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SideScrollContainer from '../../components/SideScrollContainer';
import MediaCard from '../../components/MediaCard';
import MenuOption from '../../components/MenuOption';

import videos from '../../data/youtube.json';
import tracks from '../../data/tracks.json';

import { formatDuration, YTDurationToSeconds } from '../../helpers/functions';
import { AudioPlayerContext } from '../../contexts/AudioPlayerContext';

const miniData = [...videos, ...tracks];

const StartPage = () => {
    const [filterState, setFilterState] = useState('all');

    const [localData, setLocalData] = useState(JSON.parse(localStorage.getItem('userData')).watchHistory || null)
    const [watchedVideos, setWatchedVideos] = useState([])

    // Sets watched videos used from localStorage
    useEffect(() => {
        if(localData){
            setWatchedVideos(miniData.filter((video) => {
                const matchedVideo = localData.filter((localVideo) => {
                    return localVideo.id === video.id
                })
            
                if(matchedVideo.length > 0 ){
                    return true
                } else {
                    return false
                }
            
            }))
        }
    }, [])

    // Temporary shuffle function for randomizing data
    const shuffle = (array) => {
        let currentIndex = array.length, temporaryValue, randomIndex;
        
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
        
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
        
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        
        return array;
    }

    // Shuffles video/pods
    // let megaData = shuffle(miniData)
    let megaData = miniData

    // Filter Type of media
    megaData = megaData.filter((item) => {
        if (filterState === 'all'){
            return true
        }

        if (item.type === 'video' && filterState === 'video'){
            return true
        }

        if (item.type === 'podcast' && filterState === 'podcast'){
            return true
        }
    })

    return (
        <div style={{padding:'30px 0 0 0'}}>
            <div style={{display:'flex', margin:'0 0 20px 0'}}>
                <MenuOption isActive={filterState === 'all'} onSelect={() => setFilterState('all')} title="Visa Alla" />
                <MenuOption isActive={filterState === 'podcast'} onSelect={() => setFilterState('podcast')} title="Podcasts" />
                <MenuOption isActive={filterState === 'video'} onSelect={() => setFilterState('video')} title="Videos" />
            </div>
            {watchedVideos.length > 0 &&
            <SideScrollContainer label="Forsätt titta">
                {watchedVideos.map(video => {
                return (
                    <MediaCard
                    key={video.id}
                    id={video.id}
                    title={video.title}
                    data={video}
                    url={`/avsnitt/${video.id}`}
                    mediaIcon={video.type === 'video' ? '/svg/video.svg' : '/svg/audio.svg'}
                    ctaIcon={'/svg/cross.svg'}
                    ctaAction={(id) => {
                        const updatedData = {
                            watchHistory: [
                                ...localData.filter((media) => {
                                    return media.id !== id
                                })
                            ]
                        }

                        localStorage.setItem('userData', JSON.stringify(updatedData))
                    
                        setWatchedVideos(watchedVideos.filter(video => {
                            return video.id !== id
                        }))
                        
                    }}
                    duration={video.type === 'video' ? formatDuration(YTDurationToSeconds(video.duration)) : formatDuration(video.duration/1000)}
                    height="100%"
                    margin="0% 5% 0 0"
                    ></MediaCard>
                );
                })}
            </SideScrollContainer>}

            <SideScrollContainer label="Mest spelade just nu">
                {megaData.map(video => {
                return (
                    <MediaCard
                    data={video}
                    key={video.id}
                    id={video.id}
                    title={video.title}
                    url={`/avsnitt/${video.id}`}
                    mediaIcon={video.type === 'video' ? '/svg/video.svg' : '/svg/audio.svg'}
                    ctaIcon={'./svg/bookmark.svg'}
                    duration={video.type === 'video' ? formatDuration(YTDurationToSeconds(video.duration)) : formatDuration(video.duration/1000)}
                    height="100%"
                    margin="0% 5% 0 0"
                    ></MediaCard>
                );
                })}
            </SideScrollContainer>

            <SideScrollContainer label="Mest spelade just nu">
                {megaData.map(video => {
                return (
                    <MediaCard
                    data={video}
                    key={video.id}
                    id={video.id}
                    title={video.title}
                    url={`/avsnitt/${video.id}`}
                    mediaIcon={video.type === 'video' ? '/svg/video.svg' : '/svg/audio.svg'}
                    ctaIcon={'./svg/bookmark.svg'}
                    duration={video.type === 'video' ? formatDuration(YTDurationToSeconds(video.duration)) : formatDuration(video.duration/1000)}
                    height="100%"
                    margin="0% 5% 0 0"
                    ></MediaCard>
                );
                })}
            </SideScrollContainer>
        </div>
    );
};

export default StartPage;
