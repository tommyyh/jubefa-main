import React from 'react';
import css from './landing.module.scss';
import { Link } from 'react-router-dom';
import landing1Png from 'assets/images/home/landing1.png';
import landing2Png from 'assets/images/home/landing2.png';
import landing3Png from 'assets/images/home/landing3.png';
import landing4Png from 'assets/images/home/landing4.png';

const Landing = ({ langCode, lang }) => {
  const l = lang.landing;

  return (
    <main className={css['landing']}>
      <div className={css['content']}>
        <h4>{l.sub}</h4>
        <h1>{l.title}</h1>

        <Link to={`/${langCode}/${l.cta.link}`}>{l.cta.title}</Link>
      </div>

      <div className={css['images']}>
        <div className={css['row1']}>
          <img src={landing3Png} alt='houses' />
          <img src={landing1Png} alt='houses' />
        </div>

        <div className={css['row2']}>
          <img src={landing2Png} alt='houses' />
          <img src={landing4Png} alt='houses' />
        </div>
      </div>
    </main>
  );
};

export default Landing;
