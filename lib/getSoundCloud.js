// Structure of pod object
/*
const tracks = {
    id: String,
    title: String,
    description: String,
    tags: [String],
    streamUrl: String,
    duration: Int,
    thumbnail: String, 
    playlistId: String, 
}

const playlist = {
    id: String,
    title: String,
    description: String,
    tags: [String], // tags from all included tracks
    trackIds: [String],
    duration: Int,
    thumbnail: String,
}
*/

const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');

const CLIENT_ID = `?client_id=${process.env.SOUNDCLOUD_CLIENT_ID}`;
const SOUNDCLOUD_URI = 'http://api.soundcloud.com';
const USER_ID = `${process.env.SOUNDCLOUD_USER_ID}`;
const USER_NAME = `${process.env.SOUNDCLOUD_USER_NAME}`;
const fakeTags = [
  ['dans', 'teater', 'scenkonst', 'koreografi', 'film'],
  ['skådespel', 'teater', 'scenkonst', 'workshop', 'manus'],
  ['musik', 'saxofon', 'beach', 'tv', 'ljussättning'],
  ['fotografi', 'film', 'bildkonst', 'ljussättning'],
  ['masterclass', 'manus', 'skrivande', 'film', 'teater']
];

const getSoundCloud = async () => {
  try {
    const response = await fetch(
      `${SOUNDCLOUD_URI}/users/${USER_NAME}/playlists/${CLIENT_ID}&limit=200    `
    );
    const data = await response.json();
    // console.log(data);
    // Double loop in playlists

    let playlists = [];

    playlists = data.map((playlist, i) => {
      const trackIds = playlist.tracks.map(track => {
        return track.id;
      });
      // Real get the tags
      // let tags = [];
      // playlist.tracks.map(track => {
      //   const newTag = track.tag_list.split(' ');
      //   newTag.map(tag => {
      //     tags.push(tag);
      //   });
      // });
      // tags = tags.filter(function(elem, pos) {
      //   return tags.indexOf(elem) == pos;
      // });

      const newPlaylist = {
        id: playlist.id,
        title: playlist.title,
        description: playlist.description,
        trackIds: trackIds,
        duration: playlist.duration,
        thumbnail: playlist.artwork_url,
        tags: fakeTags[i % (fakeTags.length - 1)],
        type: 'playlist'
      };
      return newPlaylist;
    });

    // Writing to file .json
    const file = path.join(__dirname, '../src/data/playlists.json');
    fs.writeFile(file, JSON.stringify(playlists), err => {
      if (err) {
        return console.log('Fail ', err);
      }
    });
  } catch (e) {
    throw e;
  }

  try {
    let tracks = [];
    const response2 = await fetch(
      `${SOUNDCLOUD_URI}/users/${USER_ID}/tracks/${CLIENT_ID}&limit=200`
    );
    const data2 = await response2.json();
    tracks = data2.map((track, i) => {
      const newTrack = {
        id: track.id,
        title: track.title,
        description: track.description,
        date: track.created_at,
        tags: fakeTags[i % (fakeTags.length - 1)], // track.tag_list.split(" "),
        streamUrl: track.stream_url,
        duration: track.duration,
        thumbnail: track.artwork_url,
        playlistId: null,
        type: 'podcast'
      };
      return newTrack;
    });

    // Writing to file .json
    const file = path.join(__dirname, '../src/data/tracks.json');
    fs.writeFile(file, JSON.stringify(tracks), err => {
      if (err) {
        return console.log('Fail ', err);
      }
    });
    console.log('SoundCloud data updated :)');
  } catch (e) {
    throw e;
  }
};

module.exports = getSoundCloud;
