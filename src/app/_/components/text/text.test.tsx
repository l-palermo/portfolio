import React from 'react';
import { render, screen } from '@testing-library/react';

import { Text } from './text';

describe('Text Component', () => {
  const mockTextProps = {
    content: 'Example Text Content',
    children: 'Example Text Content',
    HTMLTag: 'p' as const,
  };

  it('renders the text content correctly', () => {
    render(<Text {...mockTextProps} />);

    expect(screen.getByText('Example Text Content')).toBeInTheDocument();
  });
});
