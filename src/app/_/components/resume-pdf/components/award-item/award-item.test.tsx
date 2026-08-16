import { render, screen } from '@testing-library/react';

import { AwardItem } from './award-item';

const defaultProps = {
  award: {
    id: 'recognition',
    title: 'Recognition',
    description: 'Recognised for resolving a critical HTML injection security vulnerability.',
  },
};

describe('AwardItem', () => {
  it('should render the award title', () => {
    render(<AwardItem {...defaultProps} />);
    expect(screen.getByText('Recognition')).toBeVisible();
  });

  it('should render the award description', () => {
    render(<AwardItem {...defaultProps} />);
    expect(
      screen.getByText('Recognised for resolving a critical HTML injection security vulnerability.'),
    ).toBeVisible();
  });

  it('should render a different title', () => {
    render(<AwardItem award={{ ...defaultProps.award, title: 'Best Engineer' }} />);
    expect(screen.getByText('Best Engineer')).toBeVisible();
  });
});
