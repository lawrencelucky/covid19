import React, { lazy, Suspense } from 'react';

import {
  StatisticsPageContainer,
  CountriesContainer,
  WorldwideContainer,
} from './Statistics.styles';

const WorldwideStatistics = lazy(
  () =>
    import(
      '../../components/WorldwideStatisticsComponent/WorldwideStatistics.component'
    )
);

const CountriesStatistics = lazy(
  () =>
    import(
      './../../components/CountriesStatisticsComponent/CountriesStatistics.component'
    )
);

const StatisticsPage = () => {
  return (
    <StatisticsPageContainer>
      <CountriesContainer>
        <Suspense fallback={<div>loading...</div>}>
          <CountriesStatistics />
        </Suspense>
      </CountriesContainer>
      <WorldwideContainer>
        <Suspense fallback={<div>loading...</div>}>
          <WorldwideStatistics />
        </Suspense>
      </WorldwideContainer>
    </StatisticsPageContainer>
  );
};

export default StatisticsPage;
