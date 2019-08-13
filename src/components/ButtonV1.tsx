import * as React from 'react';
import styled, { css } from 'styled-components';
import { colors } from 'utils/colors';

interface ButtonV1Props {
  variant?: 'PRIMARY' | 'SECONDARY' | 'GHOST';
  onClick?: () => void;
}

const ButtonStyles = {
  PRIMARY: css`
    color: ${colors.WHITE};
    background: ${colors.PRIMARY};

    &:hover {
      background: ${colors.DARK_PURPLE};
    }
  `,
  SECONDARY: css`
    color: ${colors.WHITE};
    background: ${colors.SECONDARY};

    &:hover {
      background: ${colors.TERTIARY};
    }
  `,
  GHOST: css`
    background: transparent;
    color: ${colors.WHITE};
    border: 2px solid ${colors.WHITE};

    &:hover {
      border-color: ${colors.SECONDARY};
      color: ${colors.SECONDARY};
      /* color: ${colors.WHITE};
      background: ${colors.SECONDARY}; */
    }
  `,
};

const ButtonWrapper = styled.button<ButtonV1Props>`
  height: 50px;
  width: 250px;
  border: none;
  border-radius: 25px;
  font-size: 18px;
  font-family: 'Raleway';
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s ease-out;

  &:hover {
    transition: all 0.15s ease-out;
  }

  ${({ variant = 'PRIMARY' }) => ButtonStyles[variant]};
`;

export const ButtonV1: React.FC<ButtonV1Props> = ({ variant = 'PRIMARY', children, onClick }) => (
  <ButtonWrapper variant={variant} onClick={onClick}>
    {children}
  </ButtonWrapper>
);
