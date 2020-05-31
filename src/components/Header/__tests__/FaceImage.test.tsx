import React from 'react';
import FaceImage from '../FaceImage';
import { render, axe } from '../../../../jest/customRender';

describe('FaceImage Component', () => {
  it('can render content', () => {
    const { getByAltText } = render(<FaceImage />);

    getByAltText('autor bloga Remigiusz Wasiak');
  });

  it('pass a11y checks', async () => {
    const { container } = render(<FaceImage />);

    expect(await axe(container.innerHTML)).toHaveNoViolations();
  });
});
