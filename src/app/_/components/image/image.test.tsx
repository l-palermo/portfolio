import React from 'react';
import { render, screen } from '@testing-library/react';

import { Image } from './image';
import { assetMock } from '../../test-resources/contentful-mocks';

describe('Image Component', () => {
  it('renders the image with correct src and alt attributes', () => {
    render(<Image image={assetMock} />);

    expect(screen.getByAltText('Example Image thumbnail')).toHaveAttribute('src', 'http://example.com/image.jpg');
  });

  it('renders the link with correct href attribute', () => {
    render(<Image image={assetMock} />);

    expect(screen.getByRole('link')).toHaveAttribute('href', 'http://example.com/image.jpg');
  });
});
