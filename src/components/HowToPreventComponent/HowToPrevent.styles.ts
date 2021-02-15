import styled from 'styled-components';
import { Home } from '@styled-icons/ionicons-sharp/Home';
import { HeadSideMask } from '@styled-icons/fa-solid/HeadSideMask';
import { SocialDistance } from '@styled-icons/material-sharp/SocialDistance';
import { HandsWash } from '@styled-icons/fa-solid/HandsWash';

import { Container, root } from './../../globalStyles';

export const HowToPreventContainer = styled(Container)`
  padding: 10rem 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 8rem;

  @media screen and (max-width: 1280px) {
    display: flex;
    flex-direction: column-reverse;
  }

  @media screen and (max-width: 650px) {
    padding: 5rem 0;
  }
`;

export const HowToPreventCardsContainer = styled.div`
  position: relative;

  @media screen and (max-width: 1280px) {
    display: flex;
    justify-content: center;
  }

  @media screen and (max-width: 650px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const CardsLeftContainer = styled.div`
  display: grid;
  grid-gap: 1.5rem;
  position: absolute;
  top: 5rem;

  @media screen and (max-width: 1280px) {
    position: relative;
    margin-right: 1.5rem;
  }

  @media screen and (max-width: 650px) {
    top: 0;
    margin-right: 0;
    margin-bottom: 1.5rem;
  }
`;

export const PreventionCard = styled.div`
  border: 1px dashed ${root.borderColor};
  width: 300px;

  @media screen and (max-width: 350px) {
    width: 250px;
  }
`;

export const PreventionCardHead = styled.div`
  display: grid;
  place-items: center;
  height: 200px;
  background: ${root.secondaryLightBgColor};

  @media screen and (max-width: 500px) {
    height: 150px;
  }
`;

export const HomeIcon = styled(Home)`
  width: 7rem;
  color: ${root.oddColor};

  @media screen and (max-width: 500px) {
    width: 5rem;
  }
`;

export const PreventionCardBody = styled.div`
  padding: 3rem;

  @media screen and (max-width: 350px) {
    padding: 2rem;
  }
`;

export const PreventionCardTitle = styled.h3`
  font-size: 2rem;
  color: ${root.oddColor};
  margin-bottom: 2rem;
`;

export const PreventionCardText = styled.p`
  font-size: 1.6rem;

  @media screen and (max-width: 500px) {
    font-size: 1.4rem;
  }
`;

export const MaskIcon = styled(HeadSideMask)`
  width: 7rem;
  color: ${root.oddColor};

  @media screen and (max-width: 500px) {
    width: 5rem;
  }
`;

export const CardsRightContainer = styled.div`
  display: grid;
  grid-gap: 1.5rem;
  position: absolute;
  left: 53%;

  @media screen and (max-width: 1280px) {
    position: relative;
    left: 0;
  }
`;

export const SocialDistanceIcon = styled(SocialDistance)`
  width: 7rem;
  color: ${root.oddColor};

  @media screen and (max-width: 500px) {
    width: 5rem;
  }
`;

export const HandsWashIcon = styled(HandsWash)`
  width: 7rem;
  color: ${root.oddColor};

  @media screen and (max-width: 400px) {
    width: 5rem;
  }
`;

export const HowToPreventDescriptionContainer = styled.div`
  @media screen and (max-width: 1280px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (max-width: 650px) {
    align-items: flex-start;
  }
`;

export const HowToPreventHeader = styled.h2`
  font-size: 3rem;
  font-weight: 600;
  color: ${root.oddColor};
  margin-bottom: 5rem;

  @media screen and (max-width: 520px) {
    font-size: 2.6rem;
  }

  @media screen and (max-width: 460px) {
    font-size: 2.4rem;
  }

  @media screen and (max-width: 400px) {
    margin-bottom: 2rem;
  }

  @media screen and (max-width: 350px) {
    font-size: 2rem;
  }
`;

export const HowToPreventText = styled.p`
  letter-spacing: 0.5px;

  @media screen and (max-width: 1280px) {
    width: 75%;
    text-align: center;
  }

  @media screen and (max-width: 650px) {
    text-align: left;
    width: 100%;
  }

  @media screen and (max-width: 460px) {
    font-size: 1.6rem;
  }
`;

export const HowToPreventMenu = styled.ul`
  margin-top: 5rem;
`;

export const HowToPreventMenuItem = styled.li`
  margin-left: 2rem;
  font-size: 1.6rem;
  list-style: none;
  letter-spacing: 0.5px;
  position: relative;

  @media screen and (max-width: 400px) {
    font-size: 1.4rem;
  }

  &:not(:last-child) {
    margin-bottom: 2rem;
  }

  &::before {
    content: '';
    position: absolute;
    width: 1rem;
    height: 1rem;
    left: -4%;
    top: 25%;
    background: ${root.opaqueOddColor};

    @media screen and (max-width: 400px) {
      left: -6%;
    }
  }
`;
