import React, {useState, useContext} from 'react';
import YouTube from 'react-youtube'
import {NotificationMessagesContext} from '../../contexts/NotificationMessagesContext'
import VideoContainer from '../../components/VideoContainer'
import SideScrollContainer from '../../components/SideScrollContainer'
import MediaCard from '../../components/MediaCard'
import {VideoDescriptionStyle} from './VideoDescriptionStyle'
import videos from '../../data/youtube.json';
import { formatDuration, YTDurationToSeconds } from '../../helpers/functions';

const episodeData = {"id":"Nmf2V55mlgw","title":"Masterclass med Pia Olby - Vad är skönsång (del 3 av 4)","description":"Kulturakademin och Teateralliansens kursen i sånggestaltning erbjuder professionella skådespelare möjlighet att arbeta med och utveckla sin egen vokala och musikaliska potential - och att utmana sig själva sångmässigt. Här förklarar kursledare Pia Olby vad skönsång är för henne.","url":"http://youtube.com/watch?w=Nmf2V55mlgw","thumbnail":"https://i.ytimg.com/vi/Nmf2V55mlgw/hqdefault.jpg","tags":["dans","teater","scenkonst","koreografi","film"],"duration":"PT2M1S","type":"video"}

const EpisodePage = () => {

    const [isBookmarkToggled, setBookmarkToggle] = useState(false)
    const {notificationMessage, setNotificationMessage} = useContext(NotificationMessagesContext)

  return (
    <div>
        <VideoContainer>
            <section>
                <YouTube
                    videoId={episodeData.id}
                />
            </section>
            <VideoDescriptionStyle>
                <aside>
                    <h1>
                        {episodeData.title}
                    </h1>
                    {!isBookmarkToggled ?
                    <img onClick={() => {
                            setNotificationMessage('Bookmarked!')
                            setTimeout(() => {
                                setNotificationMessage(null)
                            }, 2000) 
                        }
                    }  src="./svg/bookmark.svg" alt="Bookmark" />
                        : <img onClick={() => setBookmarkToggle(false)} src="./svg/bookmark-filled.svg" alt="Bookmarked" />
                }
                </aside>
                <h4>Torsdag 12 sep 12.00  -- 40 min</h4>
                <p>
                    {episodeData.description}
                </p>
            </VideoDescriptionStyle>
        </VideoContainer>

        <SideScrollContainer label="Mer med Pia Olby">
        {videos.map(video => {
          return (
            <MediaCard
              key={video.id}
              id={video.id}
              title={video.title}
              mediaIcon={'./svg/video.png'}
              ctaIcon={'./svg/bookmark.svg'}
              duration={formatDuration(YTDurationToSeconds(video.duration))}
              height="100%"
              margin="0% 5% 0 0"
            ></MediaCard>
          );
        })}
      </SideScrollContainer>
    </div>
  );
}

export default EpisodePage;
