import React from 'react';
import PagesDefault from '../components/PagesDefault';
import BannerMain from '../components/BannerMain';
import AmostraFotos from '../components/AmostraFoto'

function Home() {
  return (
    <PagesDefault paddingAll={0}>
        <BannerMain></BannerMain>
        <AmostraFotos></AmostraFotos>
    </PagesDefault>
  );
}

export default Home;
