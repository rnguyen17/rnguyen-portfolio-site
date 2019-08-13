import * as React from 'react';
import styled from 'styled-components';
const ProfilePic = require('assets/images/profile_image.jpg');

const AvatarWrapper = styled.section`
  display: flex;
  width: 50%;
`;

const Profile = styled.img`
  display: inline-block;
  width: 100px;
  height: auto;
  border-radius: 50%;
`;

const InfoWrapper = styled.div`
  flex: 1 auto;
  padding: 0 15px;
`;

const Name = styled.h3`
  font-size: 24px;
`;

const Description = styled.p`
  margin-top: 15px;
  font-size: 18px;
  line-height: 26px;
  color: #616161;
`;

export const Avatar = () => (
  <AvatarWrapper>
    <Profile src={ProfilePic} alt="Profile picture" />
    <InfoWrapper>
      <Name>Hi, I'm Richard Nguyen</Name>
      <Description>
        With over 5 years experience as a UI engineer, I work tirelessly and endlessly to deliver
        the best digital experience to consumers and businesses alike
      </Description>
    </InfoWrapper>
  </AvatarWrapper>
);
