import { render, screen, within } from '@testing-library/react';

import HomePage from '.';
import config from './lib/content';

describe('HomePage', () => {
  describe('Experiences section', () => {
    it('should render the title', () => {
      render(<HomePage />);

      expect(screen.getByRole('heading', { level: 2, name: config.details.experiences.title })).toBeVisible();
    });
    it('should render the cards with the right content', () => {
      render(<HomePage />);

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
      render(<HomePage />);

      expect(screen.getByRole('heading', { level: 2, name: config.details.projects.title })).toBeVisible();
    });
    it('should render the cards with the right content', () => {
      render(<HomePage />);

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

        expect(card.getByRole('link', { name: _card.iconAriaLabel })).toHaveAttribute('href', _card.iconDestinationUrl);
        expect(card.getByRole('link', { name: _card.iconAriaLabel })).toHaveAttribute('target', '_blank');
        expect(card.getByRole('link', { name: _card.iconAriaLabel })).toHaveAttribute('rel', 'noreferrer');
      });
    });
    it('should open the link to the project on the same tab when isSameTab is true', () => {
      render(<HomePage />);

      const sameTabProject = config.details.projects.items.find(({ isSameTab }) => isSameTab);
      const { projectAriaLabel } = sameTabProject || {};

      expect(screen.getByRole('link', { name: projectAriaLabel })).not.toHaveAttribute('target', '_blank');
      expect(screen.getByRole('link', { name: projectAriaLabel })).not.toHaveAttribute('rel', 'noreferrer');
    });
  });
});
