import { render, screen, within } from '@testing-library/react';

import { Page } from './page';
import { fetchContentful } from '../helpers/fetch-contentful';
import { pageMockedCmsResponse } from './test-resources/page-mocked-cms-response';

jest.mock('../helpers/fetch-contentful');

describe('Page', () => {
  beforeAll(() => {
    (fetchContentful as jest.Mock).mockReturnValue(pageMockedCmsResponse);
  });
  afterAll(() => {
    jest.clearAllMocks();
  });
  describe('Experiences section', () => {
    it('should render the title', async () => {
      render(await Page({ params: Promise.resolve({}) }));

      expect(await screen.findByRole('heading', { level: 2, name: 'Experiences' })).toBeVisible();
    });
    it('should render the experiences with the right content', async () => {
      render(await Page({ params: Promise.resolve({}) }));

      const list = await screen.findAllByRole('list');
      expect(list).toHaveLength(3);

      expect(screen.getByRole('heading', { level: 2, name: 'Experiences' })).toBeVisible();
      const experiences = within(list[0]);
      expect(experiences.getAllByRole('listitem')).toHaveLength(2);
      expect(experiences.getAllByRole('article')).toHaveLength(2);
      expect(experiences.getByRole('heading', { level: 3, name: 'ClearScore . Platform' })).toBeVisible();
      expect(experiences.getByRole('heading', { level: 3, name: 'ClearScore . Drivescore' })).toBeVisible();
      expect(experiences.getByRole('link', { name: 'See more clearscore' })).toHaveAttribute(
        'href',
        '/clearscore-platform',
      );
      expect(experiences.getByRole('link', { name: 'See more drivescore' })).toHaveAttribute(
        'href',
        '/clearscore-drivescore',
      );
    });
  });
  describe('Projects section', () => {
    it('should render the title', async () => {
      render(await Page({ params: Promise.resolve({}) }));

      expect(await screen.findByRole('heading', { level: 2, name: 'Projects' })).toBeVisible();
    });
    it('should render the projects with the right content', async () => {
      render(await Page({ params: Promise.resolve({}) }));

      const list = await screen.findAllByRole('list');
      expect(list).toHaveLength(3);

      expect(screen.getByRole('heading', { level: 2, name: 'Experiences' })).toBeVisible();
      const projects = within(list[1]);
      expect(projects.getAllByRole('article')).toHaveLength(1);
      expect(projects.getByRole('heading', { level: 3, name: 'Portfolio' })).toBeVisible();
      expect(projects.getByRole('link', { name: 'Portfolio github repo' })).toHaveAttribute(
        'href',
        'https://github.com/l-palermo/portfolio',
      );
      expect(projects.getByRole('link', { name: 'Portfolio github repo' })).toHaveAttribute('target', '_blank');
      expect(projects.getByRole('link', { name: 'See portfolio' })).toBeVisible();

      const technologies = within(list[2]);
      expect(technologies.getAllByRole('listitem')).toHaveLength(6);
    });
  });
});
