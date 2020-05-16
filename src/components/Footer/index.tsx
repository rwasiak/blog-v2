import * as React from 'react';
import styled, { ThemeContext } from '../../design-system';
import { Flex } from '../Grid';
import Link from '../Link';
import Typography from '../Typography';
import useSiteMetaData from '../../hooks/useSiteMetadata';
import Github from '../../images/footer/github.svg';
import LinkedIn from '../../images/footer/linkedin.svg';
import Twitter from '../../images/footer/twitter.svg';

const FooterContainer = styled(Flex).attrs(() => ({
  as: 'footer',
}))``;

const GithubIcon = styled(Github)`
  fill: ${({ theme }) => theme.colors.secondary};

  &:hover {
    fill: ${({ theme }) => theme.colors.highlightInteractive};
  }
`;

const LinkedInIcon = styled(LinkedIn)`
  fill: ${({ theme }) => theme.colors.secondary};

  &:hover {
    fill: ${({ theme }) => theme.colors.highlightInteractive};
  }
`;

const TwitterIcon = styled(Twitter)`
  fill: ${({ theme }) => theme.colors.secondary};

  &:hover {
    fill: ${({ theme }) => theme.colors.highlightInteractive};
  }
`;

const Credits = styled.div`
  text-align: center;
`;

const Footer: React.FC = () => {
  const {
    twitterUsername,
    githubUsername,
    linkedinUsername,
  } = useSiteMetaData();
  const theme = React.useContext(ThemeContext);

  return (
    <FooterContainer alignItems="center" flexDirection="column">
      <Flex width={110} justifyContent="space-between" mb={2}>
        <a href={`//twitter.com/${twitterUsername}`}>
          <TwitterIcon fill={theme.colors.secondary} width={28} height={28} />
        </a>
        <a href={`//www.linkedin.com/in/${linkedinUsername}/`}>
          <LinkedInIcon fill={theme.colors.secondary} width={28} height={28} />
        </a>
        <a href={`//github.com/${githubUsername}`}>
          <GithubIcon width={28} height={28} />
        </a>
      </Flex>
      <Credits>
        <Typography as="span" color="white" typography="textS" mr={2}>
          © {new Date().getFullYear()}, Built with
        </Typography>
        <Link href="https://www.gatsbyjs.org" typography="textS">
          Gatsby
        </Link>
        <Typography as="span" color="white" typography="textS" ml={2}>
          by Remigiusz Wasiak
        </Typography>
      </Credits>
    </FooterContainer>
  );
};

export default Footer;
