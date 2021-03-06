import React, { FC } from 'react';

import {
  StatisticsContainer,
  CasesHeader,
  LocationOfCaseContainer,
  LocationOfCaseImage,
  WorldIcon,
  LocationOfCaseName,
  LastUpdatedContainer,
  LastUpdated,
  CasesContainer,
  CaseWrapper,
  CaseDescription,
  TotalCases,
  TodayCase,
  TotalRecoveredCases,
  TodayRecoveredCases,
  TotalDeathCases,
  TodayDeathCases,
  ActiveCases,
  CriticalCases,
} from './StatisticsComponent.styles';

interface IStatistics {
  flag: string;
  location: string;
  totalCases: string;
  todayCase: string;
  totalRecoveredCase: string;
  todayRecoveredCase: string;
  totalDeathCase: string;
  todayDeathCase: string;
  activeCase: string;
  criticalCase: string;
  lastUpdated: string;
}

const Statistics: FC<IStatistics> = ({
  flag,
  location,
  totalCases,
  todayCase,
  totalRecoveredCase,
  todayRecoveredCase,
  totalDeathCase,
  todayDeathCase,
  activeCase,
  criticalCase,
  lastUpdated,
}) => {
  return (
    <StatisticsContainer>
      <CasesHeader>
        <LocationOfCaseContainer>
          {location === 'Worldwide' ? (
            <WorldIcon />
          ) : (
            <LocationOfCaseImage draggable={false} src={flag} alt='flag' />
          )}
          <LocationOfCaseName>- {location}</LocationOfCaseName>
        </LocationOfCaseContainer>

        <LastUpdatedContainer>
          {location !== 'Worldwide' ? (
            ''
          ) : (
            <>
              <LastUpdated>{lastUpdated}</LastUpdated>
              <CaseDescription lastUpdated={true}>Last Updated</CaseDescription>
            </>
          )}
        </LastUpdatedContainer>
      </CasesHeader>

      <CasesContainer>
        <CaseWrapper>
          <TotalCases>{totalCases}</TotalCases>
          <CaseDescription totalCase={true}>Total Cases</CaseDescription>
        </CaseWrapper>
        <CaseWrapper>
          <TodayCase>{todayCase}</TodayCase>
          <CaseDescription todayCase={true}>Today's Case</CaseDescription>
        </CaseWrapper>
        <CaseWrapper>
          <TotalRecoveredCases>{totalRecoveredCase}</TotalRecoveredCases>
          <CaseDescription totalRecovered={true}>
            Total Recovered Cases
          </CaseDescription>
        </CaseWrapper>
        <CaseWrapper>
          <TodayRecoveredCases>{todayRecoveredCase}</TodayRecoveredCases>
          <CaseDescription todayRecovered={true}>
            Today's Recovered Cases
          </CaseDescription>
        </CaseWrapper>
        <CaseWrapper>
          <TotalDeathCases>{totalDeathCase}</TotalDeathCases>
          <CaseDescription totalDeath={true}>Total Death Cases</CaseDescription>
        </CaseWrapper>
        <CaseWrapper>
          <TodayDeathCases>{todayDeathCase}</TodayDeathCases>
          <CaseDescription todayDeath={true}>
            Today's Death Cases
          </CaseDescription>
        </CaseWrapper>
        <CaseWrapper>
          <ActiveCases>{activeCase}</ActiveCases>
          <CaseDescription activeCase={true}>
            Current Active Cases
          </CaseDescription>
        </CaseWrapper>
        <CaseWrapper>
          <CriticalCases>{criticalCase}</CriticalCases>
          <CaseDescription criticalCase={true}>
            Current Critical Cases
          </CaseDescription>
        </CaseWrapper>
      </CasesContainer>
    </StatisticsContainer>
  );
};

export default Statistics;
