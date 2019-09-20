import React, { useState, useContext, useEffect } from 'react';
import YouTube from 'react-youtube';
import { NotificationMessagesContext } from '../../contexts/NotificationMessagesContext';
import { AudioPlayerContext } from '../../contexts/AudioPlayerContext';
import VideoContainer from '../../components/VideoContainer';
import SideScrollContainer from '../../components/SideScrollContainer';
import MediaCard from '../../components/MediaCard';
import { VideoDescriptionStyle } from './VideoDescriptionStyle';
import videos from '../../data/youtube.json';
import tracks from '../../data/tracks.json';
import { formatDuration, YTDurationToSeconds } from '../../helpers/functions';

const EpisodePage = props => {

  const megaData = [...tracks, ...videos];

  console.log(megaData);

    const [videoPlayer, setVideoPlayer] = useState(null)
    const [videoDuration, setVideoDuration] = useState(null)
    const [videoInitiated, setVideoInitiated] = useState(false)

    const [localData, setLocalData] = useState(JSON.parse(localStorage.getItem('userData')))

    const mediaId = props.location.pathname.split('/')[2] || null
    const mediaData = megaData.find((media) => {
        return mediaId.toString() === media.id.toString()
    })

    const [isBookmarkToggled, setBookmarkToggle] = useState(false)
    const {notificationMessage, setNotificationMessage} = useContext(NotificationMessagesContext)
    const {audioPlayerUrl, setAudioPlayerUrl} = useContext(AudioPlayerContext)
    const [initalStartTime, setInitialStartTime] = useState(JSON.parse(localStorage.getItem('userData')).watchHistory.find((video => video.id === mediaId)) && JSON.parse(localStorage.getItem('userData')).watchHistory.find((video => video.id === mediaId)).progress || null)

    useEffect(() => {
        
        setInterval(() => { 
            if(videoPlayer && videoPlayer.getPlayerState() === 1){
                console.log('we good');
                
                if(videoPlayer.getCurrentTime() > 10 && videoDuration) {
                    const updatedData = {
                        watchHistory: [
                            ...localData.watchHistory.filter((media) => {
                                return media.id !== mediaId
                            }),
                            {
                                id:mediaId,
                                duration:videoDuration,
                                progress:Math.round(videoPlayer.getCurrentTime()-1)
                            }
                        ]
                    } 
    
                    localStorage.setItem('userData', JSON.stringify(updatedData))

                }

                if(videoDuration - videoPlayer.getCurrentTime() < 15) {
                    const updatedData = {
                        watchHistory: [
                            ...localData.watchHistory.filter((media) => {
                                return media.id !== mediaId
                            })
                        ]
                    }

                    localStorage.setItem('userData', JSON.stringify(updatedData))

                }

            }
        }, 1000)

        
    }, [videoPlayer, videoDuration, localData])

  return (
    <div>
        {
            mediaData === undefined ? <p style={{color:'white', fontSize:'18px', textAlign:'center', margin:'50px 0'}}>Avsnitt med ID "{mediaId}" finns inte.</p> :
        (<VideoContainer>
            <section>
                {mediaData.type === 'video' ? 
                <YouTube
                    videoId={mediaData.id}
                    onReady={(event) => {
                        setVideoDuration(event.target.getDuration())
                        setVideoPlayer(event.target)
                    }}

                    onPlay={(event) => {

                        setAudioPlayerUrl(null)

                        if(initalStartTime && !videoInitiated){
                            event.target.seekTo(initalStartTime)
                            setVideoInitiated(true)
                        }
                    }}
                /> : (
                    <div
                      style={{
                        top: '0',
                        background: '#343434',
                        width: '100%',
                        position: 'absolute',
                        left: '0',
                        height: '100%',
                        border: '15px solid #1b1b1b',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}
                      onClick={() => {
                        fetch(
                          `http://api.soundcloud.com/tracks/${mediaData.id}/stream?client_id=1zsDz22qtfrlBg2rdkko9EahD3GiJ996`
                        ).then(res => {
                          // TEMPORÄR CONTEXT STRUKTUR
                          console.log(res);
                          setAudioPlayerUrl(null);
      
                          setTimeout(() => {
                            setAudioPlayerUrl({
                              audioData: mediaData,
                              streamUrl: res.url
                            });
                          }, 250);
                        });
                      }}
                    >
                      <div
                        style={{
                          borderRadius: '50%',
                          width: '50px',
                          height: '50px',
                          background: '#1b1b1b',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center'
                        }}
                      >
                        <img src="/svg/playbutton.svg" alt="Play" />
                      </div>
                    </div>
                  )}
            </section>
            <VideoDescriptionStyle>
                <aside>
                    <h1>
                        {mediaData.title}
                    </h1>
                    {!isBookmarkToggled ?
                    <img onClick={() => {
                            setNotificationMessage({
                                message: 'Bookmarked!',
                                duration: 4,
                            })
                            setBookmarkToggle(true)
                        }
                    }  src="/svg/bookmark.svg" alt="Bookmark" />
                        : <img onClick={() => setBookmarkToggle(false)} src="/svg/bookmark-filled.svg" alt="Bookmarked" />
                }
                </aside>
                <h4>Torsdag 12 sep 12.00    -    {videoDuration && formatDuration(videoDuration)}</h4>
                <p>
                    {mediaData.description}
                </p>
            </VideoDescriptionStyle>
        </VideoContainer>
      )}
      <SideScrollContainer label="Liknande Avsnitt">
        {videos.map(video => {
          return (
            <MediaCard
              key={video.id}
              id={video.id}
              title={video.title}
              data={video}
              url={`/avsnitt/${video.id}`}
              mediaIcon={'/svg/video.png'}
              ctaIcon={'/svg/bookmark.svg'}
              duration={formatDuration(YTDurationToSeconds(video.duration))}
              height="100%"
              margin="0% 5% 0 0"
            ></MediaCard>
          );
        })}
      </SideScrollContainer>
    </div>
  );
};

export default EpisodePage;
