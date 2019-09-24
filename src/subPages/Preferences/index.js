import React, { useState } from 'react';
import { PreferencesStyle } from './PreferencesStyle';

const Preferences = props => {
  const [isChecked, setIsChecked] = useState(1);

  return (
    <PreferencesStyle checked={isChecked}>
      <div onClick={props.goBack}>
        <img src="/svg/down-arrow.svg" alt="" />
        <button>Tillbaka till navigation</button>
      </div>
      <section>
        <section>
          <h2>Prioritera material </h2>
          <p>
            Välj en av nedanstående kategorier för att prioritera det ämnet vid
            sönkingar. Övriga kategorier visas efter det valda området.
          </p>
        </section>
        <ul>
          <article onClick={() => setIsChecked(1)}>
            <input type="checkbox" checked={isChecked === 1} />
            <span></span>
            <aside>
              <li>Slumpa innehåll</li>
              <p>Allt material visas </p>
            </aside>
          </article>
          <article onClick={() => setIsChecked(2)}>
            <input type="checkbox" checked={isChecked === 2} />
            <span></span>
            <aside>
              <li>Scenkonst</li>
              <p>Ämnen som teater, dans och opera prioriteras</p>
            </aside>
          </article>
          <article onClick={() => setIsChecked(3)}>
            <input type="checkbox" checked={isChecked === 3} />
            <span></span>
            <aside>
              <li>Musik</li>
              <p>Ämnen som musik och symfoni prioriteras</p>
            </aside>
          </article>
          <article onClick={() => setIsChecked(4)}>
            <input type="checkbox" checked={isChecked === 4} />
            <span></span>
            <aside>
              <li>Audiovisuell media </li>
              <p>Ämnen som film, TV, radio prioriteras </p>
            </aside>
          </article>
        </ul>
      </section>
    </PreferencesStyle>
  );
};

export default Preferences;
