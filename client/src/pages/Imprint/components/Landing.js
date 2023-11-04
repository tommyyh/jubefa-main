import React from 'react';
import css from './landing.module.scss';
import { Link } from 'react-router-dom';

const Landing = ({ l, langCode }) => {
  return (
    <main className={css['cont']}>
      <div className={css['landing']}>
        <h1>{l.title}</h1>
        <p>{l.intro}</p>
      </div>
    </main>
  );
};

export default Landing;
