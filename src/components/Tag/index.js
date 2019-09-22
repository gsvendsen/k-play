import React, { Fragment, useContext, useState, useEffect } from 'react';

import {TagStyle} from './TagStyle'

const Tag = props => {
  return (
    <TagStyle>
        <p onClick={props.searchTag}>#{props.title}</p>
    </TagStyle>
  );
};

export default Tag;
