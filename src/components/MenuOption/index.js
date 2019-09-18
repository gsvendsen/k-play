import React from 'react';

import {MenuOptionStyle} from './MenuOptionStyle'

const MenuOption = props => {


  return (
    <MenuOptionStyle {...props}>
        <h2 onClick={() => props.onSelect()}>{props.title}</h2>
    </MenuOptionStyle>
  );
};

export default MenuOption;
