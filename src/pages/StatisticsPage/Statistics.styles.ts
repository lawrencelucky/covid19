import styled from 'styled-components';

import { Container, root } from './../../globalStyles';

export const StatisticsPageContainer = styled(Container)`
  padding: 15rem 2.5rem;
  display: flex;

  @media screen and (max-width: 1300px) {
    flex-direction: column-reverse;
  }

  @media screen and (max-width: 650px) {
    padding: 12rem 1rem 5rem;
  }
`;

export const CountriesContainer = styled.div`
  flex: 0.7;
  border: 1px dashed ${root.opaqueOddColor};
  display: grid;
  place-items: center;
  padding: 1rem;
  margin-right: 1rem;
  max-height: 80vh;
  overflow: hidden;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px ${root.primaryBgColor};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${root.opaqueOddColor};
    border-radius: 50px;
  }

  @media screen and (max-width: 1300px) {
    margin-right: 0;
  }
`;

export const WorldwideContainer = styled.div`
  display: flex;
  flex: 0.3;

  @media screen and (max-width: 1300px) {
    flex: 1;
    justify-content: center;
    margin-bottom: 3rem;
  }
`;
