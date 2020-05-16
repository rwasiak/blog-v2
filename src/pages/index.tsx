import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
import SEO from 'react-seo-component';
import Layout from '../components/layout';
import { BlogPostsQuery } from '../../gen/graphql-types';
import useSiteMetadata from '../hooks/useSiteMetadata';

const ImageContainer = styled.div`
  max-width: 300px;
  margin-bottom: 1.45rem;
`;

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
    <Layout>
      <SEO
        title={title}
        description={description}
        image={`${siteUrl}${image}`}
        pathname={siteUrl}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={twitterUsername}
        titleTemplate="titleTemplate"
      />
      {posts.map(post => (
        <div key={post.fields?.slug}>
          {post.frontmatter?.cover && (
            <ImageContainer>
              <Img sizes={post.frontmatter?.cover.childImageSharp?.sizes} />
            </ImageContainer>
          )}
          {post.fields?.slug && (
            <Link to={post.fields?.slug}>{post.frontmatter?.title || ''}</Link>
          )}
        </div>
      ))}
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
              sizes(maxWidth: 2000, traceSVG: { color: "#639" }) {
                ...GatsbyImageSharpSizes_tracedSVG
              }
            }
          }
        }
      }
    }
  }
`;
