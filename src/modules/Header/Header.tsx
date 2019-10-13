import * as React from 'react';
import styled from 'styled-components';
import { colors } from 'utils/colors';
import { NavLink, ButtonV1, Logo, Modal } from 'components';
import { PrimaryNav } from './components';

const HeaderWrapper = styled.header<{ scrollTop: boolean }>`
  z-index: 1000;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  height: 75px;
  width: 100%;
  background: ${({ scrollTop }) => (!scrollTop ? colors.DARK : 'transparent')};
  transition: background-color 0.15s ease-in-out;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
`;

export const Header = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [scrollTop, setScrollTop] = React.useState(true);

  React.useEffect(() => {
    const func = () => {
      setScrollTop(!window.scrollY);
    };

    const throttledFunc = func;
    window.addEventListener('scroll', throttledFunc);

    return () => {
      window.removeEventListener('scroll', throttledFunc);
    };
  });

  return (
    <HeaderWrapper scrollTop={scrollTop}>
      <HeaderContainer>
        <PrimaryNav>
          <Logo size={40} color={colors.WHITE} href="#home" />
          <NavLink href="#about">About</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#portfolio">Portfolio</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </PrimaryNav>
        {/* <ButtonV1
          variant="SECONDARY"
          onClick={() => {
            setShowModal(true);
          }}
        >
          Contact Me
        </ButtonV1> */}
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
