import { render, screen, within } from '@testing-library/react';

import { Layout } from '.';
import config from './lib/content';

describe('Layout', () => {
  describe('Header', () => {
    it('should render the header, subhaeder, description and an icon hidden to sr', () => {
      render(
        <Layout>
          <div />
        </Layout>,
      );

      expect(screen.getByRole('heading', { level: 1, name: config.headerGroup.header })).toBeVisible();
      expect(screen.getByTestId('header-separator')).toBeInTheDocument();
      expect(screen.getByRole('heading', { level: 2, name: config.headerGroup.subHeader })).toBeVisible();
      expect(screen.getByText(config.headerGroup.description)).toBeVisible();
      expect(screen.getByRole('link', { name: config.headerGroup.resumeCta })).toHaveAttribute('href', '/resume.pdf');
      expect(screen.getByRole('link', { name: config.headerGroup.resumeCta })).toHaveAttribute('target', '_blank');
    });
  });
  describe('Footer', () => {
    it('should render the footer containing the contacts section and links', () => {
      render(
        <Layout>
          <div />
        </Layout>,
      );

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
});
