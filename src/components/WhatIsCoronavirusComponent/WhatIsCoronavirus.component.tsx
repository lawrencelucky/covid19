import React from 'react';

import {
  WhatIsCoronavirusContainer,
  WhatIsCoronavirusBody,
  WhatIsCoronavirusImageContainer,
  WhatIsCoronavirusImage,
  WhatIsCoronavirusDescriptionContainer,
  WhatIsCoronavirusHeader,
  WhatIsCoronavirusDescription,
  WhatIsCoronavirusFooter,
  StayProtectedContainer,
  ProtectedIcon,
  StayProtectedText,
  PreventDiseaseContainer,
  PreventIcon,
  PreventText,
  BeCautiousContainer,
  CoronavirusIcon,
  BeCautiousText,
} from './WhatIsCoronavirus.styles';

import WhatIsCovidImage from './../../assets/image.jpg';

const WhatIsCoronavirus = () => {
  return (
    <WhatIsCoronavirusContainer>
      <WhatIsCoronavirusBody>
        <WhatIsCoronavirusImageContainer>
          <WhatIsCoronavirusImage
            draggable={false}
            src={WhatIsCovidImage}
            alt='what-is-covid-image'
          />
        </WhatIsCoronavirusImageContainer>
        <WhatIsCoronavirusDescriptionContainer>
          <WhatIsCoronavirusHeader>
            What is Coronavirus?
          </WhatIsCoronavirusHeader>
          <WhatIsCoronavirusDescription>
            Coronavirus disease 2019 (COVID-19) is an illness caused by a novel
            coronavirus now called severe acute respiratory syndrome coronavirus
            2 (SARS-CoV-2; formerly called 2019-nCoV), which was first
            identified amid an outbreak of respiratory illness cases in Wuhan
            City, Hubei Province, China.
          </WhatIsCoronavirusDescription>
        </WhatIsCoronavirusDescriptionContainer>
      </WhatIsCoronavirusBody>

      <WhatIsCoronavirusFooter>
        <StayProtectedContainer>
          <ProtectedIcon />
          <StayProtectedText>Stay protected.</StayProtectedText>
        </StayProtectedContainer>
        <PreventDiseaseContainer>
          <PreventIcon />
          <PreventText>Take preventive measures.</PreventText>
        </PreventDiseaseContainer>
        <BeCautiousContainer>
          <CoronavirusIcon />
          <BeCautiousText>Be cautious of the symptoms.</BeCautiousText>
        </BeCautiousContainer>
      </WhatIsCoronavirusFooter>
    </WhatIsCoronavirusContainer>
  );
};

export default WhatIsCoronavirus;
