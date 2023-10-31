import React from 'react';
import css from './landing.module.scss';
import { Link } from 'react-router-dom';
import landing1Png from 'assets/images/home/landing1.png';
import landing2Png from 'assets/images/home/landing2.png';
import landing3Png from 'assets/images/home/landing3.png';
import landing4Png from 'assets/images/home/landing4.png';

const Landing = ({ langCode, lang, isDesktop }) => {
  const l = lang.landing;

  return (
    <>
      <div className={css['cont']}>
        <main className={css['landing']}>
          <div className={css['content']}>
            <div>
              <h4>{l.sub}</h4>
              <h1>{l.title}</h1>
            </div>

            <div>
              {isDesktop && <p>{l.text}</p>}
              <Link to={`https://www.jubefa-immobilien.de/de`} target='_blank'>
                {l.cta.title}
              </Link>
            </div>
          </div>
        </main>
      </div>

      <div className={css['img-cont']}>
        <div className={css['images']}>
          <div className={css['row1']}>
            {/* IF desktop change image order */}
            {isDesktop ? (
              <>
                <img src={landing1Png} alt='houses' />
                <img src={landing3Png} alt='houses' />
              </>
            ) : (
              <>
                <img src={landing3Png} alt='houses' />
                <img src={landing1Png} alt='houses' />
              </>
            )}
          </div>

          <div className={css['row2']}>
            <img src={landing2Png} alt='houses' />
            <img src={landing4Png} alt='houses' />
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
