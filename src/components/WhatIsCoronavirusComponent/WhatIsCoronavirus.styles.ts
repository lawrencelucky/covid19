import styled from 'styled-components';
import { Security } from '@styled-icons/material';
import { Coronavirus } from '@styled-icons/material-outlined/Coronavirus';
import { HeadSideMask } from '@styled-icons/fa-solid/HeadSideMask';

import { Container, root } from './../../globalStyles';

export const WhatIsCoronavirusContainer = styled(Container)`
  padding: 10rem 0;

  @media screen and (max-width: 650px) {
    padding: 5rem 0;
  }

  @media screen and (max-width: 400px) {
    padding: 0;
  }
`;

export const WhatIsCoronavirusBody = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 8rem;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const WhatIsCoronavirusImageContainer = styled.div`
  @media screen and (max-width: 1024px) {
    display: flex;
    justify-content: center;
  }
`;

export const WhatIsCoronavirusImage = styled.img`
  width: 100%;

  @media screen and (max-width: 1024px) {
    width: 75%;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const WhatIsCoronavirusDescriptionContainer = styled.div``;

export const WhatIsCoronavirusHeader = styled.h2`
  font-size: 3rem;
  font-weight: 600;
  color: ${root.oddColor};
  margin-bottom: 5rem;

  @media screen and (max-width: 420px) {
    font-size: 2.4rem;
  }

  @media screen and (max-width: 400px) {
    margin-bottom: 2rem;
  }

  @media screen and (max-width: 340px) {
    font-size: 2rem;
  }
`;

export const WhatIsCoronavirusDescription = styled.p`
  letter-spacing: 0.5px;

  @media screen and (max-width: 420px) {
    font-size: 1.6rem;
  }
`;

export const WhatIsCoronavirusFooter = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5rem;
  margin-top: 8rem;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media screen and (max-width: 400px) {
    margin-top: 3rem;
  }
`;

export const StayProtectedContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ProtectedIcon = styled(Security)`
  width: 6rem;
  color: ${root.oddColor};
  margin-right: 1.5rem;

  @media screen and (max-width: 420px) {
    width: 4rem;
  }
`;

export const StayProtectedText = styled.p`
  color: ${root.opaqueOddColor};
  font-weight: 400;

  @media screen and (max-width: 400px) {
    font-size: 1.6rem;
  }
`;

export const PreventDiseaseContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const PreventIcon = styled(HeadSideMask)`
  width: 6rem;
  color: ${root.oddColor};
  margin-right: 1.5rem;

  @media screen and (max-width: 420px) {
    width: 4rem;
  }
`;

export const PreventText = styled.p`
  color: ${root.opaqueOddColor};
  font-weight: 400;

  @media screen and (max-width: 400px) {
    font-size: 1.6rem;
  }
`;

export const BeCautiousContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const CoronavirusIcon = styled(Coronavirus)`
  width: 6rem;
  color: ${root.oddColor};
  margin-right: 1.5rem;

  @media screen and (max-width: 420px) {
    width: 4rem;
  }
`;

export const BeCautiousText = styled.p`
  color: ${root.opaqueOddColor};
  font-weight: 400;

  @media screen and (max-width: 400px) {
    font-size: 1.6rem;
  }
`;
