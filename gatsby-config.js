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
    title: 'Remigiusz Wasiak Blog | programista Front-End',
    description:
      'Poruszam tu tematy dotyczące React, TypeScript, GraphQL, Gatsby. Zapraszam, Remigiusz Wasiak.',
    image: '/',
    siteUrl,
    siteLanguage: 'pl-PL',
    siteLocale: 'pl_PL',
    twitterUsername: '@er_wasiak',
    authorName: 'Remigiusz Wasiak',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
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
              maxWidth: 590,
            },
          },
        ],
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
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
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: false,
      },
    },
    {
      resolve: `gatsby-plugin-ts`,
      options: {
        fileName: `gen/graphql-types.ts`,
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
            host: 'https://www.remigiuszwasiak.pl',
            sitemap: 'https://www.remigiuszwasiak.pl/sitemap.xml',
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
  ],
};
