import React from 'react';

import { RedirectBoxStyle } from './RedirectBoxStyle';

const RedirectBox = props => {
  return (
    <RedirectBoxStyle>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <a href={props.href}>{props.linkTitle}</a>
      <hr />
      <h1>{props.titleMaterial}</h1>
      <p>{props.descriptionMaterial}</p>
      <button>{props.btnTitle}</button>
    </RedirectBoxStyle>
  );
};

export default RedirectBox;
