import { render, screen } from '@testing-library/react';

import { SectionTitle } from './section-title';

describe('SectionTitle', () => {
  it('should render the label in uppercase', () => {
    render(<SectionTitle label="Summary" />);
    expect(screen.getByText('SUMMARY')).toBeVisible();
  });

  it('should uppercase a already-uppercase label', () => {
    render(<SectionTitle label="WORK EXPERIENCE" />);
    expect(screen.getByText('WORK EXPERIENCE')).toBeVisible();
  });

  it('should render different labels', () => {
    render(<SectionTitle label="Skills" />);
    expect(screen.getByText('SKILLS')).toBeVisible();
  });
});
