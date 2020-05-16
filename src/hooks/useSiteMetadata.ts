import { graphql, useStaticQuery } from 'gatsby';
import { SiteMetaDataQuery } from '../../gen/graphql-types';

const useSiteMetadata = () => {
  const { site } = useStaticQuery<SiteMetaDataQuery>(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            description
            image
            siteUrl
            siteLanguage
            siteLocale
            twitterUsername
            authorName
          }
        }
      }
    `,
  );

  if (!site?.siteMetadata) {
    throw new Error('site meta data is not completed in gatsby-config.js file');
  }

  return site.siteMetadata;
};

export default useSiteMetadata;
