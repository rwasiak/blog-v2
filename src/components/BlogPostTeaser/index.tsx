import * as React from 'react';
import Img from 'gatsby-image';
import styled, { borderRadius } from '../../design-system';
import { InternalLink } from '../Link';
import Typography from '../Typography';
import { Flex, Box } from '../Grid';
import { BlogPostsQuery } from '../../../gen/graphql-types';

export interface BlogPostTeaserProps {
  blogPostData: BlogPostsQuery['allMdx']['nodes'][0];
}

const ImageContainer = styled(Box).attrs(() => ({
  width: '100%',
  borderRadius: [5, null, 7, 10],
  maxWidth: ['100%', null, 350, 470],
  minWidth: ['100%', null, 350, 470],
}))`
  overflow: hidden;
  ${borderRadius}
`;

const TeaserContainer = styled(Flex)`
  transition: 0.2s ease;

  &:hover {
    opacity: 0.7;
    transition: 0.2s ease;
  }
`;

const TeaserContent = styled(Box)``;

const BlogPostTeaser: React.FC<BlogPostTeaserProps> = ({ blogPostData }) => {
  const { fields, frontmatter } = blogPostData;

  if (!frontmatter || !fields || !fields.slug) {
    return null;
  }

  return (
    <InternalLink to={fields.slug} typography="headingL">
      <TeaserContainer
        mb={[6, 7, 9, 120]}
        flexDirection={['column', null, 'row']}
      >
        <ImageContainer>
          <Img
            fluid={frontmatter.cover?.childImageSharp?.fluid}
            alt="Zdjęcie tytułowe"
          />
        </ImageContainer>
        <TeaserContent pl={[0, null, 8, 9]} my={[5, 6, 0]}>
          <Typography typography="heading" mb={5}>
            {frontmatter.title || ''}
          </Typography>
          <Typography typography="text">{frontmatter.teaser}</Typography>
        </TeaserContent>
      </TeaserContainer>
    </InternalLink>
  );
};

export default BlogPostTeaser;
