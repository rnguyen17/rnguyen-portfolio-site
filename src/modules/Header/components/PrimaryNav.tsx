import styled from 'styled-components';

export const PrimaryNav = styled.nav`
  display: flex;
  align-items: center;

  & > *:not(:last-child) {
    margin-right: 15px;
  }
`;
