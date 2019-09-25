const fetch = require('node-fetch');

const getYouTube = () => {
  const fs = require('fs');
  const path = require('path');
  const maxResults = 50;
  const YOUTUBE_API_KEY = `key=${process.env.YOUTUBE_API_KEY}`;
  const YOUTUBE_CHANNEL_ID = `${process.env.YOUTUBE_CHANNEL_ID}`;

  const fakeTags = [
    ['dans', 'teater', 'scenkonst', 'koreografi', 'film'],
    ['skådespel', 'teater', 'scenkonst', 'workshop', 'manus'],
    ['musik', 'saxofon', 'beach', 'tv', 'ljussättning'],
    ['fotografi', 'film', 'bildkonst', 'ljussättning'],
    ['masterclass', 'manus', 'skrivande', 'film', 'teater']
  ];
  // Fetching all videos from the channel
  let videos = [];
  const url = `https://www.googleapis.com/youtube/v3/search?channelId=${YOUTUBE_CHANNEL_ID}&part=snippet&${YOUTUBE_API_KEY}&maxResults=${maxResults}`;
  console.log(url);
  fetch(
    `https://www.googleapis.com/youtube/v3/search?channelId=${YOUTUBE_CHANNEL_ID}&part=snippet&${YOUTUBE_API_KEY}&maxResults=${maxResults}`
  )
    .then(res => res.json())
    .then(data => {
      data.items.map((item, i) => {
        fetch(
          `https://www.googleapis.com/youtube/v3/videos?id=${item.id.videoId}&${YOUTUBE_API_KEY}&part=contentDetails,snippet`
        )
          .then(res => res.json())
          .then(data => {
            if (data.items.length > 0) {
              const newVideo = {
                id: data.items[0].id,
                title: data.items[0].snippet.title,
                description: data.items[0].snippet.description,
                url: `http://youtube.com/watch?w=${data.items[0].id}`,
                thumbnail: data.items[0].snippet.thumbnails.high.url,
                tags: fakeTags[i % (fakeTags.length - 1)], // data.items[0].snippet.tags,
                duration: data.items[0].contentDetails.duration,
                date: data.items[0].snippet.publishedAt,
                type: 'video'
              };
              videos.push(newVideo);
              const file = path.join(__dirname, '../src/data/youtube.json');
              fs.writeFile(file, JSON.stringify(videos), err => {});
            }
          });
      });
      console.log('YouTube data updated :)');
    });
};

module.exports = getYouTube;
