import React from 'react';
import css from './paragraph.module.scss';

const Paragraph = ({ l, langCode, link }) => {
  return (
    <section className={css['cont']}>
      <div className={css['section']}>
        <h2>{l.title}</h2>

        {link ? (
          <p>
            {l.text}
            <a href={l.link} target='_blank'>
              {l.link}
            </a>
            {l.text2}
          </p>
        ) : (
          <p>{l.text}</p>
        )}
      </div>
    </section>
  );
};

export default Paragraph;
