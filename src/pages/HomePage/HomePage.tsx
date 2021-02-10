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
            <BannerButton>HOW TO PREVENT</BannerButton>
          </BannerDescriptionContainer>
          <BannerImageContainer>
            <BannerImage src={CovidImage} alt='Covid-Image' />
          </BannerImageContainer>
        </BannerSection>
      </HomePageContainer>
    </>
  );
};

export default HomePage;
