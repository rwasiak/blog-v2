import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import useSiteMetadata from '../hooks/useSiteMetadata';
import {
  DesignSystemProvider,
  space,
  SpaceProps,
  Normalize,
} from '../design-system';
import BasicTheme from '../themes/basic';
import Header from './Header';

const FooterContainer = styled.div<SpaceProps>`
  ${space}
  margin: 0 auto;
  padding: 0 1.0875rem 1.45rem;
`;

const Layout: React.FC = ({ children }) => {
  const siteMetadata = useSiteMetadata();

  return (
    <DesignSystemProvider theme={BasicTheme}>
      <Normalize />
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,600;1,300&family=Oswald:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Header siteTitle={siteMetadata && siteMetadata.title} />
      <FooterContainer pt={[0, 3, 5]}>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with{' '}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </FooterContainer>
    </DesignSystemProvider>
  );
};

export default Layout;
