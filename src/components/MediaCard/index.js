import React from 'react';
import { MediaCardStyle } from './MediaCardStyle';

const MediaCard = props => {
  return (
    <MediaCardStyle {...props}>
      <div>{props.cta}</div>
      <img
        src={`https://img.youtube.com/vi/${props.id}/maxresdefault.jpg`}
        alt=""
      />
      <p>{props.title}</p>
      <img src={props.icon} alt="" />
    </MediaCardStyle>
  );
};

export default MediaCard;
