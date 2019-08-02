import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import { colors } from 'utils/colors';
const imageSvg = require('assets/icons/responsive-design-symbol.svg');
import { SvgResponsiveDesignSymbol } from 'icons/ResponsiveDesignSymbol';
import { Lock } from 'icons/Lock';
import { Speedometer } from 'icons/Speedometer';
import { PencilRulerIcon } from 'icons/PencilRuler';
import { Avatar } from 'modules/Avatar/Avatar';

const AboutWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 0;
  max-width: 1200px;
  margin: 0 auto;
`;

const FlexContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 30px;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const Card = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  opacity: 0;
  animation: ${fadeIn} 0.3s ease-out forwards;
`;

const Heading = styled.h3`
  font-size: 24px;
  color: ${colors.DARK};
`;

const ShowImage = styled.img`
  display: inline-block;
  margin: 0 auto;
  width: 100%;
`;

const StyledText = styled.p`
  font-size: 18px;
  line-height: 26px;
  text-align: center;
  color: #616161;
`;

export const About = () => (
  <AboutWrapper>
    <h2 style={{ color: colors.DARK, fontWeight: 600, fontSize: '40px', marginBottom: '40px' }}>
      Whatever you need, I&apos;ll build it
    </h2>
    <FlexContainer>
      <Card>
        <Speedometer size={120} color={colors.SECONDARY} />
        <Heading>Fast</Heading>
        <StyledText>
          Don't let load times get between users and your content. Speed and performance are a
          priority
        </StyledText>
      </Card>
      <Card>
        <Lock size={120} color={colors.SECONDARY} />
        <Heading>Secure</Heading>
        <StyledText>Security is something users shouldn't have to worry about.</StyledText>
      </Card>
      <Card>
        <SvgResponsiveDesignSymbol size={120} color={colors.SECONDARY} />
        <Heading>Responsive</Heading>
        <StyledText>
          Websites should work anywhere and everywhere. That's right... even you, IE.
        </StyledText>
      </Card>
      <Card>
        <PencilRulerIcon size={120} color={colors.SECONDARY} />
        <Heading>Pixel-Perfect Code</Heading>
        <StyledText>
          You have 7 seconds to make a first impression. Why not make it a good one?
        </StyledText>
      </Card>
    </FlexContainer>
    <Avatar />
  </AboutWrapper>
);
