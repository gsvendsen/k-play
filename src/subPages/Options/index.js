import React, { useState, useEffect, useContext } from 'react';
import { OptionsStyle } from './OptionsStyle';
import Switch from '../../components/Switch';
import { FontSizeContext } from '../../contexts/FontSizeContext';

const Options = props => {
  const { fontSizeState, setFontSizeState } = useContext(FontSizeContext);
  const [rangePosition, setRangePosition] = useState(
    fontSizeState === 16
      ? 0
      : fontSizeState === 18
      ? 50
      : fontSizeState === 20
      ? 100
      : 0
  );

  const snapRange = () => {
    if (rangePosition <= 25) {
      setRangePosition(0);
      setFontSizeState(16);
    } else if (rangePosition > 25 && rangePosition <= 75) {
      setRangePosition(50);
      setFontSizeState(18);
    } else if (rangePosition > 75) {
      setRangePosition(100);
      setFontSizeState(20);
    }
  };

  return (
    <OptionsStyle>
      <div onClick={props.goBack}>
        <img src="/svg/down-arrow.svg" alt="" />
        <button>Tillbaka till navigation</button>
      </div>
      <section>
        <article>
          <h2>Tillgänglighet / Accessibility</h2>
          <p>
            A place to unite front-end developers and designers and celebrate
            the language.
          </p>
        </article>
        <hr />
        <article>
          <h3>Ljust läge</h3>
          <main>
            <p>
              Ljuslägg bakgrunden och öka ljustyrkan för ett mer tydligare
              utseende.
            </p>
            <Switch
              toggled={
                localStorage.getItem('lightMode')
                  ? localStorage.getItem('lightMode') === 'true'
                  : false
              }
              localStorage="lightMode"
            />
          </main>
        </article>
        <hr />
        <article>
          <h3>Högkontrastläge</h3>
          <main>
            <p>Aktivera ett läge för bättre kontrast.</p>
            <Switch
              toggled={
                localStorage.getItem('highContrastMode')
                  ? localStorage.getItem('highContrastMode') === 'true'
                  : false
              }
              localStorage="highContrastMode"
            />
          </main>
        </article>
        <hr />
        <article>
          <h3>Textstorlek</h3>
          <p>Ställ in dina preferenser för textstorlek.</p>
          <input
            type="range"
            min="0"
            max="100"
            value={rangePosition}
            onChange={e => setRangePosition(e.target.value)}
            onTouchEnd={e => snapRange(e.target.value)}
          ></input>
          <ul>
            <li
              onClick={() => {
                setRangePosition(0);
                setFontSizeState(16);
              }}
            >
              Aa
            </li>
            <li
              onClick={() => {
                setRangePosition(50);
                setFontSizeState(18);
              }}
            >
              Aa
            </li>
            <li
              onClick={() => {
                setRangePosition(100);
                setFontSizeState(20);
              }}
            >
              Aa
            </li>
          </ul>
        </article>
      </section>
    </OptionsStyle>
  );
};

export default Options;
