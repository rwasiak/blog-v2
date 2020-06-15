import * as React from 'react';
import { Components } from '@mdx-js/react';
import Code from '../components/Code';
import styled, { color } from '.';
import Typography from '../components/Typography';
import Link, { InternalLink } from '../components/Link';

const Blockquote = styled(Typography)`
  & p {
    font-size: inherit;
    line-height: inherit;
    font-family: inherit;
    font-weight: inherit;
    font-style: inherit;
    text-transform: inherit;
    color: inherit;
  }
`;

const InlineCode = styled(Typography).attrs(() => ({
  bg: 'secondary',
  p: 1,
}))`
  ${color}
  border-radius: 3px;
`;

interface LinkProps {
  href?: string;
  children: React.ReactNode;
}

const components: Components = {
  h1: ({ children }) => (
    <Typography as="h2" typography="headingL">
      {children}
    </Typography>
  ),
  h2: ({ children }) => (
    <Typography as="h2" typography="headingL">
      {children}
    </Typography>
  ),
  h3: ({ children }) => (
    <Typography as="h3" typography="heading">
      {children}
    </Typography>
  ),
  h4: ({ children }) => (
    <Typography as="h4" typography="headingS">
      {children}
    </Typography>
  ),
  h5: ({ children }) => (
    <Typography as="h5" typography="textLStrong">
      {children}
    </Typography>
  ),
  h6: ({ children }) => (
    <Typography as="h6" typography="textStrong">
      {children}
    </Typography>
  ),
  p: ({ children }) => (
    <Typography as="p" typography="text">
      {children}
    </Typography>
  ),
  a: ({ href, children }: LinkProps) => {
    if (href && href.startsWith('../')) {
      return (
        <InternalLink to={href} typography="text">
          {children}
        </InternalLink>
      );
    }
    if (href) {
      return (
        <Link href={href} typography="text">
          {children}
        </Link>
      );
    }

    return (
      <InternalLink to="/" typography="text">
        {children}
      </InternalLink>
    );
  },
  blockquote: ({ children }) => (
    <Blockquote as="blockquote" typography="quote" py={3}>
      {children}
    </Blockquote>
  ),
  inlineCode: ({ children }) => (
    <InlineCode typography="textStrong" as="code">
      {children}
    </InlineCode>
  ),
  pre: ({ children: { props } }: any) => {
    const { mdxType, children, className } = props;
    if (mdxType === 'code') {
      return (
        <Code
          codeString={children.trim()}
          language={className && className.replace('language-', '')}
          {...props}
        />
      );
    }

    return null;
  },
};

export default components;
