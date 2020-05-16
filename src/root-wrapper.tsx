import * as React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { DesignSystemProvider, Normalize } from './design-system';
import components from './design-system/MDXhtmlTagsComponents';
import PlainTheme from './themes/plain';

const WrapRootElement = ({ element }: any) => (
  <DesignSystemProvider theme={PlainTheme}>
    <MDXProvider components={components}>
      <Normalize />
      {element}
    </MDXProvider>
  </DesignSystemProvider>
);

export default WrapRootElement;
