import { render, screen } from '@testing-library/react';

import ClearScore from './clearscore';
import pageCopy from './lib/content';

describe('ClearScore', () => {
  it('should render a link to go navigate back to the home page', () => {
    render(<ClearScore />);
    const { cta, path } = pageCopy.backNavigation;

    expect(screen.getByRole('link', { name: cta })).toHaveAttribute('href', path);
  });
  it('should render the intro', () => {
    render(<ClearScore />);

    pageCopy.intro.forEach((line) => {
      expect(screen.getByText(line)).toBeVisible();
    });
  });
  it('should render the tasks', () => {
    render(<ClearScore />);
    const { title, tasks } = pageCopy.roleSummary;

    expect(screen.getByRole('heading', { level: 2, name: title })).toBeVisible();
    tasks.forEach((line) => {
      expect(screen.getByText(line)).toBeVisible();
    });
  });
  it('should render an acessible intro to the app preview section', () => {
    render(<ClearScore />);
    const { accessibleIntro } = pageCopy.appPreviews;

    expect(screen.getByRole('heading', { level: 2, name: accessibleIntro })).toBeVisible();
  });
  it('should render the app preview sections', () => {
    render(<ClearScore />);
    const { sections } = pageCopy.appPreviews;

    sections.forEach(({ title, videos }) => {
      expect(screen.getByRole('heading', { level: 2, name: title })).toBeVisible();

      videos.forEach(({ title, description, filePaths }) => {
        expect(screen.getByRole('heading', { level: 3, name: title })).toBeVisible();
        expect(screen.getByText(description)).toBeVisible();

        filePaths.forEach((_, index) => {
          expect(screen.getByTestId(`video-${title}-${index}`)).toHaveAttribute('aria-hidden', 'true');
        });
      });
    });
  });
});
