import * as React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { Header } from 'modules/Header/Header';
import { About } from 'modules/About/About';
import { ExperienceSection } from 'modules/ExperienceSection/ExperienceSection';
import { PortfolioSection } from 'modules/PortfolioSection/PortfolioSection';
import { Masthead } from 'modules/Masthead/Masthead';
import { Layout } from 'modules/Layout/Layout';
import { createGlobalStyle } from 'styled-components';
import { debounce, throttle } from 'utils/dom-event-utils';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Pacifico|Raleway:400,600|Source+Sans+Pro:400,600&display=swap');

  * {
    box-sizing: border-box;
  }
  
  body, html {
    margin: 0;
    padding: 0;
    width: 100%;
    font-family: 'Source Sans Pro';
    font-family: 'Raleway';
    font-size: 16px;
  }

  ul, li {
    list-style: none;
    margin: 0;
  }

  a {
    display: inline-block;
    text-decoration: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.1;
    margin: 0;
  }

  h1 {
    font-size: 60px;
  }

  h2 {
    font-size: 32px;
  }
`;

const ContentWrapper = styled.main`
  /* grid-area: content; */
  overflow: auto;
`;

const Content: React.FC = ({ children }) => {
  console.log('re-rendered');

  return <ContentWrapper>{children}</ContentWrapper>;
};

interface DataShape {
  data: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
}

const App = ({ data }: DataShape) => {
  // React.useEffect(() => {
  //   const func = () => {
  //     console.log(window.scrollY);
  //     setScrollTop(window.scrollY);
  //   };
  //   window.addEventListener('scroll', throttle(func));

  //   return () => {
  //     window.removeEventListener('scroll', func);
  //   };
  // });

  // React.useEffect(() => {
  //   window.setInterval(() => {
  //     setScrollTop(scrollTop + 1);
  //   }, 1000);
  // });

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Header />
        <Content>
          <Masthead />
          <About />
          <ExperienceSection />
          <PortfolioSection />
        </Content>
      </Layout>
    </>
  );
};

export const data = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default App;
