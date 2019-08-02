import * as React from 'react';
import styled from 'styled-components';
import { colors } from 'utils/colors';

const MastheadWrapper = styled.div`
  padding: 100px 0;
  width: 100%;
  background: ${colors.DARK};
`;

const TitleWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 60px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 5px;
  max-width: 600px;
  margin: 0 auto;
  color: ${colors.WHITE};
  color: ${colors.SECONDARY};
`;

const SubTitle = styled.p`
  font-size: 32px;
  text-align: center;
  color: ${colors.WHITE};
`;

const FormInput = styled.input`
  width: 300px;
  height: 50px;
  padding: 10px;
  border-radius: 4px;
  background: ${colors.WHITE};
  font-size: 16px;
  border: none;
`;

const SubmitButton = styled.button`
  height: 50px;
  padding: 0 15px;
  background: ${colors.PRIMARY};
  color: ${colors.WHITE};
  margin-left: 5px;
  border-radius: 4px;
  border: none;
  font-size: 16px;
`;

const StyledForm = styled.div`
  display: flex;
  justify-content: center;
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

export const Masthead = () => {
  return (
    <MastheadWrapper>
      <TitleWrapper>
        <Title>Your search for a UI Engineer is over.</Title>
        <SubTitle>Hi I&apos;m Richard. I&apos;m a full-stack software engineer</SubTitle>
        <StyledForm>
          {/* <FormInput placeholder="Enter your email address..." /> */}
          {/* <SubmitButton>Contact Me</SubmitButton> */}
          <Text>View My Portfolio</Text>
        </StyledForm>
      </TitleWrapper>
    </MastheadWrapper>
  );
};
