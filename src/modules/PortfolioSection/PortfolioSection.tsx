import * as React from 'react';
import styled from 'styled-components';
import { colors } from 'utils/colors';

const StyledSection = styled.section`
  margin: 0 auto 5rem;
  max-width: 1200px;
  padding: 3rem 0;
  display: flex;
  height: 1200px;
`;

const FlexContainer = styled.div`
  width: 45%;
  padding: 2rem;
`;

const FlexContainer2 = styled.div`
  width: 55%;
  padding: 2rem;
`;

const StyledTitle = styled.h2`
  font-size: 3rem;
  color: ${colors.SECONDARY};
  margin-bottom: 2rem;
`;

const StyledUl = styled.ul`
  padding: 0;
`;

const StyledListItem = styled.li`
  padding: 0;
`;

const ListLabel = styled.p`
  font-size: 1.4rem;
  color: ${colors.DARK};
  color: ${colors.DARK};
  font-weight: 700;
  margin: 0;
`;

const ListDescription = styled.p`
  font-size: 1.2rem;
  margin: 0.5rem 0 3rem;
  color: ${colors.GRAY};
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
`;

const GridItem = styled.div`
  width: 100%;
  height: 200px;
  transition: all 0.3s ease-in-out;
  background: ${colors.GRAY};

  &:hover {
    background: ${colors.DARK};
  }
`;

export const PortfolioSection = () => {
  return (
    <StyledSection id="portfolio">
      <FlexContainer>
        <StyledTitle>You're standing in good company</StyledTitle>
        <StyledUl>
          <StyledListItem>
            <ListLabel>Senior UI Engineer - Express Scripts</ListLabel>
            <ListDescription>
              Built software and created teams to scale stuff and do things.
            </ListDescription>
          </StyledListItem>
          <StyledListItem>
            <ListLabel>Senior UI Engineer - Express Scripts</ListLabel>
            <ListDescription>
              Built software and created teams to scale stuff and do things.
            </ListDescription>
          </StyledListItem>
          <StyledListItem>
            <ListLabel>Senior UI Engineer - Express Scripts</ListLabel>
            <ListDescription>
              Built software and created teams to scale stuff and do things.
            </ListDescription>
          </StyledListItem>
          <StyledListItem>
            <ListLabel>Senior UI Engineer - Express Scripts</ListLabel>
            <ListDescription>
              Built software and created teams to scale stuff and do things.
            </ListDescription>
          </StyledListItem>
        </StyledUl>
      </FlexContainer>
      <FlexContainer2>
        <StyledGrid>
          <GridItem />
          <GridItem />
          <GridItem />
          <GridItem />
          <GridItem />
          <GridItem />
        </StyledGrid>
      </FlexContainer2>
    </StyledSection>
  );
};
