import { render, screen, within } from '@testing-library/react';

import Portfolio from './page';
import config from '../lib/config';

describe('Portfolio', () => {
  it('should render the header, subhaeder, description and an icon hidden to sr', () => {
    render(<Portfolio />);

    expect(screen.getByRole('heading', { level: 1, name: config.headerGroup.header })).toBeVisible();
    expect(screen.getByRole('heading', { level: 2, name: config.headerGroup.subHeader })).toBeVisible();
    expect(screen.getByText(config.headerGroup.description)).toBeVisible();
    expect(screen.getByTestId('header-icon')).toHaveAttribute('aria-hidden', 'true');
  });

  it('should render the footer containing the contacts section and links', () => {
    render(<Portfolio />);

    const footer = screen.getByRole('contentinfo', { name: config.footerAriaLabel });
    const contactDetailsList = within(footer).getByRole('list', { name: config.contacts.ariaLabel });
    const links = within(contactDetailsList).getAllByRole('link');

    expect(links).toHaveLength(config.contacts.items.length);
    links.forEach((link, index) => {
      const { href, ariaLabel } = config.contacts.items[index];
      expect(link).toHaveAttribute('aria-label', ariaLabel);
      expect(link).toHaveAttribute('href', href);
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
      expect(screen.getByTestId(ariaLabel)).toHaveAttribute('aria-hidden', 'true');
    });
  });
});
