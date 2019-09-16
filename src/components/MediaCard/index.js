import React from 'react';
import { MediaCardStyle } from './MediaCardStyle';

const MediaCard = props => {
  return (
    <MediaCardStyle {...props}>
      <button>
        <img src={props.ctaIcon} alt="" />
      </button>
      <article>
        <img
          src={`https://img.youtube.com/vi/${props.id}/maxresdefault.jpg`}
          alt=""
        />
        <p>{props.duration}</p>
      </article>
      <div>
        <p>{props.title}</p>
        <img className="media-icon" src={props.mediaIcon} alt="" />
      </div>
    </MediaCardStyle>
  );
};

export default MediaCard;
