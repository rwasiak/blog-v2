import * as React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { DesignSystemProvider, Normalize } from './design-system';
import components from './design-system/MDXhtmlTagsComponents';
import PlainTheme from './themes/plain';

if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line
  const whyDidYouRender = require('@welldone-software/why-did-you-render/dist/no-classes-transpile/umd/whyDidYouRender.min.js');
  whyDidYouRender(React);
}

const WrapPageElement = ({ element }: { element: React.ReactNode }) => (
  <DesignSystemProvider theme={PlainTheme}>
    <MDXProvider components={components}>
      <Normalize />
      {element}
    </MDXProvider>
  </DesignSystemProvider>
);

export default WrapPageElement;
