import React from 'react';
import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';
import { PillList } from './pill-list';

describe('PillList Component', () => {
  const mockPillListProps = {
    technologies: ['React', 'TypeScript'],
  };

  it('renders the pill list with correct number of pills', () => {
    render(<PillList {...mockPillListProps} />);

    expect(screen.getAllByRole('listitem')).toHaveLength(2);
  });

  it('renders the pills with correct text', () => {
    render(<PillList {...mockPillListProps} />);

    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
  });
});
