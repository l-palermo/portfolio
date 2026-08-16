import { render, screen } from '@testing-library/react';

import { NameCard } from './name-card';

const defaultProps = {
  info: {
    id: 'personal-info',
    name: 'Luigi Palermo',
    role: 'Senior Software Engineer',
    location: 'London, UK',
    links: [
      { id: 'email', url: 'mailto:test@example.com', label: 'test@example.com' },
      { id: 'phone', url: 'tel:+441234567890', label: '+44 1234567890' },
      { id: 'linkedin', url: 'https://linkedin.com/in/test', label: 'LinkedIn' },
      { id: 'github', url: 'https://github.com/test', label: 'GitHub' },
      { id: 'portfolio', url: 'https://example.com', label: 'Portfolio' },
    ],
  },
};

describe('NameCard', () => {
  it('should render the full name', () => {
    render(<NameCard {...defaultProps} />);
    expect(screen.getByText('Luigi Palermo')).toBeVisible();
  });

  it('should render the role', () => {
    render(<NameCard {...defaultProps} />);
    expect(screen.getByText('Senior Software Engineer')).toBeVisible();
  });

  it('should render all link labels', () => {
    render(<NameCard {...defaultProps} />);
    defaultProps.info.links.forEach(({ label }) => {
      expect(screen.getByText(label)).toBeVisible();
    });
  });

  it('should render links with correct href', () => {
    render(<NameCard {...defaultProps} />);
    const emailLink = screen.getByText('test@example.com').closest('a');
    expect(emailLink).toHaveAttribute('href', 'mailto:test@example.com');
  });

  it('should render svg icons for each link', () => {
    const { container } = render(<NameCard {...defaultProps} />);
    expect(container.querySelectorAll('svg').length).toBe(defaultProps.info.links.length);
  });
});
