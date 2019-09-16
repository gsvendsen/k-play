import React, { Fragment } from 'react';
import { SideScrollContainerStyle } from './SideScrollContainerStyle';
import { SideScrollLabel } from './SideScrollLabel';

const SideScrollContainer = props => {
  console.log(props);

  return (
    <SideScrollLabel>
      {props.label && <label>{props.label}</label>}
      <SideScrollContainerStyle>{props.children}</SideScrollContainerStyle>
    </SideScrollLabel>
  );
};

export default SideScrollContainer;
