import styled from 'styled-components';
import { Coronavirus } from '@styled-icons/material-outlined/Coronavirus';

import { Container, root } from './../../globalStyles';

export const CovidStatisticsContainer = styled(Container)`
  margin: 20rem 0 10rem;
  padding: 5rem;
  border: 1px dashed ${root.borderColor};
`;

export const CovidStatisticsDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CovidStatisticsHeader = styled.h2`
  font-size: 3rem;
  font-weight: 600;
  color: ${root.oddColor};
  text-align: center;
  margin-bottom: 1rem;
`;

export const CovidStatisticsDescription = styled.p`
  font-size: 1.6rem;
  width: 70%;
  text-align: center;
`;

export const CovidStatisticsUpdateContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3rem;
  margin-top: 5rem;
`;

export const ActiveCovidCasesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TotalActiveCases = styled.h3`
  margin: 2rem 0 1rem;
  font-size: 3rem;
`;

export const TotalActiveCaseDescription = styled.p`
  font-size: 1.4rem;
  font-weight: 600;
  color: #0c7b93;
`;

export const DeadCovidCasesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TotalDeathCases = styled.h3`
  margin: 2rem 0 1rem;
  font-size: 3rem;
`;

export const TotalDeathCaseDescription = styled.p`
  font-size: 1.4rem;
  font-weight: 600;
  color: #bb3b0e;
`;

export const RecoveredCovidCasesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TotalRecoveredCases = styled.h3`
  margin: 2rem 0 1rem;
  font-size: 3rem;
`;

export const TotalRecoveryCaseDescription = styled.p`
  font-size: 1.4rem;
  font-weight: 600;
  color: #00bd56;
`;

export const CoronavirusIcon = styled(Coronavirus)`
  width: 4rem;
  color: ${root.oddColor};
`;

export const CovidStatisticsFooter = styled.p`
  font-size: 1.6rem;
  font-weight: 600;
  color: ${root.opaqueOddColor};
  text-align: center;
  margin-top: 5rem;
`;
