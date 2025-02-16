import { render, screen } from '@testing-library/react';

import { Card, CardProps } from './card';

const defaultProps: CardProps = {
  title: 'Default Title',
  description: 'Default Description',
  titleIcon: { fields: { file: { url: '' } } },
  type: 'experience',
  projectGithubLink: {
    fields: { url: '', label: '', icon: { fields: { file: { url: '' } } }, iconOnly: false, reverse: false },
  },
  destinationUrl: '',
  ctaAriaLabel: 'Learn more',
};

describe('Card Component', () => {
  it('should render the card with default props', () => {
    render(<Card {...defaultProps} />);
    expect(screen.getByText('Default Title')).toBeVisible();
    expect(screen.getByText('Default Description')).toBeVisible();
  });

  it('should render the card with a custom title', () => {
    render(<Card {...defaultProps} title="Custom Title" />);
    expect(screen.getByText('Custom Title')).toBeVisible();
  });

  it('should render the card with a custom description', () => {
    render(<Card {...defaultProps} description="Custom Description" />);
    expect(screen.getByText('Custom Description')).toBeVisible();
  });

  it('should render the card with a subtitle', () => {
    render(<Card {...defaultProps} subtitle="Custom Subtitle" />);
    expect(screen.getByText('Custom Subtitle')).toBeVisible();
  });

  it('should render the card with technologies', () => {
    const technologies = ['React', 'TypeScript'];
    render(<Card {...defaultProps} fields={{ fields: { technologies } }} />);
    technologies.forEach((tech) => {
      expect(screen.getByText(tech)).toBeVisible();
    });
  });

  it('should render the card with experience dates', () => {
    render(<Card {...defaultProps} type="experience" startDate="2020-01-01" endDate="2021-01-01" />);
    expect(screen.getByText('01 . 2020')).toBeVisible();
    expect(screen.getByText('01 . 2021')).toBeVisible();
  });

  it('should render the card with a project link', () => {
    render(
      <Card
        {...defaultProps}
        type="project"
        projectGithubLink={{
          fields: { url: 'https://github.com', label: 'GitHub', icon: { fields: { file: { url: '' } } } },
        }}
      />,
    );
    expect(screen.getByRole('link', { name: 'GitHub' })).toBeVisible();
  });
});
