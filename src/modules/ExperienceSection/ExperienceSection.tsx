import * as React from 'react';
import styled from 'styled-components';
import { colors } from 'utils/colors';
import { Speedometer } from 'icons/Speedometer';

const StyledSection = styled.section`
  margin: 0 auto 5rem;
  max-width: 1200px;
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  color: ${colors.SECONDARY};
`;

const SectionDescription = styled.p`
  font-size: 1.4rem;
  color: ${colors.GRAY};
  font-style: italic;
  margin-bottom: 5rem;
`;

const FeaturesGrid = styled.div`
  width: 100%;
  padding-top: 1rem;
`;

const FeatureItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 300px;
  &:not(:first-child) {
    border-top: 1px solid ${colors.DARK};
  }
`;

const FeatureItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 4rem;
  text-align: center;
  width: 33.333333%;
  height: 100%;

  &:not(:last-child) {
    border-right: 1px solid ${colors.DARK};
  }
`;

const StyledLabel = styled.h4`
  font-size: 1.5rem;
  color: ${colors.PRIMARY};
`;

const StyledDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.8rem;
  color: ${colors.GRAY};
`;

export const ExperienceSection = () => {
  return (
    <StyledSection id="experience">
      <SectionTitle>Whatever you need, I'll build it</SectionTitle>
      <SectionDescription>
        Here are some of the features that ALL of my projects are gauranteed to have
      </SectionDescription>
      <FeaturesGrid>
        <FeatureItemContainer>
          <FeatureItem>
            <Speedometer size={100} color={colors.PRIMARY} />
            <StyledLabel>Fast</StyledLabel>
            <StyledDescription>
              Don't let load times get between you and your users. Let performance be a priority
            </StyledDescription>
          </FeatureItem>
          <FeatureItem>
            <Speedometer size={100} color={colors.PRIMARY} />
            <StyledLabel>Fast</StyledLabel>
            <StyledDescription>
              Don't let load times get between you and your users. Let performance be a priority
            </StyledDescription>
          </FeatureItem>
          <FeatureItem>
            <Speedometer size={100} color={colors.PRIMARY} />
            <StyledLabel>Fast</StyledLabel>
            <StyledDescription>
              Don't let load times get between you and your users. Let performance be a priority
            </StyledDescription>
          </FeatureItem>
        </FeatureItemContainer>
        <FeatureItemContainer>
          <FeatureItem>
            <Speedometer size={100} color={colors.PRIMARY} />
            <StyledLabel>Fast</StyledLabel>
            <StyledDescription>
              Don't let load times get between you and your users. Let performance be a priority
            </StyledDescription>
          </FeatureItem>
          <FeatureItem>
            <Speedometer size={100} color={colors.PRIMARY} />
            <StyledLabel>Fast</StyledLabel>
            <StyledDescription>
              Don't let load times get between you and your users. Let performance be a priority
            </StyledDescription>
          </FeatureItem>
          <FeatureItem>
            <Speedometer size={100} color={colors.PRIMARY} />
            <StyledLabel>Fast</StyledLabel>
            <StyledDescription>
              Don't let load times get between you and your users. Let performance be a priority
            </StyledDescription>
          </FeatureItem>
        </FeatureItemContainer>
      </FeaturesGrid>
    </StyledSection>
  );
};
