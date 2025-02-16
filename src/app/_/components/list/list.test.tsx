import React from 'react';
import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';
import { List } from './list';

describe('List Component', () => {
  const mockListProps = {
    children: [<li key="1">Item 1</li>, <li key="2">Item 2</li>],
  };

  it('renders the list with correct number of items', () => {
    render(<List {...mockListProps} />);

    expect(screen.getAllByRole('listitem')).toHaveLength(2);
  });

  it('renders the list items with correct text', () => {
    render(<List {...mockListProps} />);

    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });
});
