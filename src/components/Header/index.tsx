import { Link } from 'gatsby';
import React from 'react';
import { Flex, Box } from '../Grid';
import styled, { color, minWidth } from '../../design-system';
import Typography from '../Typography';
import FaceImage from './FaceImage';

interface HeaderProps {
  siteTitle: string;
}

const HeaderWrapper = styled.header`
  margin-bottom: 1.45rem;
`;

const StyledLink = styled(Link).attrs(() => ({
  color: 'white',
}))`
  ${color}
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const ImageWrapper = styled(Box).attrs(() => ({
  minWidth: 90,
}))`
  overflow: hidden;
  border-radius: 100%;
  ${minWidth}
`;

const Header: React.FC<HeaderProps> = ({ siteTitle = '' }) => (
  <HeaderWrapper>
    <StyledLink to="/">
      <Flex alignItems="flex-start">
        <ImageWrapper width={[90, null, null, 110]}>
          <FaceImage />
        </ImageWrapper>
        <Flex flexDirection="column" px={[5, 6]}>
          <Typography as="h1" typography="headingL" color="white" my={4}>
            {`${siteTitle} Blog`}
          </Typography>
          <Typography typography="text" color="secondary">
            JAMstack, React, TypeScript, Next.js, GraphQL
          </Typography>
        </Flex>
      </Flex>
    </StyledLink>
  </HeaderWrapper>
);

export default Header;
