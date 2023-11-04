import React from 'react';
import css from './bullet-points.module.scss';

const BulletPoints = ({ l, langCode, link }) => {
  return (
    <section className={css['cont']}>
      <div className={css['section']}>
        <h2>{l.title}</h2>

        <ul>
          {Object.keys(l.points).map((key, index) =>
            key == link ? (
              <li key={key}>
                <a href={l.points[key]} target='_blank'>
                  {l.points[key]}
                </a>
              </li>
            ) : (
              <li key={key}>{l.points[key]}</li>
            )
          )}
        </ul>
      </div>
    </section>
  );
};

export default BulletPoints;
