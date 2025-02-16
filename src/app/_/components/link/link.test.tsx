import React from 'react';
import { render, screen } from '@testing-library/react';

import { Link } from './link';

describe('Link Component', () => {
  const mockLinkProps = {
    url: 'http://example.com',
    label: 'Example Link',
    icon: {
      fields: {
        file: {
          url: '//example.com/icon.svg',
        },
      },
    },
    iconOnly: false,
    reverse: false,
    isItemList: false,
  };

  it('renders the link with correct href attribute', async () => {
    render(<Link {...mockLinkProps} />);

    expect(await screen.findByRole('link')).toHaveAttribute('href', 'http://example.com');
  });

  it('renders the link with correct label', async () => {
    render(<Link {...mockLinkProps} />);

    expect(await screen.findByText('Example Link')).toBeInTheDocument();
  });
});
