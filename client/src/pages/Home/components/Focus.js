import React from 'react';
import css from './focus.module.scss';

const Focus = ({ lang, langCode }) => {
  const l = lang.focus;

  return (
    <div className={css['cont']}>
      <section className={css['focus']}>
        <div>
          <h4>{l.sub}</h4>
          <h2>{l.title}</h2>
        </div>

        <p>{l.text}</p>
      </section>
    </div>
  );
};

export default Focus;
