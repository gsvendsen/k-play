import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HeaderCardStyle } from './HeaderCardStyle';

const HeaderCard = props => {
 
  return (
    <HeaderCardStyle {...props}>
      <Link to={props.url}>
        <h2>NYHET</h2>
        <h1>{props.title}</h1>
        <img src={props.imageUrl}></img>
      </Link>
    </HeaderCardStyle>
  );
};

export default HeaderCard;
