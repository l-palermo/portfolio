import { render, screen, within } from '@testing-library/react';

import Portfolio from './page';
import config from '../lib/config';

describe('Portfolio', () => {
  describe('Header', () => {
    it('should render the header, subhaeder, description and an icon hidden to sr', () => {
      render(<Portfolio />);

      expect(screen.getByRole('heading', { level: 1, name: config.headerGroup.header })).toBeVisible();
      expect(screen.getByRole('heading', { level: 2, name: config.headerGroup.subHeader })).toBeVisible();
      expect(screen.getByText(config.headerGroup.description)).toBeVisible();
      expect(screen.getByTestId('header-separator')).toBeInTheDocument();
    });
  });
  describe('Footer', () => {
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
  describe('Experiences section', () => {
    it('should render the title', () => {
      render(<Portfolio />);

      expect(screen.getByRole('heading', { level: 2, name: config.details.experiences.title })).toBeVisible();
    });
    it('should render the cards with the right content', () => {
      render(<Portfolio />);

      const list = screen.getByRole('list', { name: config.details.experiences.title });
      const cards = within(list).getAllByRole('listitem');

      expect(cards).toHaveLength(config.details.experiences.items.length);
      config.details.experiences.items.forEach((_card, index) => {
        const card = within(cards[index]);
        expect(card.getByRole('heading', { name: _card.company })).toBeVisible();
        expect(card.getByTestId('header-icon')).toHaveAttribute('aria-hidden', 'true');
        expect(card.getByRole('link', { name: _card.ctaAriaLabel })).toHaveAttribute('href', _card.destionationUrl);

        expect(card.getByText(_card.role)).toBeVisible();
        expect(card.getByText(_card.description)).toBeVisible();
        expect(card.getByText(_card.startDate)).toBeVisible();
        expect(card.getByTestId('date-separator')).toBeInTheDocument();
        expect(card.getByText(_card.endDate)).toBeVisible();
      });
    });
  });
  describe('Projects section', () => {
    it('should render the title', () => {
      render(<Portfolio />);

      expect(screen.getByRole('heading', { level: 2, name: config.details.projects.title })).toBeVisible();
    });
    it('should render the cards with the right content', () => {
      render(<Portfolio />);

      const list = screen.getByRole('list', { name: config.details.projects.title });
      const cards = within(list).getAllByRole('listitem');

      expect(cards).toHaveLength(config.details.projects.items.length);
      config.details.projects.items.forEach((_card, index) => {
        const card = within(cards[index]);
        expect(card.getByRole('heading', { name: _card.name })).toBeVisible();
        expect(card.getByTestId('header-icon')).toHaveAttribute('aria-hidden', 'true');
        expect(card.getByText(_card.description)).toBeVisible();
        expect(card.getByRole('link', { name: _card.projectAriaLabel })).toHaveAttribute(
          'href',
          _card.projectDestinationUrl,
        );
        expect(card.getByRole('link', { name: _card.projectAriaLabel })).toHaveAttribute('target', '_blank');
        expect(card.getByRole('link', { name: _card.projectAriaLabel })).toHaveAttribute('rel', 'noreferrer');

        expect(card.getByRole('link', { name: _card.iconAriaLabel })).toHaveAttribute('href', _card.iconDestinationUrl);
        expect(card.getByRole('link', { name: _card.iconAriaLabel })).toHaveAttribute('target', '_blank');
        expect(card.getByRole('link', { name: _card.iconAriaLabel })).toHaveAttribute('rel', 'noreferrer');
      });
    });
  });
});
