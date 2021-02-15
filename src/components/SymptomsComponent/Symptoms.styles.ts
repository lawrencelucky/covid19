import styled from 'styled-components';

import { Container, root } from './../../globalStyles';

export const SymptomsContainer = styled(Container)`
  padding: 10rem 0 0;

  @media screen and (max-width: 650px) {
    padding: 5rem 0 0;
  }
`;

export const SymptomsHeaderContainer = styled.div`
  display: grid;
  place-items: center;
`;

export const SymptomsHeader = styled.h2`
  color: ${root.oddColor};
  font-size: 3rem;
  font-weight: 600;
  margin-bottom: 1rem;

  @media screen and (max-width: 520px) {
    font-size: 2.4rem;
  }

  @media screen and (max-width: 340px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 300px) {
    font-size: 1.8rem;
  }
`;

export const SymptomsHeaderDescription = styled.p`
  width: 70%;
  text-align: center;
  font-size: 1.6rem;

  @media screen and (max-width: 500px) {
    width: 90%;
  }
`;

export const SymptomsBodyContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 5rem;
  margin-top: 8rem;

  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 2rem;
  }
`;

export const SymptomsCard = styled.div`
  display: flex;
  background: ${root.secondaryLightBgColor};
  padding: 2rem;
  border: 1px dashed ${root.borderColor};

  @media screen and (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const SymptomsCardImage = styled.img`
  width: 100px;
  margin-right: 3rem;
  object-fit: contain;

  @media screen and (max-width: 500px) {
    margin-bottom: 1.5rem;
  }
`;

export const SymptomsCardBody = styled.div``;

export const SymptomsCardTitle = styled.h3`
  font-size: 2.4rem;
  font-weight: 600;
  color: ${root.oddColor};
  margin-bottom: 2rem;

  @media screen and (max-width: 500px) {
    margin-bottom: 1rem;
    font-size: 2rem;
  }
`;

export const SymptomsCardText = styled.p`
  font-size: 1.6rem;

  @media screen and (max-width: 500px) {
    font-size: 1.4rem;
  }
`;
