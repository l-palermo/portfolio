import { render, screen } from '@testing-library/react';

import { LanguageItem } from './language-item';

const defaultProps = {
  lang: { id: 'italian', language: 'Italian', level: 5 },
};

describe('LanguageItem', () => {
  it('should render the language name', () => {
    render(<LanguageItem {...defaultProps} />);
    expect(screen.getByText('Italian')).toBeVisible();
  });

  it('should render a different language name', () => {
    render(<LanguageItem lang={{ ...defaultProps.lang, language: 'English' }} />);
    expect(screen.getByText('English')).toBeVisible();
  });

  it('should render 5 dots', () => {
    const { container } = render(<LanguageItem {...defaultProps} />);
    expect(container.querySelectorAll('div').length).toBeGreaterThanOrEqual(5);
  });
});
