import * as React from 'react';
import styled from 'styled-components';
import { colors } from 'utils/colors';
import { ButtonV1, Logo } from 'components';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  grid-area: header;
  background: ${colors.DARK};
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  width: 100%;
  max-width: 1200px;
`;

const LeftNav = styled.nav`
  display: flex;
  align-items: center;

  & > *:first-child {
    margin-right: 25px;
  }

  & > * {
    margin-right: 15px;
  }
`;

const StyledLink = styled.a`
  display: block;
  color: ${colors.WHITE};
  text-decoration: none;
  font-size: 18px;
`;

export const Header = () => (
  <HeaderWrapper>
    <HeaderContainer>
      <LeftNav>
        <Logo height={40} color={colors.WHITE} />
        <StyledLink href="#about">About</StyledLink>
        <StyledLink href="#experience">Experience</StyledLink>
        <StyledLink href="#portfolio">Portfolio</StyledLink>
      </LeftNav>
      <ButtonV1 variant="SECONDARY">Contact Me</ButtonV1>
    </HeaderContainer>
  </HeaderWrapper>
);
