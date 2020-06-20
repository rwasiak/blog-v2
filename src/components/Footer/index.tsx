import * as React from 'react';
import styled from '../../design-system';
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

const IconWrapper = styled.a`
  && svg {
    fill: ${({ theme }) => theme.colors.secondary};
  }

  &:hover svg {
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

  return (
    <FooterContainer alignItems="center" flexDirection="column">
      <Flex width={110} justifyContent="space-between" mb={2}>
        <IconWrapper
          aria-label="github link"
          href={`//github.com/${githubUsername}`}
          data-testid="footer__github"
        >
          <Github width={28} height={28} />
        </IconWrapper>
        <IconWrapper
          aria-label="linkedin link"
          href={`//www.linkedin.com/in/${linkedinUsername}/`}
          data-testid="footer__linkedin"
        >
          <LinkedIn width={28} height={28} />
        </IconWrapper>
        <IconWrapper
          aria-label="twitter link"
          href={`//twitter.com/${twitterUsername}`}
          data-testid="footer__twitter"
        >
          <Twitter width={28} height={28} />
        </IconWrapper>
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
