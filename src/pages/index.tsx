import * as React from 'react';
import { graphql } from 'gatsby';
import { Header } from 'components/Header';

interface DataShape {
  data: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
}

const App = ({ data }: DataShape) => (
  <React.Fragment>
    <Header title="This is a title" />
    <div>Hello Frontend Masters! This is my title: {data.site.siteMetadata.title}</div>
  </React.Fragment>
);

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
