import * as React from 'react';
import styled from 'styled-components';
import { colors } from 'utils/colors';

interface LogoProps extends React.HTMLAttributes<HTMLAnchorElement> {
  size: number;
  color?: string;
  href?: string;
}

const StyledSvg = styled.svg<LogoProps>`
  position: absolute;
  width: ${({ size = 50 }) => size}px;
  height: ${({ size = 50 }) => size}px;
  transform: rotate(54deg);
`;

const StyledCircle = styled.circle<LogoProps>`
  position: relative;
  stroke-dasharray: ${({ size = 50 }) => Math.PI * size}px;
  stroke-dashoffset: ${({ size = 50 }) => Math.PI * size * 0.3}px;
`;

const LogoLabel = styled.span<LogoProps>`
  display: block;
  margin-left: ${({ size }) => size / 4}px;
  color: ${({ color = colors.DARK }) => color};
  font-family: 'Pacifico';
  font-size: ${({ size }) => size / 2}px;
`;

const LogoWrapper = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    ${LogoLabel},
    ${StyledCircle} {
      color: ${colors.SECONDARY};
      stroke: ${colors.SECONDARY};
      transition: all 0.15s ease-out;
    }
  }
`;

export const Logo: React.FC<LogoProps & React.HTMLAttributes<HTMLAnchorElement>> = ({
  size,
  color = colors.DARK,
  ...props
}: LogoProps) => {
  return (
    <LogoWrapper {...props}>
      <StyledSvg size={size} viewBox={`0 0 ${size + 4} ${size + 4}`}>
        <StyledCircle
          size={size}
          cx={size / 2 + 2}
          cy={size / 2 + 2}
          r={size / 2}
          fill="transparent"
          stroke={color}
          strokeWidth="4"
        />
      </StyledSvg>
      <LogoLabel size={size} color={color}>
        RN
      </LogoLabel>
    </LogoWrapper>
  );
};
