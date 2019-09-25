import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { NavbarStyle } from './NavbarStyle';
import Options from '../../subPages/Options';
import Preferences from '../../subPages/Preferences';

const Navbar = props => {
  const [isExpanded, setIsExpanded] = useState({
    one: false,
    two: true
  });
  const [isTouched, setIsTouched] = useState(false);
  const [selectedPage, setSelectedPage] = useState(null);

  const { menuIsOpen, setMenuIsOpen } = props.menuIsOpen;

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
            <p
              onClick={() => {
                setIsExpanded({ one: !isExpanded.one, two: isExpanded.two });
                setIsTouched(true);
              }}
            >
              Events
              <img src="/svg/down-arrow.svg" alt="" />
            </p>
            {isExpanded.one === true && (
              <div>
                <Link onClick={() => setMenuIsOpen(false)} to="/category">
                  <li>Göteborgs Filmfestival 2019</li>
                </Link>
                <Link onClick={() => setMenuIsOpen(false)} to="/category">
                  <li>Scenkonstbiennalen 2019</li>
                </Link>
                <Link onClick={() => setMenuIsOpen(false)} to="/category">
                  <li>TV Drama Vision 2019</li>
                </Link>
                <Link onClick={() => setMenuIsOpen(false)} to="/category">
                  <li>Nordisk Film & Tv Fond Prize</li>
                </Link>
                <Link onClick={() => setMenuIsOpen(false)} to="/category">
                  <li>Audiovisual days 2018</li>
                </Link>
              </div>
            )}
            <p
              onClick={() => {
                setIsExpanded({ two: !isExpanded.two, one: isExpanded.one });
                setIsTouched(true);
              }}
            >
              Ämnen
              <img src="/svg/down-arrow.svg" alt="" />
            </p>
            {isExpanded.two === true && (
              <div>
                <Link onClick={() => setMenuIsOpen(false)} to="/category">
                  <li>Scenkonst</li>
                </Link>
                <Link onClick={() => setMenuIsOpen(false)} to="/category">
                  <li>Film, Foto och Radio</li>
                </Link>
                <Link onClick={() => setMenuIsOpen(false)} to="/category">
                  <li>Juridik & Ekonomi</li>
                </Link>
                <Link onClick={() => setMenuIsOpen(false)} to="/category">
                  <li>Kreativitet och Personlig Utveckling</li>
                </Link>
                <Link onClick={() => setMenuIsOpen(false)} to="/category">
                  <li>Normer, Genus & Kultur</li>
                </Link>
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
    </Fragment>
  );
};

export default Navbar;
