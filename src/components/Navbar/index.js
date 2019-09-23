import React, { Fragment, useState } from 'react';
import { NavbarStyle } from './NavbarStyle';
import Options from '../../subPages/Options';
import Preferences from '../../subPages/Preferences';
import Events from '../../subPages/Events';

const Navbar = props => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isTouched, setIsTouched] = useState(false);
  const [selectedPage, setSelectedPage] = useState(null);

  return (
    <Fragment>
      {selectedPage === null && (
        <NavbarStyle
          isActive={props.open}
          isExpanded={isExpanded}
          isTouched={isTouched}
        >
          <div
            style={{
              position: 'relative',
              width: '100%'
            }}
          >
            <p onClick={() => setSelectedPage('events')}>Events</p>
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
            <article onClick={() => setSelectedPage('preferences')}>
              <img src="/svg/cog.svg" alt="" />
              <h6>Mina preferenser</h6>
            </article>
            <article onClick={() => setSelectedPage('options')}>
              <img src="/svg/cog.svg" alt="" />
              <h6>Tillgänglighet</h6>
            </article>
          </aside>
        </NavbarStyle>
      )}
      {selectedPage === 'options' && (
        <Options goBack={() => setSelectedPage(null)}></Options>
      )}
      {selectedPage === 'preferences' && (
        <Preferences goBack={() => setSelectedPage(null)}></Preferences>
      )}
      {selectedPage === 'events' && (
        <Events goBack={() => setSelectedPage(null)}></Events>
      )}
    </Fragment>
  );
};

export default Navbar;
