import styled from 'styled-components';

import { Container, root } from './../../globalStyles';

export const StatisticsPageContainer = styled(Container)`
  padding: 10rem 2.5rem;
  display: flex;
`;

export const CountriesContainer = styled.div`
  flex: 0.7;
  border: 1px dashed ${root.opaqueOddColor};
  display: grid;
  place-items: center;
  padding: 1rem;
  margin-right: 1rem;
  height: 80vh;
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
`;

export const WorldwideContainer = styled.div`
  flex: 0.3;
`;
