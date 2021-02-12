import React from 'react';

import {
  HowToPreventContainer,
  HowToPreventCardsContainer,
  CardsLeftContainer,
  PreventionCard,
  PreventionCardBody,
  PreventionCardTitle,
  PreventionCardText,
  PreventionCardHead,
  HomeIcon,
  MaskIcon,
  CardsRightContainer,
  SocialDistanceIcon,
  HandsWashIcon,
  HowToPreventDescriptionContainer,
  HowToPreventHeader,
  HowToPreventText,
  HowToPreventMenu,
  HowToPreventMenuItem,
} from './HowToPrevent.styles';

const HowToPrevent = () => {
  return (
    <HowToPreventContainer>
      <HowToPreventCardsContainer>
        <CardsLeftContainer>
          <PreventionCard>
            <PreventionCardHead>
              <HomeIcon />
            </PreventionCardHead>

            <PreventionCardBody>
              <PreventionCardTitle>Stay at Home</PreventionCardTitle>
              <PreventionCardText>
                Stay home and self-isolate even if you have minor symptoms such
                as cough, headache, mild fever, until you recover.
              </PreventionCardText>
            </PreventionCardBody>
          </PreventionCard>

          <PreventionCard>
            <PreventionCardHead>
              <MaskIcon />
            </PreventionCardHead>

            <PreventionCardBody>
              <PreventionCardTitle>Wear a Mask</PreventionCardTitle>
              <PreventionCardText>
                Masks are a simple barrier to help prevent your respiratory
                droplets from reaching others and vice-versa.
              </PreventionCardText>
            </PreventionCardBody>
          </PreventionCard>
        </CardsLeftContainer>
        <CardsRightContainer>
          <PreventionCard>
            <PreventionCardHead>
              <SocialDistanceIcon />
            </PreventionCardHead>

            <PreventionCardBody>
              <PreventionCardTitle>Social Distancing</PreventionCardTitle>
              <PreventionCardText>
                When you do go out in public, leave at least 6 feet of space
                between you and others.
              </PreventionCardText>
            </PreventionCardBody>
          </PreventionCard>

          <PreventionCard>
            <PreventionCardHead>
              <HandsWashIcon />
            </PreventionCardHead>

            <PreventionCardBody>
              <PreventionCardTitle>Wash your hands</PreventionCardTitle>
              <PreventionCardText>
                Wash your hands well and often. Try not to touch your face.
              </PreventionCardText>
            </PreventionCardBody>
          </PreventionCard>
        </CardsRightContainer>
      </HowToPreventCardsContainer>

      <HowToPreventDescriptionContainer>
        <HowToPreventHeader>How to Prevent Coronavirus?</HowToPreventHeader>
        <HowToPreventText>
          Cover your mouth and nose with your bent elbow or tissue when you
          cough or sneeze. Then dispose of the used tissue immediately into a
          closed bin and wash your hands. By following good 'respiratory
          hygiene', you protect the people around you from viruses, which cause
          colds, flu and COVID-19.
        </HowToPreventText>
        <HowToPreventMenu>
          <HowToPreventMenuItem>
            Don’t touch your eyes, nose or mouth.
          </HowToPreventMenuItem>
          <HowToPreventMenuItem>
            Wear a mask when physical distancing is not possible
          </HowToPreventMenuItem>
          <HowToPreventMenuItem>
            Stay home if you feel unwell.
          </HowToPreventMenuItem>
          <HowToPreventMenuItem>
            If you have a fever, cough and difficulty breathing, seek medical
            attention.
          </HowToPreventMenuItem>
          <HowToPreventMenuItem>
            Clean your hands often. Use soap and water, or an alcohol-based hand
            rub.
          </HowToPreventMenuItem>
          <HowToPreventMenuItem>
            Maintain a safe distance from anyone who is coughing or sneezing.
          </HowToPreventMenuItem>
        </HowToPreventMenu>
      </HowToPreventDescriptionContainer>
    </HowToPreventContainer>
  );
};

export default HowToPrevent;
