import { MDXProvider, Components } from '@mdx-js/react';
import * as React from 'react';
import Code from './components/Code';

const components: Components = {
  h2: ({ children }) => <h2 style={{ color: 'rebeccapurple' }}>{children}</h2>,
  inlineCode: props => (
    <code style={{ backgroundColor: 'lightgray' }} {...props} />
  ),
  pre: ({ children: { props } }: any) => {
    const { mdxType, children, className } = props;
    if (mdxType === 'code') {
      return (
        <Code
          codeString={children.trim()}
          language={className && className.replace('language-', '')}
          {...props}
        />
      );
    }

    return null;
  },
};

const WrapRootElement = ({ element }: any) => (
  <MDXProvider components={components}>{element}</MDXProvider>
);

export default WrapRootElement;
