import React from 'react';

import {RedirectBoxStyle} from './RedirectBoxStyle'

const RedirectBox = props => {
    console.log(props);
    
  return (
    <RedirectBoxStyle>
        <h1>{props.title}</h1>
        <a href={props.href}>{props.linkTitle} ></a>
    </RedirectBoxStyle>
  );
};

export default RedirectBox;
