const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`);

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve('./src/templates/BlogPost.tsx');

  return graphql(`
    {
      allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { published: { eq: true } } }
      ) {
        nodes {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors;
    }

    const posts = result.data.allMdx.nodes;

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1];
      const next = index === 0 ? null : posts[index - 1];

      createPage({
        path: post.fields.slug,
        component: blogPostTemplate,
        context: {
          slug: post.fields.slug,
          previous,
          next,
        },
      });
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'Mdx') {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: 'slug',
      node,
      value,
    });
  }
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type SiteSiteMetadata {
      title: String!
      description: String!
      image: String!
      siteUrl: String!
      siteLanguage: String!
      siteLocale: String!
      twitterUsername: String!
      githubUsername: String!
      linkedinUsername: String!
      authorName: String!
    }

    type BlogPostFields {
      slug: String!
    }

    type BlogPostFrontmatter {
      title: String!
    }

    type BlogPost {
      fields: BlogPostFields!
      frontmatter: BlogPostFrontmatter!
    }

    type BlogPostPageContext {
      slug: String!
      previous: BlogPost
      next: BlogPost
    }
  `;
  createTypes(typeDefs);
};
