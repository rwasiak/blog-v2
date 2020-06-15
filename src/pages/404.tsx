import React from 'react';
import SEO from 'react-seo-component';

import Layout from '../components/Layout';
import Typography from '../components/Typography';
import useSiteMetadata from '../hooks/useSiteMetadata';

const NotFoundPage = () => {
  const {
    description,
    image,
    siteUrl,
    siteLanguage,
    siteLocale,
    twitterUsername,
  } = useSiteMetadata();
  return (
    <Layout type="mainContent">
      <SEO
        title="404: not found"
        description={description}
        image={`${siteUrl}${image}`}
        pathname={siteUrl}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={twitterUsername}
        titleTemplate=""
      />
      <Typography typography="headingXL" as="h2">
        404 - Page not found
      </Typography>
    </Layout>
  );
};

export default NotFoundPage;
