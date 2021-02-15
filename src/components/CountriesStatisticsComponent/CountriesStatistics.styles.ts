import styled from 'styled-components';
import { Search } from '@styled-icons/feather/Search';

import { root } from './../../globalStyles';

export const CountriesStatisticsContainer = styled.div`
  display: grid;
  place-items: center;
`;

export const StatisticsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  position: relative;

  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media screen and (max-width: 500px) {
    grid-gap: 0.5rem;
  }
`;

export const StatisticsLoaderContainer = styled.div``;

export const SearchCaseContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 2rem;
  background: ${root.secondaryLightBgColor};
  padding: 1rem;
  width: 100%;
`;

export const SearchInput = styled.input`
  flex: 1;
  border: none;
  background: transparent;
  color: ${root.primaryTextColor};
`;

export const SearchIcon = styled(Search)`
  width: 2rem;
  cursor: pointer;
`;

export const LoadMoreCasesButton = styled.button`
  margin: 2rem;
  padding: 1rem 3rem;
  background-color: transparent;
  border: 1px dashed ${root.secondaryBgColor};
  color: ${root.primaryTextColor};
  font-size: 1.6rem;
  cursor: pointer;
  position: relative;
  transition: color 0.5s linear;

  &:disabled {
    cursor: not-allowed;
  }

  &:hover {
    color: ${root.secondaryTextColor};
  }

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: ${root.oddColor};
    z-index: -1;
    transition: transform 0.5s;
    transform-origin: 0 0;
    transition-timing-function: cubic-bezier(0.5, 1.6, 0.4, 0.7);
    transform: scaleX(0);
  }

  &:hover::before {
    transform: scaleX(1);
  }
`;
