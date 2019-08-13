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
  height: 100%;
  width: 100%;
  background: ${colors.DARK};
`;

const TitleWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 60px;
  font-weight: 600;
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  color: ${colors.WHITE};
  color: ${colors.SECONDARY};
`;

const Divider = styled.hr`
  width: 200px;
  height: 2px;
  margin: 20px auto;
  background: #fff;
`;

const SubTitle = styled.p`
  font-size: 24px;
  line-height: 32px;
  font-style: italic;
  max-width: 700px;
  margin: 30px auto 60px;
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

const Text = styled.h2`
  border: 2px solid ${colors.WHITE};
  border-radius: 4px;
  font-size: 18px;
  color: ${colors.WHITE};
  padding: 0 15px;
  line-height: 50px;
  font-weight: 400;

  &:hover {
    border-color: ${colors.PRIMARY};
    background: ${colors.PRIMARY};
    transition: all 0.15s ease-out;
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
  margin: 30px auto 0;

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
        <Divider />
        <SubTitle>
          Whether you're a scaling business or a solo contractor, Whatever you need, I'll build it.
        </SubTitle>
        <StyledForm>
          <ButtonV1 variant="GHOST">Schedule a call</ButtonV1>
          <ButtonV1 variant="PRIMARY">Download my resume</ButtonV1>
        </StyledForm>
        <StyledNavLink href="#about">
          More about me <CircleGuy>&gt;</CircleGuy>
        </StyledNavLink>
      </TitleWrapper>
    </MastheadWrapper>
  );
};
