import React from 'react';
import css from './cta.module.scss';
import { Link } from 'react-router-dom';
import newWindowSvg from 'assets/icons/new-window.svg';

// Component for unique call to action (green circle with text and underline)
// linkTo = where the link points to (route), blank = if its "true" > opens a new page (eg. link to jubefa...)
const Cta = ({ text, linkTo, blank }) => {
  return (
    <>
      {blank == true ? (
        <Link to={linkTo} className={css['cta']}>
          <div className={css['illustration']}>
            <img src={newWindowSvg} alt='new window' />
          </div>

          <h5>{text}</h5>
        </Link>
      ) : (
        <a href={linkTo} target='_blank' className={css['cta']}>
          <div className={css['illustration']}>
            <img src={newWindowSvg} alt='new window' />
          </div>

          <h5>{text}</h5>
        </a>
      )}
    </>
  );
};

export default Cta;
