import * as React from 'react';
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/layout';
import { PostsBySlugQuery as BlogPostData } from '../../gen/graphql-types';

export interface BlogPost {
  data: BlogPostData;
  pageContext: {
    previous: any;
    next: any;
  };
}

const BlogPostPage: React.FC<BlogPost> = ({ data, pageContext }) => {
  if (!data.mdx?.frontmatter) {
    throw new Error('Wrong blog post data query!');
  }

  const { previous, next } = pageContext;

  const { frontmatter, body } = data.mdx;
  return (
    <Layout>
      <h1>{frontmatter.title}</h1>
      <p>{frontmatter.date}</p>
      <MDXRenderer>{body}</MDXRenderer>
      {previous && (
        <Link to={previous?.fields.slug} rel="prev">
          Previous post
        </Link>
      )}
      {next && (
        <Link to={next?.fields.slug} rel="next">
          Next post
        </Link>
      )}
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
        date(formatString: "DD-MM-YYYY")
      }
    }
  }
`;
