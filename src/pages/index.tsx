import * as React from 'react';
import { graphql } from 'gatsby';
import SEO from 'react-seo-component';
import { Box } from '../components/Grid';
import BlogPostTeaser from '../components/BlogPostTeaser';
import Layout from '../components/Layout';
import { BlogPostsQuery } from '../../gen/graphql-types';
import useSiteMetadata from '../hooks/useSiteMetadata';

const BLOG_PUBLISHED_DATE = new Date('09 May 2020 17:24 UTC').toISOString();

export interface HomePage {
  data: BlogPostsQuery;
}

const IndexPage: React.FC<HomePage> = ({ data }) => {
  const { edges: posts } = data.allMdx;
  const {
    authorName,
    description,
    title,
    image,
    siteUrl,
    siteLanguage,
    siteLocale,
    twitterUsername,
  } = useSiteMetadata();

  return (
    <Layout type="mainContent">
      <SEO
        author={authorName}
        title={title}
        description={description}
        image={`${siteUrl}${image}`}
        pathname={siteUrl}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={twitterUsername}
        titleTemplate="JAMstack, React, TypeScript, Next.js, GraphQL"
        datePublished={BLOG_PUBLISHED_DATE}
      />
      <Box pt={[4, 7, 7, 9]}>
        {posts.map(post => (
          <BlogPostTeaser key={post.node.id} blogPostData={post.node} />
        ))}
      </Box>
    </Layout>
  );
};

export default IndexPage;

export const homePageQuery = graphql`
  query BlogPosts {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(locale: "en", formatString: "LL")
            cover {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            coverTitle
            teaser
          }
        }
      }
    }
  }
`;
