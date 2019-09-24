import React from 'react';
import { EventsStyle } from './EventsStyle';
import Switch from '../../components/Switch';

const Events = props => {
  return (
    <EventsStyle>
      <div onClick={props.goBack}>
        <img src="/svg/down-arrow.svg" alt="" />
        <button>Tillbaka till navigation</button>
      </div>

      <section>
        <article>
          <p>Göteborgs Filmfestival 2019</p>
          <img src="/svg/down-arrow.svg" alt="View" />
        </article>
        <article>
          <p>Scenkonstbiennalen 2019</p>
          <img src="/svg/down-arrow.svg" alt="View" />
        </article>
        <article>
          <p>TV Drama Vision 2019</p>
          <img src="/svg/down-arrow.svg" alt="View" />
        </article>
        <article>
          <p>Nordisk Film & Tv Fond Prize</p>
          <img src="/svg/down-arrow.svg" alt="View" />
        </article>
        <article>
          <p>Audiovisual days 2018</p>
          <img src="/svg/down-arrow.svg" alt="View" />
        </article>
      </section>
    </EventsStyle>
  );
};

export default Events;
