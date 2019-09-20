import React, { useState } from 'react';
import { SwitchStyle } from './SwitchStyle';

const Switch = () => {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <SwitchStyle toggle={isToggled} onClick={() => setIsToggled(!isToggled)}>
      <div></div>
    </SwitchStyle>
  );
};

export default Switch;
