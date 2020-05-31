import React from 'react';
import { render, axe } from '../../../../jest/customRender';
import Code, { defaultProps } from '../index';

const highlightComponentCode = `
(function someDemo() {
  var test = "Hello World!";
  console.log(test);
})();
return () => <App />;
`.trim();

const reactLivetComponentCode = `
  const ColoredText = ({ children, textColor }) => (
    <div style={{ color: textColor || 'red' }}>
      {children}
    </div>
  )
  render(<ColoredText textColor='purple'>Text</ColoredText>);
`;

describe('Code component', () => {
  describe('Highlight Component', () => {
    it('can render content of highlight-component', () => {
      const { getByTestId } = render(
        <Code
          codeString={highlightComponentCode}
          language="jsx"
          {...defaultProps}
        />,
      );

      getByTestId('highlight-component');
    });

    it('pass a11y checks', async () => {
      const { container } = render(
        <Code
          codeString={highlightComponentCode}
          language="jsx"
          {...defaultProps}
        />,
      );

      expect(await axe(container.innerHTML)).toHaveNoViolations();
    });
  });

  describe('ReactLive Component', () => {
    it('can render content of react-live-component', () => {
      const { getByTestId } = render(
        <Code
          codeString={reactLivetComponentCode}
          language="jsx"
          {...defaultProps}
          react-live
        />,
      );

      getByTestId('react-live-component');
    });

    it('pass a11y checks', async () => {
      const { container } = render(
        <Code
          codeString={reactLivetComponentCode}
          language="jsx"
          {...defaultProps}
          react-live
        />,
      );

      expect(await axe(container.innerHTML)).toHaveNoViolations();
    });
  });
});
