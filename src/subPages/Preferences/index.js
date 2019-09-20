import React, { useState } from 'react';
import { PreferencesStyle } from './PreferencesStyle';

const Preferences = props => {
  const [isChecked, setIsChecked] = useState({
    first: true,
    two: false,
    three: false,
    four: false
  });

  console.log(isChecked);
  return (
    <PreferencesStyle checked={isChecked}>
      <div>
        <img src="/svg/down-arrow.svg" alt="" />
        <button onClick={props.goBack}>Tillbaka till navigation</button>
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
          <article
            onClick={() =>
              setIsChecked({ ...isChecked, first: !isChecked.first })
            }
          >
            <input type="checkbox" checked={isChecked.first} />
            <span></span>
            <aside>
              <li>Slumpa innehåll</li>
              <p>Allt material visas </p>
            </aside>
          </article>
          <article
            onClick={() => setIsChecked({ ...isChecked, two: !isChecked.two })}
          >
            <input type="checkbox" checked={isChecked.two} />
            <span></span>
            <aside>
              <li>Scenkonst</li>
              <p>Ämnen som teater, dans och opera prioriteras</p>
            </aside>
          </article>
          <article
            onClick={() =>
              setIsChecked({ ...isChecked, three: !isChecked.three })
            }
          >
            <input type="checkbox" checked={isChecked.three} />
            <span></span>
            <aside>
              <li>Musik</li>
              <p>Ämnen som musik och symfoni prioriteras</p>
            </aside>
          </article>
          <article
            onClick={() =>
              setIsChecked({ ...isChecked, four: !isChecked.four })
            }
          >
            <input type="checkbox" checked={isChecked.four} />
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
