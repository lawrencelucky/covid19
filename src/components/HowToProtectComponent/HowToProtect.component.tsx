import React from 'react';

import {
  HowToProtectContainer,
  HowToProtectHeaderContainer,
  HowToProtectCaption,
  HowToProtectHeader,
  HowToProtectBodyContainer,
  HowToProtectGuideLines,
  ShouldDoMenu,
  ShouldDoMenuHeader,
  ShouldDoMenuItem,
  ShouldNotDoMenu,
  ShouldNotDoMenuHeader,
  ShouldNotDoMenuItem,
  HowToProtectImageContainer,
  HowToProtectImage,
} from './HowToProtect.styles';

import WashHandsImage from './../../assets/wash_hands.svg';

const HowToProtect = () => {
  return (
    <HowToProtectContainer>
      <HowToProtectHeaderContainer>
        <HowToProtectCaption>What you need to do...</HowToProtectCaption>
        <HowToProtectHeader>How To Protect Yourself</HowToProtectHeader>
      </HowToProtectHeaderContainer>

      <HowToProtectBodyContainer>
        <HowToProtectGuideLines>
          <ShouldDoMenu>
            <ShouldDoMenuHeader>You should do</ShouldDoMenuHeader>
            <ShouldDoMenuItem>Stay at home</ShouldDoMenuItem>
            <ShouldDoMenuItem>Wear mask</ShouldDoMenuItem>
            <ShouldDoMenuItem>Use Sanitizer</ShouldDoMenuItem>
            <ShouldDoMenuItem>Disinfect your home</ShouldDoMenuItem>
            <ShouldDoMenuItem>Wash your hands</ShouldDoMenuItem>
            <ShouldDoMenuItem>Frequent self-isolation</ShouldDoMenuItem>
          </ShouldDoMenu>
          <ShouldNotDoMenu>
            <ShouldNotDoMenuHeader>You should avoid</ShouldNotDoMenuHeader>
            <ShouldNotDoMenuItem>Avoid infected people</ShouldNotDoMenuItem>
            <ShouldNotDoMenuItem>Avoid animals</ShouldNotDoMenuItem>
            <ShouldNotDoMenuItem>Avoid handshaking</ShouldNotDoMenuItem>
            <ShouldNotDoMenuItem>Aviod infected surfaces</ShouldNotDoMenuItem>
            <ShouldNotDoMenuItem>Don't touch your face</ShouldNotDoMenuItem>
            <ShouldNotDoMenuItem>Avoid droplets</ShouldNotDoMenuItem>
          </ShouldNotDoMenu>
        </HowToProtectGuideLines>
        <HowToProtectImageContainer>
          <HowToProtectImage
            draggable={false}
            src={WashHandsImage}
            alt='wash-your-hands'
          />
        </HowToProtectImageContainer>
      </HowToProtectBodyContainer>
    </HowToProtectContainer>
  );
};

export default HowToProtect;
