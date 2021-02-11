import styled from 'styled-components';

import { Container, root } from './../../globalStyles';

export const HowToProtectContainer = styled(Container)`
  padding: 20rem 0 10rem;
  margin-top: 20rem;
`;

export const HowToProtectHeaderContainer = styled.div`
  display: grid;
  place-items: center;
`;

export const HowToProtectCaption = styled.p`
  color: ${root.opaqueOddColor};
  font-weight: 600;
  font-size: 1.6rem;
  margin-bottom: 1rem;
`;

export const HowToProtectHeader = styled.h2`
  font-size: 3rem;
  font-weight: 600;
  color: ${root.oddColor};
`;

export const HowToProtectBodyContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 8rem;
  margin-top: 8rem;
`;

export const HowToProtectGuideLines = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 5rem;
  margin-top: 8rem;
`;

export const ShouldDoMenu = styled.ul``;

export const ShouldDoMenuHeader = styled.h3`
  font-size: 2.4rem;
  font-weight: 600;
  margin-bottom: 5rem;
`;

export const ShouldDoMenuItem = styled.li`
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
    left: -8%;
    top: 20%;
    background: ${root.opaqueOddColor};
  }
`;

export const ShouldNotDoMenu = styled.ul``;

export const ShouldNotDoMenuHeader = styled.h3`
  font-size: 2.4rem;
  font-weight: 600;
  margin-bottom: 5rem;
`;

export const ShouldNotDoMenuItem = styled.li`
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
    left: -8%;
    top: 20%;
    background: ${root.opaqueOddColor};
  }
`;

export const HowToProtectImageContainer = styled.div``;

export const HowToProtectImage = styled.img`
  width: 100%;
  height: 500px;
`;
