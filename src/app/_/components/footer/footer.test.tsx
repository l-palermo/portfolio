import React from 'react';
import { render, screen } from '@testing-library/react';

import { Footer } from './footer';
import { entryCollectionMock } from '../../test-resources/contentful-mocks';

describe('Footer', () => {
  it('renders the footer with the given title', () => {
    render(<Footer title="Test Title" section={[]} />);
    expect(screen.getByRole('contentinfo')).toHaveTextContent('Test Title');
  });

  it('renders the footer with the given sections', () => {
    render(<Footer title="Test Title" section={entryCollectionMock} />);
    expect(screen.getByText('Section 1')).toBeVisible();
    expect(screen.getByText('Section 2')).toBeVisible();
  });

  it('applies the correct CSS classes', () => {
    const { container } = render(<Footer title="Test Title" section={[]} />);
    expect(container.firstChild).toHaveClass('footer');
  });
});
