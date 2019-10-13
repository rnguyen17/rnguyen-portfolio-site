import styled from 'styled-components';
import { colors } from 'utils/colors';

export const SectionHeader = styled.h2`
  position: relative;
  color: ${colors.DARK};
  font-weight: 600;
  font-size: 32px;

  &:before,
  &:after {
    position: absolute;
    content: '';
    height: 2px;
    width: 9999px;
    background: ${colors.DARK};
    top: 50%;
    transform: translateY(-50%);
  }

  &:before {
    right: calc(100% + 15px);
  }
  &:after {
    left: calc(100% + 15px);
  }
`;
