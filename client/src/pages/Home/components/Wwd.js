import React from 'react';
import css from './wwd.module.scss';

const Wwd = ({ lang, langCode }) => {
  const l = lang.wwd;

  return (
    <section className={css['wwd']}>
      <h4>{l.sub}</h4>
      <h2>{l.title}</h2>
      <p>{l.text}</p>
    </section>
  );
};

export default Wwd;
