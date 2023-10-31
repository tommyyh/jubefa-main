import React from 'react';
import css from './wwd.module.scss';

const Wwd = ({ lang, langCode }) => {
  const l = lang.wwd;

  return (
    <div className={css['cont']}>
      <section className={css['wwd']}>
        <div>
          <h4>{l.sub}</h4>
          <h2>{l.title}</h2>
        </div>

        <p>{l.text}</p>
      </section>
    </div>
  );
};

export default Wwd;
