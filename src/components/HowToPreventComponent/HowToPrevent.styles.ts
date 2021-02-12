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
`;

export const HowToPreventCardsContainer = styled.div`
  position: relative;
`;

export const CardsLeftContainer = styled.div`
  display: grid;
  grid-gap: 1.5rem;
  position: absolute;
  top: 5rem;
`;

export const PreventionCard = styled.div`
  border: 1px dashed ${root.borderColor};
  width: 300px;
`;

export const PreventionCardHead = styled.div`
  display: grid;
  place-items: center;
  height: 200px;
  background: ${root.secondaryLightBgColor};
`;

export const HomeIcon = styled(Home)`
  width: 7rem;
  color: ${root.oddColor};
`;

export const PreventionCardBody = styled.div`
  padding: 3rem;
`;

export const PreventionCardTitle = styled.h3`
  font-size: 2rem;
  color: ${root.oddColor};
  margin-bottom: 2rem;
`;

export const PreventionCardText = styled.p`
  font-size: 1.6rem;
`;

export const MaskIcon = styled(HeadSideMask)`
  width: 7rem;
  color: ${root.oddColor};
`;

export const CardsRightContainer = styled.div`
  display: grid;
  grid-gap: 1.5rem;
  position: absolute;
  left: 53%;
`;

export const SocialDistanceIcon = styled(SocialDistance)`
  width: 7rem;
  color: ${root.oddColor};
`;

export const HandsWashIcon = styled(HandsWash)`
  width: 7rem;
  color: ${root.oddColor};
`;

export const HowToPreventDescriptionContainer = styled.div``;

export const HowToPreventHeader = styled.h2`
  font-size: 3rem;
  font-weight: 600;
  color: ${root.oddColor};
  margin-bottom: 5rem;
`;

export const HowToPreventText = styled.p`
  letter-spacing: 0.5px;
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

  &:not(:last-child) {
    margin-bottom: 2rem;
  }

  &::before {
    content: '';
    position: absolute;
    width: 1rem;
    height: 1rem;
    left: -4%;
    top: 15%;
    background: ${root.opaqueOddColor};
  }
`;
