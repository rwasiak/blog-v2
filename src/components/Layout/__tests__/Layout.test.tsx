import React from 'react';
import 'jest-styled-components';
import { render, theme } from 'customRender';
import Layout from '../index';

describe('Layout Component', () => {
  it('can render main content', () => {
    const { getAllByTestId } = render(<Layout type="mainContent" />);

    getAllByTestId('layout-container').forEach(container => {
      expect(container).toHaveStyleRule(
        'max-width',
        `${theme.maxWidths.mainContent}`,
      );
    });
  });

  it('can render post content', () => {
    const { getAllByTestId } = render(<Layout type="postContent" />);

    getAllByTestId('layout-container').forEach(container => {
      expect(container).toHaveStyleRule(
        'max-width',
        `${theme.maxWidths.postContent}px`,
      );
    });
  });
});
