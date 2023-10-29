import React from 'react';
import css from './focus.module.scss';

const Focus = ({ lang, langCode }) => {
  const l = lang.focus;

  return (
    <section className={css['focus']}>
      <h4>{l.sub}</h4>
      <h2>{l.title}</h2>
      <p>{l.text}</p>
    </section>
  );
};

export default Focus;
