import React from 'react';

import {
  SymptomsContainer,
  SymptomsHeaderContainer,
  SymptomsHeader,
  SymptomsHeaderDescription,
  SymptomsBodyContainer,
  SymptomsCard,
  SymptomsCardImage,
  SymptomsCardBody,
  SymptomsCardTitle,
  SymptomsCardText,
} from './Symptoms.styles';

import SymptomsCoughImage from './../../assets/symptom_cough.png';
import SymptomsHeadacheImage from './../../assets/symptom_headache.png';
import SymptomsFeverImage from './../../assets/symptom_high-fever.png';
import SymptomsSoreThroatImage from './../../assets/symptom_sore-troath.png';

const Symptoms = () => {
  return (
    <SymptomsContainer>
      <SymptomsHeaderContainer>
        <SymptomsHeader>Symptoms of Coronavirus</SymptomsHeader>
        <SymptomsHeaderDescription>
          COVID-19 affects different people in different ways. Most infected
          people will develop mild to moderate illness and recover without
          hospitalization.
        </SymptomsHeaderDescription>
      </SymptomsHeaderContainer>

      <SymptomsBodyContainer>
        <SymptomsCard>
          <SymptomsCardImage
            draggable={false}
            src={SymptomsCoughImage}
            alt='cough'
          />
          <SymptomsCardBody>
            <SymptomsCardTitle>Cough</SymptomsCardTitle>
            <SymptomsCardText>
              A dry cough is a common early symptom of coronavirus infection.
              Once a person has contracted coronavirus, it can take 2–14 days
              for symptoms to appear
            </SymptomsCardText>
          </SymptomsCardBody>
        </SymptomsCard>

        <SymptomsCard>
          <SymptomsCardImage
            draggable={false}
            src={SymptomsHeadacheImage}
            alt='headache'
          />
          <SymptomsCardBody>
            <SymptomsCardTitle>Headache</SymptomsCardTitle>
            <SymptomsCardText>
              In some patients, the severe headache of COVID-19 only lasts a few
              days, while in others, it can last up to months. It is presenting
              mostly as a whole-head, severe-pressure pain.
            </SymptomsCardText>
          </SymptomsCardBody>
        </SymptomsCard>

        <SymptomsCard>
          <SymptomsCardImage
            draggable={false}
            src={SymptomsFeverImage}
            alt='fever'
          />
          <SymptomsCardBody>
            <SymptomsCardTitle>High Fever</SymptomsCardTitle>
            <SymptomsCardText>
              A low-grade fever that gradually increases in temperature; chills,
              fatigue.
            </SymptomsCardText>
          </SymptomsCardBody>
        </SymptomsCard>

        <SymptomsCard>
          <SymptomsCardImage
            draggable={false}
            src={SymptomsSoreThroatImage}
            alt='sore-throat'
          />
          <SymptomsCardBody>
            <SymptomsCardTitle>Sore Throat</SymptomsCardTitle>
            <SymptomsCardText>
              A sore throat is a potential symptom of COVID-19. But it's less
              common than other symptoms.
            </SymptomsCardText>
          </SymptomsCardBody>
        </SymptomsCard>
      </SymptomsBodyContainer>
    </SymptomsContainer>
  );
};

export default Symptoms;
