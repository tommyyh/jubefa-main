import React from 'react';
import css from './whyUs.module.scss';

const WhyUs = ({ lang, langCode }) => {
  const l = lang.whyUs;

  return (
    <section className={css['whyUs']}>
      <h4>{l.sub}</h4>
      <h2>{l.title}</h2>
      <p>{l.text}</p>

      <div className={css['reasons']}>
        {Object.keys(l.reasons).map((item, i) => (
          <Reason lang={lang} item={item} key={i} />
        ))}
      </div>
    </section>
  );
};

const Reason = ({ lang, item }) => {
  const l = lang.whyUs.reasons[item];

  return (
    <div className={css['reason']}>
      <h3>{l.title}</h3>
      <p>{l.text}</p>
    </div>
  );
};

export default WhyUs;
