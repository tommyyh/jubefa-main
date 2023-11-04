import React, { useEffect, useState } from 'react';
import 'assets/scss/reset.scss';
import css from './imprint.module.scss';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import Loading from 'components/Loading/Loading';
import Navbar from 'components/Navbar/Navbar';
import Landing from './components/Landing';
import BulletPoints from './components/BulletPoints';
import Paragraph from './components/Paragraph';
import Footer from 'components/Footer/Footer';

const Imprint = () => {
  const [loading, setLoading] = useState(true);
  const lang = useSelector((state) => state.lang.value.lang.payload);
  const langCode = useSelector((state) => state.lang.value.langCode.payload);
  const isDesktop = useMediaQuery({
    query: '(min-width: 1025px)',
  });

  useEffect(() => {
    if (lang) {
      setLoading(false);
    }
  }, [lang]);

  if (loading) return <Loading />;

  return (
    <>
      <Navbar lang={lang} langCode={langCode} isDesktop={isDesktop} />
      <Landing l={lang.imprint} langCode={langCode} />
      <BulletPoints l={lang.imprint.section1} langCode={langCode} />
      <BulletPoints l={lang.imprint.section2} langCode={langCode} />
      <BulletPoints l={lang.imprint.section3} langCode={langCode} />
      <BulletPoints l={lang.imprint.section4} langCode={langCode} />
      <BulletPoints l={lang.imprint.section5} langCode={langCode} link={5} />
      <Paragraph l={lang.imprint.section6} langCode={langCode} link={true} />
      <Paragraph l={lang.imprint.section7} langCode={langCode} />
      <Paragraph l={lang.imprint.section8} langCode={langCode} />
      <Paragraph l={lang.imprint.section9} langCode={langCode} />

      <div className={css['cont']}>
        <div className={css['source-inner']}>
          <h5 className={css['source']}>
            {lang.imprint.source} <span>eRecht24</span>
          </h5>
        </div>
      </div>

      <Footer lang={lang} langCode={langCode} isDesktop={isDesktop} />
    </>
  );
};

export default Imprint;
