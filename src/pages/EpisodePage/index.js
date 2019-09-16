import React from 'react';
import YouTube from 'react-youtube'
import VideoContainer from '../../components/VideoContainer'
import {VideoDescriptionStyle} from './VideoDescriptionStyle'
const episodeData = {"id":"Nmf2V55mlgw","title":"Masterclass med Pia Olby - Vad är skönsång (del 3 av 4)","description":"Kulturakademin och Teateralliansens kursen i sånggestaltning erbjuder professionella skådespelare möjlighet att arbeta med och utveckla sin egen vokala och musikaliska potential - och att utmana sig själva sångmässigt. Här förklarar kursledare Pia Olby vad skönsång är för henne.","url":"http://youtube.com/watch?w=Nmf2V55mlgw","thumbnail":"https://i.ytimg.com/vi/Nmf2V55mlgw/hqdefault.jpg","tags":["dans","teater","scenkonst","koreografi","film"],"duration":"PT2M1S","type":"video"}

const EpisodePage = () => {
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
                    <img src="./svg/bookmark.svg" alt="Bookmark" />
                </aside>
                <h4>Torsdag 12 sep 12.00  -- 40 min</h4>
                <p>
                    {episodeData.description}
                </p>
            </VideoDescriptionStyle>
        </VideoContainer>
    </div>
  );
}

export default EpisodePage;
