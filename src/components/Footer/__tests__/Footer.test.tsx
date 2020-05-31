import React from 'react';
import { render, axe } from '../../../../jest/customRender';
import Footer from '../index';

describe('Footer Component', () => {
  it('can render content', () => {
    const { getByText, getByTestId } = render(<Footer />);

    getByTestId('footer__twitter');
    getByTestId('footer__linkedin');
    getByTestId('footer__github');
    getByText('by Remigiusz Wasiak');
  });

  it('pass a11y checks', async () => {
    const { container } = render(<Footer />);

    expect(await axe(container.innerHTML)).toHaveNoViolations();
  });
});
