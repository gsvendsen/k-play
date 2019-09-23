export const YTDurationToSeconds = duration => {
  
  let a = duration.match(/\d+/g);

  if (
    duration.indexOf('M') >= 0 &&
    duration.indexOf('H') == -1 &&
    duration.indexOf('S') == -1
  ) {
    a = [0, a[0], 0];
  }

  if (duration.indexOf('H') >= 0 && duration.indexOf('M') == -1) {
    a = [a[0], 0, a[1]];
  }
  if (
    duration.indexOf('H') >= 0 &&
    duration.indexOf('M') == -1 &&
    duration.indexOf('S') == -1
  ) {
    a = [a[0], 0, 0];
  }

  duration = 0;

  if (a.length == 3) {
    duration = duration + parseInt(a[0]) * 3600;
    duration = duration + parseInt(a[1]) * 60;
    duration = duration + parseInt(a[2]);
  }

  if (a.length == 2) {
    duration = duration + parseInt(a[0]) * 60;
    duration = duration + parseInt(a[1]);
  }

  if (a.length == 1) {
    duration = duration + parseInt(a[0]);
  }
  return duration;
};

export const formatDuration = time => {
  // Hours, minutes and seconds
  var hrs = ~~(time / 3600);
  var mins = ~~((time % 3600) / 60);
  var secs = ~~time % 60;

  // Output like "1:01" or "4:03:59" or "123:03:59"
  var ret = '';

  if (hrs > 0) {
    ret += '' + hrs + ':' + (mins < 10 ? '0' : '');
  }

  ret += '' + mins + ':' + (secs < 10 ? '0' : '');
  ret += '' + secs;
  return ret;
};

export const toggleBookmark = (data) => {

  let currentLocalData = JSON.parse(localStorage.getItem('userData'))
  
  if(currentLocalData.bookmarks && currentLocalData.bookmarks.filter(bookmark => bookmark.id === data.id).length === 0){
    const newUpdatedData = {
      watchHistory: currentLocalData.watchHistory,
      bookmarks: [
        ...currentLocalData.bookmarks,
        data
      ]
    }
  
    localStorage.setItem('userData', JSON.stringify(newUpdatedData))  
  } else {
    const newUpdatedData = {
      watchHistory: currentLocalData.watchHistory,
      bookmarks: currentLocalData.bookmarks.filter(bookmark => bookmark.id !== data.id)
    }
  
    localStorage.setItem('userData', JSON.stringify(newUpdatedData)) 
  }

}

export const filterMediaTypes = (filterState, array) => {
  return array.filter(item => {
      if (filterState === 'all') {
      return true;
      }

      if (item.type === 'video' && filterState === 'video') {
      return true;
      }

      if (item.type === 'podcast' && filterState === 'podcast') {
      return true;
      }
  });
}
