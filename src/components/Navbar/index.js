import React, { Fragment, useState } from 'react';
import { NavbarStyle } from './NavbarStyle';

const Navbar = props => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isTouched, setIsTouched] = useState(false);
  return (
    <NavbarStyle
      isActive={props.open}
      isExpanded={isExpanded}
      isTouched={isTouched}
    >
      <div
        style={{
          position: 'relative',
          height: '100%',
          width: '100%'
        }}
      >
        <div
          style={{
            width: '10%',
            height: '100vh',
            position: 'absolute',
            left: '-60px',
            top: '-100px',
            background: 'rgba(255,255,255,0.5)',
            zIndex: '555'
          }}
        />
        <p>Events</p>
        <p
          onClick={() => {
            setIsExpanded(!isExpanded);
            setIsTouched(true);
          }}
        >
          Ämnen
          <img src="/svg/down-arrow.svg" alt="" />
        </p>
        {isExpanded && (
          <div>
            <li>Scenkonst</li>
            <li>Film, Foto och Radio</li>
            <li>Juridik & Ekonomi</li>
            <li>Kreativitet och Personlig Utveckling</li>
            <li>Normer, Genus & Kultur</li>
          </div>
        )}
      </div>
      <aside>
        <article>
          <img src="/svg/cog.svg" alt="" />
          <h6>Mina preferenser</h6>
        </article>
        <article>
          <img src="/svg/cog.svg" alt="" />
          <h6>Tillgänglighet</h6>
        </article>
      </aside>
    </NavbarStyle>
  );
};

export default Navbar;
