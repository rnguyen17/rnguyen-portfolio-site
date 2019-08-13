import * as React from 'react';
import styled from 'styled-components';
import { colors } from 'utils/colors';
import { NavLink, ButtonV1, Logo, Modal } from 'components';
import { PrimaryNav } from './components';

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

export const Header = () => {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <PrimaryNav>
          <Logo size={40} color={colors.WHITE} href="#home" />
          <NavLink href="#about">About</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#portfolio">Portfolio</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </PrimaryNav>
        <ButtonV1
          variant="SECONDARY"
          onClick={() => {
            setShowModal(true);
          }}
        >
          Contact Me
        </ButtonV1>
      </HeaderContainer>
      {showModal && (
        <Modal
          onClose={() => {
            setShowModal(false);
          }}
        />
      )}
    </HeaderWrapper>
  );
};
