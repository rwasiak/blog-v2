import * as React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import styled, { borderRadius } from '../../design-system';
import Typography from '../Typography';
import { Flex, Box } from '../Grid';
import { BlogPostsQuery } from '../../../gen/graphql-types';

export interface BlogPostTeaserProps {
  blogPostData: BlogPostsQuery['allMdx']['edges'][0]['node'];
}

const ImageContainer = styled(Box).attrs(() => ({
  width: '100%',
  maxWidth: ['100%', null, 350, 470],
  minWidth: ['100%', null, 350, 470],
}))`
  overflow: hidden;
`;

const TeaserContainer = styled(Flex)`
  transition: 0.2s ease;

  &:hover {
    opacity: 0.7;
    transition: 0.2s ease;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledImg = styled(Img).attrs(() => ({
  borderRadius: [5, null, 7, 10],
}))`
  ${borderRadius}
`;

const BlogPostTeaser: React.FC<BlogPostTeaserProps> = ({ blogPostData }) => {
  const { fields, frontmatter } = blogPostData;

  if (!frontmatter || !fields || !fields.slug) {
    return null;
  }

  return (
    <StyledLink to={fields.slug} role="link" aria-label="blog post link">
      <TeaserContainer
        mb={[6, 7, 9, 120]}
        flexDirection={['column', null, 'row']}
      >
        <ImageContainer>
          {frontmatter.cover && (
            <StyledImg
              fluid={frontmatter.cover.childImageSharp?.fluid}
              alt={frontmatter.coverTitle || ''}
            />
          )}
        </ImageContainer>
        <Box pl={[0, null, 8, 9]} my={[5, 6, 0]}>
          <Typography typography="heading" mb={5}>
            {frontmatter.title || ''}
          </Typography>
          <Typography typography="text" mb={[5, null, 6]}>
            {frontmatter.teaser}
          </Typography>
          <Typography typography="textS">{frontmatter.date}</Typography>
        </Box>
      </TeaserContainer>
    </StyledLink>
  );
};

export default BlogPostTeaser;
