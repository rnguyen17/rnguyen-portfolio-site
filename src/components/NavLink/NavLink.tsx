import * as React from 'react';
import styled from 'styled-components';
import { colors } from 'utils/colors';

export const NavLinkWrapper = styled.a`
  display: block;
  position: relative;
  color: ${colors.WHITE};
  text-decoration: none;
  transition: all 0.15s ease-out;

  &:hover {
    color: ${colors.SECONDARY};
    &::after {
      width: 100%;
    }
  }

  &::after {
    position: absolute;
    content: '';
    left: 0;
    bottom: -5px;
    height: 2px;
    width: 0;
    background: ${colors.SECONDARY};
    transition: all 0.15s ease-out;
  }
`;

interface NavLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}

export const NavLink: React.FC<NavLinkProps> = ({ href, children, ...props }) => {
  const isAnchorLink = href.indexOf('#') === 0;
  let scrollElement: Element;
  const onClickHandler = () => {
    if (isAnchorLink) {
      if (!scrollElement) {
        scrollElement = document.getElementById(href.slice(1));
      }
      event.preventDefault();
      scrollElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <NavLinkWrapper href={href} onClick={onClickHandler} {...props}>
      {children}
    </NavLinkWrapper>
  );
};
