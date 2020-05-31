const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = 'https://www.remigiuszwasiak.pl',
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env;
const isNetlifyProduction = NETLIFY_ENV === 'production';
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;

module.exports = {
  siteMetadata: {
    title: 'Remigiusz Wasiak Blog',
    description:
      'Znajdziesz tu informacje o JAMstack, React, TypeScript, Next.js i GraphQL.',
    image: '/',
    siteUrl,
    siteLanguage: 'pl-PL',
    siteLocale: 'pl_PL',
    twitterUsername: '@er_wasiak',
    githubUsername: 'rwasiak',
    linkedinUsername: 'remigiuszwasiak',
    authorName: 'Remigiusz Wasiak',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/posts`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              destinationDir: 'assets',
              ignoreFileExtensions: [`png`, `jpg`, `jpeg`],
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Remigiusz Wasiak Blog`,
        short_name: `RW Blog`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/rw-icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: process.env.NODE_ENV !== `production`,
        fileName: false,
      },
    },
    {
      resolve: `gatsby-plugin-graphql-codegen`,
      options: {
        fileName: `gen/graphql-types.ts`,
        codegen: false, // enable only for generating types (causes performance issues https://github.com/d4rekanguok/gatsby-typescript/issues/93)
        codegenConfig: {
          maybeValue: 'T | undefined',
        },
      },
    },
    {
      resolve: 'gatsby-plugin-extract-schema',
      options: {
        dest: `${__dirname}/gen/graphql-schema.json`,
      },
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: 'gatsby-plugin-svgr',
      options: {
        icon: true,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: [`/polityka-prywatnosci`],
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            host: 'https://www.rwasiak.com',
            sitemap: 'https://www.rwasiak.com/sitemap.xml',
            policy: [{ userAgent: '*', disallow: '/polityka-prywatnosci' }],
          },
        },
        'branch-deploy': {
          host: null,
          sitemap: null,
          policy: [{ userAgent: '*', disallow: ['/'] }],
        },
        'deploy-preview': {
          host: null,
          sitemap: null,
          policy: [{ userAgent: '*', disallow: ['/'] }],
        },
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
  ],
};
