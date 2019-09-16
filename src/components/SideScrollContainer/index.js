import React, { Fragment } from 'react';
import { SideScrollContainerStyle } from './SideScrollContainerStyle';
import { SideScrollLabel } from './SideScrollLabel';

const SideScrollContainer = props => {
  return (
    <SideScrollLabel>
      {props.label && <label>{props.label}</label>}
      <section>
        <SideScrollContainerStyle>{props.children}</SideScrollContainerStyle>
      </section>
    </SideScrollLabel>
  );
};

export default SideScrollContainer;
