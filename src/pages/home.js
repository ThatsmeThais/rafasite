import React from 'react';
import PagesDefault from '../components/PagesDefault';
import BannerMain from '../components/BannerMain';
import AmostraFotos from '../components/AmostraFoto';
import AmostraTextos from '../components/AmostraTextos';
function Home() {
  return (
    <PagesDefault paddingAll={0}>
        <BannerMain></BannerMain>
        <AmostraFotos></AmostraFotos>
        <AmostraTextos></AmostraTextos>
    </PagesDefault>
  );
}

export default Home;
