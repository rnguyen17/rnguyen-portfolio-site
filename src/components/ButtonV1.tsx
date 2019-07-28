import * as React from 'react';
import styled, { css } from 'styled-components';
import { colors } from 'utils/colors';

interface ButtonV1Props {
  variant?: 'PRIMARY' | 'SECONDARY';
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
};

const ButtonWrapper = styled.button<ButtonV1Props>`
  height: 40px;
  padding: 0 15px;
  border: none;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    transition: all 0.15s ease-out;
  }

  ${({ variant = 'PRIMARY' }) => ButtonStyles[variant]};
`;

export const ButtonV1: React.FC<ButtonV1Props> = ({ variant = 'PRIMARY', children }) => (
  <ButtonWrapper variant={variant}>{children}</ButtonWrapper>
);
