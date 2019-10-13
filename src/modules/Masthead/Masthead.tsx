import * as React from 'react';
import styled from 'styled-components';
import { colors } from 'utils/colors';
import { ButtonV1 } from 'components/ButtonV1';
import { NavLink } from 'components/NavLink';

const MastheadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  height: 100vh;
  width: 100%;
  background: ${colors.DARK};
  background-image: url('planet-background.jpg');
  background-size: cover;
`;

const TitleWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: rgba(12, 13, 15, 0.85);
`;

const Title = styled.h1`
  font-size: 72px;
  font-weight: 600;
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
  color: ${colors.WHITE};
  color: ${colors.SECONDARY};
`;

const SubTitle = styled.p`
  font-size: 24px;
  line-height: 32px;
  max-width: 700px;
  margin: 24px auto 48px;
  text-align: center;
  color: ${colors.WHITE};
`;

const StyledForm = styled.div`
  display: flex;
  justify-content: center;

  & > *:not(:last-child) {
    margin-right: 15px;
  }
`;

const CircleGuy = styled.span`
  margin-left: 8px;
  display: flex;
  justify-content: center;
  height: 25px;
  width: 25px;
  line-height: 22px;
  text-align: center;
  border: 1px solid #fff;
  border-radius: 50%;
  color: ${colors.WHITE};
  transition: all 0.15s ease-out;
`;

const StyledNavLink = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  margin: 6rem auto 0;

  &::after {
    display: none;
  }

  &:hover {
    ${CircleGuy} {
      transform: rotateZ(90deg);
      border-color: ${colors.SECONDARY};
      color: ${colors.SECONDARY};
    }
  }
`;

export const Masthead = () => {
  return (
    <MastheadWrapper>
      <TitleWrapper>
        <Title>Your search for a UI Engineer is over.</Title>
        <SubTitle>Let&apos;s build something great together.</SubTitle>
        <StyledForm>
          <ButtonV1 variant="PRIMARY">Download my resume</ButtonV1>
          <ButtonV1 variant="GHOST">Schedule a call</ButtonV1>
        </StyledForm>
        <StyledNavLink href="#about">
          More about me <CircleGuy>&gt;</CircleGuy>
        </StyledNavLink>
      </TitleWrapper>
    </MastheadWrapper>
  );
};
