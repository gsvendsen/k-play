import React, { useState, useEffect, useContext } from 'react';
import { OptionsStyle } from './OptionsStyle';
import Switch from '../../components/Switch';

const Options = props => {
  const [isLightMode, setIsLightMode] = useState(
    localStorage.getItem('lightMode') ? localStorage.getItem('ligtMode') : null
  );

  useEffect(() => {
    if (isLightMode) {
      setIsLightMode(true);
    }
  }, []);
  return (
    <OptionsStyle>
      <div>
        <img src="/svg/down-arrow.svg" alt="" />
        <button onClick={props.goBack}>Tillbaka till navigation</button>
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
          <ol>
            <input type="range" min="1" max="3" steps="1" value="1" />
            <ul>
              <li>Aa</li>
              <li>Aa</li>
              <li>Aa</li>
            </ul>
          </ol>
        </article>
      </section>
    </OptionsStyle>
  );
};

export default Options;
