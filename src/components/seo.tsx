/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import useSiteMetadata from '../hooks/useSiteMetadata';

interface SEOProps {
  description?: string;
  lang?: string;
  meta?: [];
  title: string;
}

const SEO = ({
  description: customDescription = '',
  lang = 'pl',
  meta = [],
  title: customTitle,
}: SEOProps) => {
  const { title, description, authorName } = useSiteMetadata();
  const metaDescription = customDescription || description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={customTitle}
      titleTemplate={`%s | ${title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: customTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: authorName,
        },
        {
          name: `twitter:title`,
          content: customTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  );
};

export default SEO;
