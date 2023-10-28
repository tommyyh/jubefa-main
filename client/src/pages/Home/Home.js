import React, { useEffect, useState } from 'react';
import 'assets/scss/reset.scss';
import { useSelector } from 'react-redux';
import Navbar from 'components/Navbar/Navbar';
import Landing from './components/Landing';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const lang = useSelector((state) => state.lang.value.lang.payload);
  const langCode = useSelector((state) => state.lang.value.langCode.payload);

  useEffect(() => {
    if (lang) {
      setLoading(false);
    }
  }, [lang]);

  // if (loading) return <Loading />;
  if (loading) return <h1>LOADING...</h1>;

  return (
    <>
      <Navbar lang={lang} langCode={langCode} />
      <Landing lang={lang} langCode={langCode} />
    </>
  );
};

export default Home;
