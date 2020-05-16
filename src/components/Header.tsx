import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Typography from './Typography';

interface HeaderProps {
  siteTitle?: string;
}

const HeaderWrapper = styled.header`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

const Header: React.FC<HeaderProps> = ({ siteTitle = '' }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <Typography as="h1" typography="headingL">
        <StyledLink to="/">{siteTitle}</StyledLink>
      </Typography>
    </HeaderContainer>
  </HeaderWrapper>
);

export default Header;
