import React from 'react';

import {
  StatisticsPageContainer,
  CountriesContainer,
  WorldwideContainer,
} from './Statistics.styles';

import WorldwideStatistics from '../../components/WorldwideStatisticsComponent/WorldwideStatistics.component';
import CountriesStatistics from './../../components/CountriesStatisticsComponent/CountriesStatistics.component';

const StatisticsPage = () => {
  return (
    <StatisticsPageContainer>
      <CountriesContainer>
        <CountriesStatistics />
      </CountriesContainer>
      <WorldwideContainer>
        <WorldwideStatistics />
      </WorldwideContainer>
    </StatisticsPageContainer>
  );
};

export default StatisticsPage;
