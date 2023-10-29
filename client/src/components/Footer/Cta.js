import React from 'react';
import css from './cta.module.scss';
import { default as CtaLink } from 'components/Cta/Cta';

const Cta = ({ lang, langCode }) => {
  const l = lang.footer.cta;

  return (
    <div className={css['cta']}>
      <h2>{l.title}</h2>

      <CtaLink linkTo={l.cta.linkTo} text={l.cta.title} blank={l.cta.blank} />
    </div>
  );
};

export default Cta;
