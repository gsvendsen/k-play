/*
JSON Structure
{
    pods: {
        playlists: [playlist],
        tracks: [pod],
    },
    videos: [video]
}


*/

require('dotenv').config();
const getYouTube = require('./getYouTube');
const getSoundCloud = require('./getSoundCloud');

getYouTube();
getSoundCloud();

// console.log('Update successful! :)');
