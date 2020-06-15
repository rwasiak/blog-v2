import * as React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import SEO from 'react-seo-component';
import Layout from '../components/Layout';
import { Box, Flex } from '../components/Grid';
import Typography from '../components/Typography';
import { InternalLink } from '../components/Link';
import styled from '../design-system';
import useSiteMetadata from '../hooks/useSiteMetadata';
import {
  PostsBySlugQuery as BlogPostData,
  BlogPostPageContext,
} from '../../gen/graphql-types';

export interface BlogPost {
  data: BlogPostData;
  pageContext: BlogPostPageContext;
}

const Navigation = styled(Flex)`
  list-style-type: none;
  padding-inline-start: 0;
  margin-block-start: 0;
  margin-block-end: 0;
`;

const BlogPostPage: React.FC<BlogPost> = ({ data, pageContext }) => {
  if (!data.mdx?.frontmatter) {
    throw new Error('Wrong blog post data query!');
  }

  const { previous, next } = pageContext;

  const { frontmatter, body } = data.mdx;
  const {
    siteUrl,
    siteLanguage,
    siteLocale,
    twitterUsername,
    authorName,
  } = useSiteMetadata();

  const publicationDate = new Date(frontmatter.date).toISOString();
  const imagePublicURL = frontmatter.cover && frontmatter.cover.publicURL;

  return (
    <Layout type="postContent">
      <SEO
        article
        author={authorName}
        title={frontmatter.title}
        description={frontmatter.teaser || ''}
        image={`${siteUrl}${imagePublicURL}`}
        pathname={siteUrl}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={twitterUsername}
        titleTemplate="Remigiusz Wasiak"
        datePublished={publicationDate}
        dateModified={publicationDate}
      />
      <Box mb={7}>
        <Typography as="h2" typography="headingXL">
          {frontmatter.title}
        </Typography>
        <Typography as="p" typography="text">
          {frontmatter.teaser}
        </Typography>
      </Box>
      <hr />
      <Typography typography="text">
        <MDXRenderer>{body}</MDXRenderer>
      </Typography>
      <Navigation
        as="ul"
        flexWrap="wrap"
        justifyContent="space-between"
        py={[6, null, 7]}
      >
        <li>
          {previous && (
            <InternalLink
              to={previous.fields.slug}
              rel="prev"
              typography="textStrong"
            >
              Previous post
            </InternalLink>
          )}
        </li>
        <li>
          {next && (
            <InternalLink
              to={next.fields.slug}
              rel="next"
              typography="textStrong"
            >
              Next post
            </InternalLink>
          )}
        </li>
      </Navigation>
    </Layout>
  );
};

export default BlogPostPage;

export const blogPostQuery = graphql`
  query PostsBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        date(locale: "en", formatString: "LL")
        teaser
        coverTitle
        cover {
          publicURL
        }
      }
    }
  }
`;
