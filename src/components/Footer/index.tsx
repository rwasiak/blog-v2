import * as React from 'react';
import styled, { ThemeContext } from '../../design-system';
import { Flex } from '../Grid';
import Link from '../Link';
import Typography from '../Typography';
import useSiteMetaData from '../../hooks/useSiteMetadata';
import { ReactComponent as Github } from '../../images/footer/github.svg';
import { ReactComponent as LinkedIn } from '../../images/footer/linkedin.svg';
import { ReactComponent as Twitter } from '../../images/footer/twitter.svg';

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
        <a
          aria-label="twitter link"
          href={`//twitter.com/${twitterUsername}`}
          data-testid="footer__twitter"
        >
          <TwitterIcon fill={theme.colors.secondary} width={28} height={28} />
        </a>
        <a
          aria-label="linkedin link"
          href={`//www.linkedin.com/in/${linkedinUsername}/`}
          data-testid="footer__linkedin"
        >
          <LinkedInIcon fill={theme.colors.secondary} width={28} height={28} />
        </a>
        <a
          aria-label="github link"
          href={`//github.com/${githubUsername}`}
          data-testid="footer__github"
        >
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
