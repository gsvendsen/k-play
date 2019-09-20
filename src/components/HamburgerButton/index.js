import React from 'react';
import { HamburgerButtonStyle } from './HamburgerButtonStyle';

const HamburgerButton = props => {
  return (
    <HamburgerButtonStyle menuIsOpen={props.menuIsOpen}>
      <div onClick={props.toggle}>
        <section></section>
        <section></section>
        <section></section>
      </div>
    </HamburgerButtonStyle>
  );
};

export default HamburgerButton;
