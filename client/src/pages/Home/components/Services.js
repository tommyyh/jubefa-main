import React from 'react';
import css from './services.module.scss';
import Cta from 'components/Cta/Cta';

const Services = ({ lang, langCode }) => {
  const l = lang.services;

  return (
    <div className={css['cont']}>
      <section className={css['services']}>
        {Object.keys(l).map((item, i) => (
          <Service lang={lang} item={item} langCode={langCode} key={i} />
        ))}
      </section>
    </div>
  );
};

const Service = ({ lang, item, langCode }) => {
  const l = lang.services[item];

  return (
    <div className={css['service']}>
      <div className={css['content']}>
        <h3>{l.title}</h3>
        <p>{l.text}</p>

        <Cta text={l.cta.title} linkTo={l.cta.linkTo} blank={l.cta.blank} />
      </div>

      <div className={css['icons']}>
        <div className={css['icon']}>
          <img src={require(`assets/icons/${l.icon1}.svg`)} alt='icon 1' />
        </div>

        <div className={`${css['icon']} ${css['icon2']}`}>
          <img src={require(`assets/icons/${l.icon2}.svg`)} alt='icon 2' />
        </div>
      </div>
    </div>
  );
};

export default Services;
