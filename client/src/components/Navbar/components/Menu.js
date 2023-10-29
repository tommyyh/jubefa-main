import React from 'react';
import css from './menu.module.scss';
import { Link } from 'react-router-dom';

const Menu = ({ l, langCode, menuOpen, setMenuOpen }) => {
  const pathname = window.location.pathname.split('/');
  const url = pathname.splice(2, pathname.length).join('/'); // Full url for redirecting back with diff language

  return (
    <div
      className={menuOpen ? `${css['menu']} ${css['menu-open']}` : css['menu']}
    >
      <div className={css['top']}>
        <h4 onClick={() => setMenuOpen(false)}>{l.close}</h4>
      </div>

      <div className={css['main']}>
        <div className={css['links']}>
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
          <ul>
            <li>{l.tel}</li>
            <li className={css['sell-cta']}>
              <Link
                target='_blank'
                to={`https://www.jubefa-immobilien.de/de/sell-property`}
              >
                {l.cta}
              </Link>
            </li>
          </ul>

          <div className={css['language-options']}>
            <a href={`/en/${url}`}>EN</a>
            <a href={`/de/${url}`}>DE</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
