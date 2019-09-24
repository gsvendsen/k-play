import React, { useState, useEffect, useContext } from 'react';
import { SwitchStyle } from './SwitchStyle';
import { ThemeContext } from '../../contexts/ThemeContext';
import { main, contrast, bright } from '../../styles/theme';

const Switch = props => {
  const { themeState, setThemeState } = useContext(ThemeContext);

  const [isToggled, setIsToggled] = useState(
    props.toggled ? props.toggled : null
  );

  if (isToggled) {
    localStorage.setItem(props.localStorage, JSON.stringify(true));
  } else {
    localStorage.setItem(props.localStorage, JSON.stringify(false));
  }

  return (
    <SwitchStyle
      toggle={isToggled}
      onClick={() => {
        if (
          localStorage.getItem(
            props.localStorage === 'lightMode'
              ? 'highContrastMode'
              : 'lightMode'
          ) === 'false'
        ) {
          setIsToggled(!isToggled);
          if (!isToggled) {
            setThemeState(
              props.localStorage === 'lightMode'
                ? bright
                : props.localStorage === 'highContrastMode'
                ? contrast
                : main
            );
          }

          if (isToggled) {
            setThemeState(main);
          }
        }
      }}
    >
      <div></div>
    </SwitchStyle>
  );
};

export default Switch;
