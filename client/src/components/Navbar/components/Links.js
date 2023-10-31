import React, { useState } from 'react';
import css from './links.module.scss';
import { Link } from 'react-router-dom';

const Links = ({ l, langCode }) => {
  const pathname = window.location.pathname.split('/');
  const url = pathname.splice(2, pathname.length).join('/'); // Full url for redirecting back with diff language

  return (
    <>
      <div className={css['middle']}>
        <ul>
          {Object.keys(l.links).map((item, i) => (
            <li key={i}>
              {l.links[item].type === 'new' ? (
                <a href={l.links[item].link} target='_blank'>
                  {l.links[item].title}
                </a>
              ) : (
                <Link to={`/${langCode}/${l.links[item].link}`}>
                  {l.links[item].title}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className={css['aside']}>
        <div className={css['language-options']}>
          {langCode === 'en' ? (
            <a href={`/de/${url}`}>English</a>
          ) : (
            <a href={`/en/${url}`}>German</a>
          )}
        </div>

        <ul>
          <li className={css['sell-cta']}>
            <Link
              target='_blank'
              to={`https://www.jubefa-immobilien.de/de/sell-property`}
            >
              {l.cta}
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Links;
