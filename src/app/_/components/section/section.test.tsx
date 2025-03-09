import React from 'react';
import { render, screen } from '@testing-library/react';

import { Section, SectionProps } from './section';
import { entryCollectionMock } from '../../test-resources/contentful-mocks';

const mockSectionProps: SectionProps = {
  title: 'Example Section Title',
  htmlRole: 'span',
  type: 'vertical',
  fields: entryCollectionMock,
};

describe('Section Component', () => {
  it('renders the section title correctly', () => {
    render(<Section {...mockSectionProps} />);

    expect(screen.getByText('Example Section Title')).toBeVisible();
  });

  it('renders the section content correctly', () => {
    render(<Section {...mockSectionProps} />);

    expect(screen.getByText('Section 1')).toBeVisible();
  });

  it('applies the correct CSS classes', () => {
    const { container } = render(<Section {...mockSectionProps} />);

    expect(container.firstChild).toHaveClass('section');
  });

  it('applies the correct role attribute', () => {
    render(<Section {...mockSectionProps} htmlRole="ul" />);

    expect(screen.getByRole('list')).toBeVisible();
    expect(screen.getAllByRole('listitem')).toHaveLength(2);
  });
});
