import React from 'react';
import { render, axe } from '../../../../jest/customRender';
import Header from '../index';

describe('Header Component', () => {
  it('can render content', () => {
    const { getByText } = render(<Header siteTitle="Test Blog" />);

    getByText('Test Blog');
  });

  it('pass a11y checks', async () => {
    const { container } = render(<Header siteTitle="Test Blog" />);

    expect(await axe(container.innerHTML)).toHaveNoViolations();
  });
});
