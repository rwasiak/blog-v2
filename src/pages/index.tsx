import * as React from 'react';
import { graphql } from 'gatsby';
import SEO from 'react-seo-component';
import { Box } from '../components/Grid';
import BlogPostTeaser from '../components/BlogPostTeaser';
import Layout from '../components/Layout';
import { BlogPostsQuery } from '../../gen/graphql-types';
import useSiteMetadata from '../hooks/useSiteMetadata';

export interface HomePage {
  data: BlogPostsQuery;
}

const IndexPage: React.FC<HomePage> = ({ data }) => {
  const { nodes: posts } = data.allMdx;
  const {
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
        title={title}
        description={description}
        image={`${siteUrl}${image}`}
        pathname={siteUrl}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={twitterUsername}
        titleTemplate="Blog"
      />
      <Box pt={[4, 7, 7, 9]}>
        {posts.map(post => (
          <BlogPostTeaser key={post.id} blogPostData={post} />
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
      nodes {
        id
        excerpt(pruneLength: 250)
        fields {
          slug
        }
        frontmatter {
          title
          date(formatString: "DD MM YYYY")
          cover {
            publicURL
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          teaser
        }
      }
    }
  }
`;
