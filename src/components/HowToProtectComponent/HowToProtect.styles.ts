import styled from 'styled-components';

import { Container, root } from './../../globalStyles';

export const HowToProtectContainer = styled(Container)`
  padding: 10rem 0;
  margin-top: 20rem;

  @media screen and (max-width: 1280px) {
    margin-top: 0;
  }

  @media screen and (max-width: 650px) {
    padding: 5rem 0;
  }
`;

export const HowToProtectHeaderContainer = styled.div`
  display: grid;
  place-items: center;

  @media screen and (max-width: 330px) {
    place-items: start;
  }
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

  @media screen and (max-width: 520px) {
    font-size: 2.4rem;
  }

  @media screen and (max-width: 340px) {
    font-size: 2rem;
  }
`;

export const HowToProtectBodyContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 8rem;
  margin-top: 8rem;

  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column-reverse;
    gid-gap: 3rem;
  }

  @media screen and (max-width: 400px) {
    margin-top: 3rem;
    grid-gap: 3rem;
  }
`;

export const HowToProtectGuideLines = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 5rem;
  margin-top: 8rem;

  @media screen and (max-width: 1024px) {
    justify-items: center;
    margin-top: 0;
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
    justify-items: start;
  }

  @media screen and (max-width: 400px) {
    grid-gap: 3rem;
  }
`;

export const ShouldDoMenu = styled.ul``;

export const ShouldDoMenuHeader = styled.h3`
  font-size: 2.4rem;
  font-weight: 600;
  margin-bottom: 5rem;

  @media screen and (max-width: 600px) {
    margin-bottom: 2rem;
  }
`;

export const ShouldDoMenuItem = styled.li`
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

  @media screen and (max-width: 600px) {
    margin-bottom: 2rem;
  }
`;

export const ShouldNotDoMenuItem = styled.li`
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
    left: -8%;
    top: 20%;
    background: ${root.opaqueOddColor};
  }
`;

export const HowToProtectImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const HowToProtectImage = styled.img`
  width: 100%;
  height: 500px;

  @media screen and (max-width: 1024px) {
    width: 75%;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;
