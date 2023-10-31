import React, { useState } from 'react';
import css from './nav.module.scss';
import { Link } from 'react-router-dom';
import logoSvg from 'assets/icons/logo.svg';
import Menu from './components/Menu';
import Links from './components/Links';

const Navbar = ({ lang, langCode, isDesktop }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const l = lang.nav;
  const pathname = window.location.pathname.split('/');
  const url = pathname.splice(2, pathname.length).join('/'); // Full url for redirecting back with diff language

  return (
    <div className={css['cont']}>
      <nav className={css['nav']}>
        <Link className={css['title']}>
          <img src={logoSvg} alt='logo' />
          <h2>{l.title}</h2>
        </Link>

        {isDesktop && <Links l={l} langCode={langCode} />}

        {!isDesktop && (
          <>
            <div className={css['menu']} onClick={() => setMenuOpen(true)}>
              <div className={css['line']}></div>
            </div>

            <Menu
              l={l}
              langCode={langCode}
              menuOpen={menuOpen}
              setMenuOpen={setMenuOpen}
            />
          </>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
