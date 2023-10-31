import React, { useEffect, useState } from 'react';
import 'assets/scss/reset.scss';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import Navbar from 'components/Navbar/Navbar';
import Landing from './components/Landing';
import Wwd from './components/Wwd';
import Services from './components/Services';
import Sell from './components/Sell';
import WhyUs from './components/WhyUs';
import Reviews from 'components/Reviews/Reviews';
import Focus from './components/Focus';
import Footer from 'components/Footer/Footer';

const Home = () => {
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

  // if (loading) return <Loading />;
  if (loading) return <h1>LOADING...</h1>;

  return (
    <>
      <Navbar lang={lang} langCode={langCode} isDesktop={isDesktop} />
      <Landing lang={lang} langCode={langCode} />
      <Wwd lang={lang} langCode={langCode} />
      <Services lang={lang} langCode={langCode} />
      <Sell lang={lang} langCode={langCode} />
      <WhyUs lang={lang} langCode={langCode} />
      <Reviews lang={lang} langCode={langCode} />
      <Focus lang={lang} langCode={langCode} />
      <Footer lang={lang} langCode={langCode} />
    </>
  );
};

export default Home;
