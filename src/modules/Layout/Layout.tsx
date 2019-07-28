import styled from 'styled-components';

export const Layout = styled.main`
  display: grid;
  height: 100vh;
  width: 100%;
  grid-template-rows: 80px auto;
  grid-template-areas:
    'header header'
    'content content';
`;
