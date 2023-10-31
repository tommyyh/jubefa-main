import React from 'react';
import css from './footer.module.scss';
import Cta from './Cta';
import { Link } from 'react-router-dom';
import logoSvg from 'assets/icons/logo.svg';
import checkSvg from 'assets/icons/check.svg';

const Footer = ({ lang, langCode, isDesktop }) => {
  const l = lang.footer;

  return (
    <footer className={css['footer']}>
      <Cta lang={lang} langCode={langCode} />

      <div className={css['cont']}>
        <div className={css['main']}>
          <Link className={css['title']}>
            <img src={logoSvg} alt='logo' />
            <h2>{l.title}</h2>
          </Link>

          <div className={css['footer-links']}>
            <ul className={css['links']}>
              {Object.keys(l.links1).map((item, i) => (
                <li key={i}>
                  {l.links1[item].blank == 'true' ? (
                    <a href={l.links1[item].linkTo} target='_blank'>
                      {l.links1[item].title}
                    </a>
                  ) : (
                    <Link to={`/${langCode}/${l.links1[item].linkTo}`}>
                      {l.links1[item].title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            <ul
              className={css['links']}
              style={isDesktop ? { margin: '0' } : { margin: '3rem 0 0 0' }}
            >
              <li>
                <a href={'mailto:kontakt@jubefa.com'}>{l.links2[1]}</a>
              </li>
              <li>
                <a href={'tel:+49+49 351 2750189935127501899'}>{l.links2[2]}</a>
              </li>
            </ul>

            <div className={css['newsletter']}>
              <h5>{l.newsletter.title}</h5>

              <div className={css['input']}>
                <input type='email' placeholder={l.newsletter.input} />
                <button>
                  <img src={checkSvg} alt='check' />
                </button>
              </div>
            </div>
          </div>

          <h6>{l.copyright}</h6>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
