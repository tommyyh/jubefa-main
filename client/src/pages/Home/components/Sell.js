import React from 'react';
import css from './sell.module.scss';
import Cta from 'components/Cta/Cta';
import sell1Png from 'assets/images/home/sell1.png';
import sell2Png from 'assets/images/home/sell2.png';

const Sell = ({ lang, langCode, isDesktop }) => {
  const l = lang.sell;

  return (
    <div className={css['cont']}>
      <section className={css['sell']}>
        <div className={css['content']}>
          <div>
            <h4>{l.sub}</h4>
            <h2>{l.title}</h2>
          </div>

          <div className={css['content-right']}>
            <p>{l.text}</p>

            <Cta text={l.cta.title} linkTo={l.cta.linkTo} blank={l.cta.blank} />
          </div>
        </div>

        <div className={css['images']}>
          {isDesktop ? (
            <>
              <img src={sell1Png} alt='old house' />
              <img src={sell2Png} alt='old house' />
            </>
          ) : (
            <>
              <img src={sell2Png} alt='old house' />
              <img src={sell1Png} alt='old house' />
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Sell;
