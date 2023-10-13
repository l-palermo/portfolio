import { render, screen, within } from '@testing-library/react';

import HomePage from '.';
import config from './lib/content';

describe('HomePage', () => {
  describe('Experiences section', () => {
    it('should render the title', () => {
      render(<HomePage />);

      expect(screen.getByRole('heading', { level: 2, name: config.details.experiences.title })).toBeVisible();
    });
    it('should render the experiences with the right content', () => {
      render(<HomePage />);

      const list = screen.getByRole('list', { name: config.details.experiences.title });
      const experiences = within(list).getAllByRole('listitem');

      expect(experiences).toHaveLength(config.details.experiences.items.length);
      config.details.experiences.items.forEach((item, index) => {
        const card = within(experiences[index]);
        expect(card.getByRole('heading', { name: item.company })).toBeVisible();
        expect(card.getByTestId('header-icon')).toHaveAttribute('aria-hidden', 'true');
        expect(card.getByRole('link', { name: item.ctaAriaLabel })).toHaveAttribute('href', item.destionationUrl);

        expect(card.getByText(item.role)).toBeVisible();
        expect(card.getByText(item.description)).toBeVisible();
        expect(card.getByText(item.startDate)).toBeVisible();
        expect(card.getByTestId('date-separator')).toBeInTheDocument();
        expect(card.getByText(item.endDate)).toBeVisible();
      });
    });
  });
  describe('Projects section', () => {
    it('should render the title', () => {
      render(<HomePage />);

      expect(screen.getByRole('heading', { level: 2, name: config.details.projects.title })).toBeVisible();
    });
    it('should render the projects with the right content', () => {
      render(<HomePage />);

      const projects = screen.getAllByTestId('project');
      expect(projects).toHaveLength(config.details.projects.items.length);

      expect(screen.getByRole('list', { name: config.details.projects.title })).toBeVisible();
      config.details.projects.items.forEach((item, index) => {
        const card = within(projects[index]);
        const technologies = card.getAllByRole('listitem');
        expect(card.getByRole('heading', { name: item.name })).toBeVisible();
        expect(card.getByTestId('header-icon')).toHaveAttribute('aria-hidden', 'true');
        expect(card.getByText(item.description)).toBeVisible();
        expect(card.getByRole('link', { name: item.projectAriaLabel })).toHaveAttribute(
          'href',
          item.projectDestinationUrl,
        );

        expect(card.getByRole('link', { name: item.iconAriaLabel })).toHaveAttribute('href', item.iconDestinationUrl);
        expect(card.getByRole('link', { name: item.iconAriaLabel })).toHaveAttribute('target', '_blank');
        expect(card.getByRole('link', { name: item.iconAriaLabel })).toHaveAttribute('rel', 'noreferrer');

        expect(card.getByRole('list', { name: item.technologies.ariaLabel })).tohave;
        technologies.forEach((technology, index) => {
          expect(technology).toHaveTextContent(item.technologies.items[index]);
        });
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
