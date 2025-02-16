import { render, screen, within } from '@testing-library/react';

import { Layout } from '.';
import { fetchContentful } from '../helpers/fetch-contentful';
import { layoutMockedCmsResponse } from './test-resources/layout-mocked-cms-response';

jest.mock('../helpers/fetch-contentful');

describe('Layout', () => {
  beforeAll(() => {
    (fetchContentful as jest.Mock).mockReturnValue(layoutMockedCmsResponse);
  });
  afterAll(() => {
    jest.clearAllMocks();
  });
  describe('Header', () => {
    it('should render the header, subhaeder, description and an icon hidden to sr', async () => {
      render(await Layout({ children: <div /> }));

      expect(await screen.findByRole('heading', { level: 1, name: 'Luigi Palermo' })).toBeVisible();
      expect(screen.getByTestId('header-separator')).toBeInTheDocument();
      expect(screen.getByRole('heading', { level: 2, name: 'Software Engineer' })).toBeVisible();
      expect(
        screen.getByText('I build accessible, inclusive products and digital experiences for the web.'),
      ).toBeVisible();
    });
  });
  describe('Resume section', () => {
    it('should return the link to the resume', async () => {
      render(await Layout({ children: <div /> }));

      expect(await screen.findByRole('link', { name: 'View my resume' })).toHaveAttribute('href', '/resume.pdf');
      expect(screen.getByRole('link', { name: 'View my resume' })).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });
  describe('Footer', () => {
    it('should render the footer containing the contacts section and links', async () => {
      render(await Layout({ children: <div /> }));

      const footer = await screen.findByRole('contentinfo');
      const contactDetailsList = within(footer).getByRole('list');
      const links = within(contactDetailsList).getAllByRole('link');

      expect(links).toHaveLength(3);
      expect(screen.getByRole('link', { name: 'github profile' })).toBeVisible();
      expect(screen.getByRole('link', { name: 'linkedin profile' })).toBeVisible();
      expect(screen.getByRole('link', { name: 'email' })).toBeVisible();
    });
  });
});
