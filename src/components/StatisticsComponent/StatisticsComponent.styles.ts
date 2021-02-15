import styled from 'styled-components';
import { World } from '@styled-icons/boxicons-regular/World';

import { root } from './../../globalStyles';

interface IStatisticsProps {
  totalCase: Boolean;
  todayCase: Boolean;
  totalRecovered: Boolean;
  todayRecovered: Boolean;
  totalDeath: Boolean;
  todayDeath: Boolean;
  activeCase: Boolean;
  criticalCase: Boolean;
  lastUpdated: Boolean;
}

export const StatisticsContainer = styled.div`
  width: 400px;
  border: 1px dashed ${root.borderColor};
  padding: 1rem;

  @media screen and (max-width: 500px) {
    width: 350px;
  }

  @media screen and (max-width: 400px) {
    width: 270px;
  }

  @media screen and (max-width: 300px) {
    width: 240px;
  }
`;

export const CasesHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  @media screen and (max-width: 420px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const LocationOfCaseContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LocationOfCaseImage = styled.img`
  width: 3rem;
  height: 3rem;
  object-fit: contain;
  margin-right: 0.5rem;
`;

export const WorldIcon = styled(World)`
  width: 3rem;
  margin-right: 0.5rem;
  color: #533e2d;
`;

export const LocationOfCaseName = styled.p`
  font-size: 1.6rem;
  font-weight: 600;
  color: ${root.opaqueOddColor};
`;

export const LastUpdatedContainer = styled.div`
  @media screen and (max-width: 420px) {
    margin-top: 1rem;
  }
`;

export const LastUpdated = styled.p`
  font-size: 1.6rem;
`;

export const CasesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;

  @media screen and (max-width: 450px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const CaseWrapper = styled.div`
  background: ${root.secondaryLightBgColor};
  padding: 1rem;
`;

export const CaseDescription = styled.p<IStatisticsProps | any>`
  font-size: 1.3rem;
  font-weight: 600;
  color: ${({
    totalCase,
    todayCase,
    totalRecovered,
    todayRecovered,
    totalDeath,
    todayDeath,
    activeCase,
    criticalCase,
    lastUpdated,
  }) =>
    lastUpdated
      ? root.opaqueOddColor
      : totalCase
      ? '#0c7b93'
      : todayCase
      ? '#bb3b0e'
      : totalRecovered
      ? '#00bd56'
      : todayRecovered
      ? '#00bd56'
      : totalDeath
      ? '#bb3b0e'
      : todayDeath
      ? '#bb3b0e'
      : activeCase
      ? '#bb3b0e'
      : criticalCase
      ? '#bb3b0e'
      : root.opaqueOddColor};
`;

export const TotalCases = styled.p``;

export const TodayCase = styled.p``;

export const TotalRecoveredCases = styled.p``;

export const TodayRecoveredCases = styled.p``;

export const TotalDeathCases = styled.p``;

export const TodayDeathCases = styled.p``;

export const ActiveCases = styled.p``;

export const CriticalCases = styled.p``;
