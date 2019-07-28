import * as React from 'react';
import styled from 'styled-components';
import { colors } from 'utils/colors';

interface LogoProps {
  height: number;
  color?: string;
}

const LogoWrapper = styled.a`
  position: relative;
  display: flex;
  align-items: center;
`;

const StyledSVG = styled.svg<LogoProps>`
  position: absolute;
  width: ${({ height = 50 }) => height}px;
  height: ${({ height = 50 }) => height}px;
  transform: rotate(54deg);
`;

const StyledCircle = styled.circle<LogoProps>`
  position: relative;
  stroke-dasharray: ${({ height = 50 }) => Math.PI * height}px;
  stroke-dashoffset: ${({ height = 50 }) => Math.PI * height * 0.3}px;
`;

const StyledLink = styled.span<LogoProps>`
  display: block;
  margin-left: ${({ height }) => height / 4}px;
  font-family: 'Pacifico';
  font-size: ${({ height }) => height / 2}px;
  color: ${({ color = colors.DARK }) => color};
`;

export const Logo: React.FC<LogoProps> = ({ height, color = colors.DARK }: LogoProps) => {
  return (
    <LogoWrapper>
      <StyledSVG height={height} viewBox={`0 0 ${height + 4} ${height + 4}`}>
        <StyledCircle
          height={height}
          cx={height / 2 + 2}
          cy={height / 2 + 2}
          r={height / 2}
          fill="transparent"
          stroke={color}
          strokeWidth="4"
        />
      </StyledSVG>
      <StyledLink height={height} color={color}>
        RN
      </StyledLink>
    </LogoWrapper>
  );
};
