import 'jest-styled-components';
import 'jest-axe/extend-expect';
import '@testing-library/jest-dom/extend-expect';
import { useStaticQuery } from 'gatsby';

import faceImage from './__fixtures__/faceImage.json';
import useSiteMetaData from './__fixtures__/useSiteMetaData.json';

beforeAll(() => {
  const mockStaticQueriesData = {
    ...faceImage,
    ...useSiteMetaData,
  };

  useStaticQuery.mockImplementation(() => ({ ...mockStaticQueriesData }));
});
