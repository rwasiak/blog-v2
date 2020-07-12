import React from 'react';
import 'jest-styled-components';
import { render, axe, theme } from 'customRender';
import Link from '../Link';

const linkText = 'Link example';

describe('Link Component', () => {
  it('can render content', () => {
    const { getByText } = render(
      <Link typography="text" href="//google.com">
        {linkText}
      </Link>,
    );

    getByText(linkText);
  });

  it('can render link with text decoration', () => {
    const { getByText } = render(
      <Link textDecoration="underline" typography="text" href="//google.com">
        {linkText}
      </Link>,
    );

    expect(getByText(linkText)).toHaveStyleRule('text-decoration', 'underline');
  });

  it('can render active link', () => {
    const { getByText } = render(
      <Link active typography="text" href="//google.com">
        {linkText}
      </Link>,
    );

    expect(getByText(linkText)).toHaveStyleRule(
      'color',
      `${theme.link.activeStyles.color}`,
    );
  });

  it('pass a11y checks', async () => {
    const { container } = render(
      <Link typography="text" href="//google.com">
        {linkText}
      </Link>,
    );

    expect(await axe(container.innerHTML)).toHaveNoViolations();
  });
});
