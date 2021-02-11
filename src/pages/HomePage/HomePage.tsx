import React from 'react';

import {
  HomePageContainer,
  BannerSection,
  BannerDescriptionContainer,
  BannerDescriptionCaption,
  BannerDescriptionHeader,
  BannerDescriptionBody,
  BannerButton,
  BannerImageContainer,
  BannerImage,
} from './HomePage.styles';

import CovidImage from './../../assets/covid.svg';

import CovidStatistics from '../../components/CovidStatisticsComponent/CovidStatistics.component';
import WhatIsCoronavirus from './../../components/WhatIsCoronavirusComponent/WhatIsCoronavirus.component';
import HowToPrevent from './../../components/HowToPreventComponent/HowToPrevent.component';
import HowToProtect from './../../components/HowToProtectComponent/HowToProtect.component';
import Symptoms from './../../components/SymptomsComponent/Symptoms.component';

const HomePage: React.FC = () => {
  return (
    <>
      <HomePageContainer>
        <BannerSection>
          <BannerDescriptionContainer>
            <BannerDescriptionCaption>
              COVID-19 AWARENESS
            </BannerDescriptionCaption>
            <BannerDescriptionHeader>
              Stay Safe. Stay Home.
            </BannerDescriptionHeader>
            <BannerDescriptionBody>
              The coronavirus disease 2019 (COVID-19) is a communicable
              respiratory disease caused by a new strain of coronavirus that
              causes illness in humans.
            </BannerDescriptionBody>
            <BannerButton>LEARN MORE</BannerButton>
          </BannerDescriptionContainer>
          <BannerImageContainer>
            <BannerImage draggable={false} src={CovidImage} alt='Covid-Image' />
          </BannerImageContainer>
        </BannerSection>
        <CovidStatistics />
        <WhatIsCoronavirus />
        <HowToPrevent />
        <HowToProtect />
        <Symptoms />
      </HomePageContainer>
    </>
  );
};

export default HomePage;
