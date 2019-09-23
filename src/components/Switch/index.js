import React, { useState, useEffect } from 'react';
import { SwitchStyle } from './SwitchStyle';

const Switch = props => {
  const [isToggled, setIsToggled] = useState(
    props.toggled ? props.toggled : null
  );

  if (isToggled) {
    localStorage.setItem(props.localStorage, JSON.stringify(true));
  } else {
    localStorage.setItem(props.localStorage, JSON.stringify(false));
  }

  return (
    <SwitchStyle toggle={isToggled} onClick={() => setIsToggled(!isToggled)}>
      <div></div>
    </SwitchStyle>
  );
};

export default Switch;
