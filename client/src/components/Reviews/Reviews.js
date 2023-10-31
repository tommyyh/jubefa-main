import React from 'react';
import css from './reviews.module.scss';
import profileImgPng from 'assets/images/home/profileImg.png';
import newWindow2Svg from 'assets/icons/new-window2.svg';

const Reviews = ({ lang, langCode }) => {
  const l = lang.reviews;

  return (
    <div className={css['cont']}>
      <section className={css['reviews']}>
        <div className={css['top']}>
          <h4>{l.sub}</h4>
          <h2>{l.title}</h2>
        </div>

        <div className={css['content']}>
          {Object.keys(l.list).map((item, i) => (
            <Review lang={lang} item={item} langCode={langCode} key={i} />
          ))}
        </div>
      </section>
    </div>
  );
};

const Review = ({ lang, item }) => {
  const l = lang.reviews.list[item];

  return (
    <div className={css['review']}>
      <div>
        <img className={css['profile']} src={profileImgPng} alt='profile' />

        <a
          href='https://www.google.com/search?q=jubefa+gmbh&oq=jubefa+gmbh+&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg8MgYIAhBFGDwyBggDEEUYPNIBCDI1MzNqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8#lrd=0x4709cf176bc98ac3:0x586731f7e651a33e,1,,,,'
          target='_blank'
          className={css['author']}
        >
          <h5>{l.author}</h5>
          <img
            className={css['new-window']}
            src={newWindow2Svg}
            alt='new window'
          />
        </a>

        <div className={css['text']}>
          <p>{l.text}</p>
        </div>
      </div>

      <h6>{l.rating}/5</h6>
    </div>
  );
};

export default Reviews;
