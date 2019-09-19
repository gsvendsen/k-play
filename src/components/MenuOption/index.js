import React from 'react';

import {MenuOptionStyle} from './MenuOptionStyle'

const MenuOption = props => {


  return (
    <MenuOptionStyle {...props}>
        <button onClick={() => props.onSelect()}>{props.title}</button>
    </MenuOptionStyle>
  );
};

export default MenuOption;
