import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { FaceImageQuery } from '../../../gen/graphql-types';

const Image = () => {
  const data = useStaticQuery<FaceImageQuery>(graphql`
    query FaceImage {
      placeholderImage: file(relativePath: { eq: "face.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  /* istanbul ignore next */
  if (!data.placeholderImage?.childImageSharp?.fluid) {
    throw new Error('there is no file match face.jpeg');
  }

  return (
    <Img
      fluid={data.placeholderImage?.childImageSharp?.fluid}
      alt="Blog's author Remigiusz Wasiak"
    />
  );
};

export default Image;
