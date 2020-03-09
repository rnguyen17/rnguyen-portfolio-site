import * as React from 'react';
import styled from 'styled-components';
import { colors } from 'utils/colors';
import { SectionHeader } from '../../components/SectionHeader';
import { SkillsCardsContainer } from './SkillsCardsContainer';

const AboutWrapper = styled.section`
  position: relative;
  padding: 60px 0 0;
  width: 100%;

  &:after {
    content: '';
    z-index: -1;
    position: absolute;
    top: 0;
    width: 100vw;
    height: 26.5rem;
    background: ${colors.LIGHT_GREEN};
  }
`;

const AboutContainer = styled.div`
  margin: 0 auto;
  max-width: 1200px;
`;

const AboutInfo = styled.span`
  display: block;
  font-size: 1.5rem;
  line-height: 2.2rem;
  font-style: italic;
  color: ${colors.GRAY};
  max-width: 900px;
`;

export const About = () => {
  return (
    <AboutWrapper id="about">
      <AboutContainer>
        <SectionHeader>Hi, I'm Richard Nguyen</SectionHeader>
        <AboutInfo>
          I am a full-stack software engineer based out of Austin, TX. With over 5 years of
          experience developing enterprise-level applications, I work tirelessly to deliver
          beautiful user interfaces to consumers and businesses alike.
        </AboutInfo>
        <SkillsCardsContainer />
      </AboutContainer>
    </AboutWrapper>
  );
};
