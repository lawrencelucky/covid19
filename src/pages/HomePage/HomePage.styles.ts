import styled from 'styled-components';

import { Container, root } from './../../globalStyles';

export const HomePageContainer = styled(Container)`
  padding: 15rem 2.5rem;

  @media screen and (max-width: 650px) {
    padding: 15rem 2.5rem 5rem;
  }

  @media screen and (max-width: 400px) {
    padding: 12rem 1rem 5rem;
  }
`;

export const BannerSection = styled.section`
  display: flex;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const BannerDescriptionContainer = styled.div`
  flex: 0.5;

  @media screen and (max-width: 1034px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
  }
`;

export const BannerDescriptionCaption = styled.h4`
  font-size: 1.4rem;
  margin-bottom: 1rem;
  color: ${root.opaqueOddColor};

  @media screen and (max-width: 370px) {
    font-size: 1.2rem;
  }
`;

export const BannerDescriptionHeader = styled.h2`
  font-size: 3rem;
  font-weight: 600;
  margin-bottom: 3rem;
  color: ${root.oddColor};

  @media screen and (max-width: 370px) {
    font-size: 2.4rem;
  }

  @media screen and (max-width: 340px) {
    font-size: 2rem;
  }
`;

export const BannerDescriptionBody = styled.p`
  width: 80%;

  @media screen and (max-width: 1024px) {
    text-align: center;
  }

  @media screen and (max-width: 500px) {
    width: 90%;
  }

  @media screen and (max-width: 370px) {
    font-size: 1.6rem;
  }
`;

export const BannerButton = styled.button`
  margin-top: 4rem;
  padding: 1rem 3rem;
  background-color: transparent;
  border: 1px dashed ${root.secondaryBgColor};
  color: ${root.primaryTextColor};
  font-size: 1.6rem;
  cursor: pointer;
  position: relative;
  transition: color 0.5s linear;

  @media screen and (max-width: 370px) {
    font-size: 1.4rem;
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

export const BannerImageContainer = styled.div`
  flex: 0.5;

  @media screen and (max-width: 1024px) {
    display: flex;
    justify-content: center;
  }
`;

export const BannerImage = styled.img`
  width: 100%;

  @media screen and (max-width: 1024px) {
    width: 75%;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;
