import React from 'react';
import {Link} from 'react-router-dom'
import { MediaCardStyle } from './MediaCardStyle';

const MediaCard = props => {
  return (
    <MediaCardStyle {...props}>
      <button>
        <img src={props.ctaIcon} alt="" />
      </button>
      <Link to={props.url}>
      <article>
        <img
          src={props.data && (props.data.type === 'video' ? `https://img.youtube.com/vi/${props.id}/maxresdefault.jpg` : props.data.thumbnail)}
          alt=""
        />
        <p>{props.duration}</p>
      </article>
      <div>
        <p>{props.title}</p>
        <img className="media-icon" src={props.mediaIcon} alt="" />
      </div>
      </Link>
    </MediaCardStyle>
  );
};

export default MediaCard;
