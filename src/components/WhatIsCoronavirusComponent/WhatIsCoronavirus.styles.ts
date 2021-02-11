import styled from 'styled-components';
import { Security } from '@styled-icons/material';
import { Coronavirus } from '@styled-icons/material-outlined/Coronavirus';
import { HeadSideMask } from '@styled-icons/fa-solid/HeadSideMask';

import { Container, root } from './../../globalStyles';

export const WhatIsCoronavirusContainer = styled(Container)`
  padding: 10rem 0;
`;

export const WhatIsCoronavirusBody = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 8rem;
`;

export const WhatIsCoronavirusImageContainer = styled.div``;

export const WhatIsCoronavirusImage = styled.img`
  width: 100%;
`;

export const WhatIsCoronavirusDescriptionContainer = styled.div``;

export const WhatIsCoronavirusHeader = styled.h2`
  font-size: 3rem;
  font-weight: 600;
  color: ${root.oddColor};
  margin-bottom: 5rem;
`;

export const WhatIsCoronavirusDescription = styled.p`
  letter-spacing: 0.5px;
`;

export const WhatIsCoronavirusFooter = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5rem;
  margin-top: 8rem;
`;

export const StayProtectedContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ProtectedIcon = styled(Security)`
  width: 6rem;
  color: ${root.oddColor};
  margin-right: 1.5rem;
`;

export const StayProtectedText = styled.p`
  color: ${root.opaqueOddColor};
  font-weight: 400;
`;

export const PreventDiseaseContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const PreventIcon = styled(HeadSideMask)`
  width: 6rem;
  color: ${root.oddColor};
  margin-right: 1.5rem;
`;

export const PreventText = styled.p`
  color: ${root.opaqueOddColor};
  font-weight: 400;
`;

export const BeCautiousContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const CoronavirusIcon = styled(Coronavirus)`
  width: 6rem;
  color: ${root.oddColor};
  margin-right: 1.5rem;
`;

export const BeCautiousText = styled.p`
  color: ${root.opaqueOddColor};
  font-weight: 400;
`;
