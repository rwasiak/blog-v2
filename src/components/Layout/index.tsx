import React from 'react';
import { Helmet } from 'react-helmet';
import styled, {
  space,
  SpaceProps,
  flexGrow,
  FlexGrowProps,
  background,
  Theme,
} from '../../design-system';
import useSiteMetadata from '../../hooks/useSiteMetadata';
import { Flex, Box } from '../Grid';
import Header from '../Header';
import Footer from '../Footer';

export type LayoutType = keyof Theme['maxWidths'];

export interface LayoutProps {
  type: LayoutType;
}

const BackgroundDecoration = styled.section.attrs(({ theme }) => ({
  background: `radial-gradient(circle, ${theme.colors.tertiary} 0%, ${theme.colors.primary} 100%)`,
}))<SpaceProps>`
  ${background}
  ${space}
`;

interface ContainerProps extends FlexGrowProps, LayoutProps {}

interface ContainerAttrs extends LayoutProps {
  theme: Theme;
}

const Container = styled(Box).attrs(({ theme, type }: ContainerAttrs) => ({
  maxWidth: theme.maxWidths[type],
  mx: 'auto',
  px: theme.grid.containerPx,
}))<ContainerProps>`
  ${flexGrow}
`;

const Main = styled(Box).attrs(() => ({
  as: 'main',
}))`
  flex-grow: 1;
`;

const Layout: React.FC<LayoutProps> = ({ children, type }) => {
  const siteMetadata = useSiteMetadata();

  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,600;1,300&family=Open+Sans:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Flex flexDirection="column" height="100vh">
        <BackgroundDecoration py={8}>
          <Container data-testid="layout-container" type={type}>
            <Header siteTitle={siteMetadata && siteMetadata.title} />
          </Container>
        </BackgroundDecoration>
        <Main>
          <Container type={type}>{children}</Container>
        </Main>
        <BackgroundDecoration py={4}>
          <Container type={type} data-testid="layout-container">
            <Footer />
          </Container>
        </BackgroundDecoration>
      </Flex>
    </>
  );
};

export default Layout;
