import { render, screen, within } from '@testing-library/react';

import ClearScore from './clearscore';
import pageCopy from './lib/content';

const INTERPLAION_SYMBOLS_REGEX = /<\d>|<\/\d>/g;

describe('ClearScore', () => {
  it('should render a link to go navigate back to the home page', () => {
    render(<ClearScore />);
    const { cta, path } = pageCopy.backNavigation;

    expect(screen.getByRole('link', { name: cta })).toHaveAttribute('href', path);
  });
  it('should render the intro', () => {
    render(<ClearScore />);

    const { ariaLabel, items } = pageCopy.intro;
    const linkLabel = items[0].text.split(INTERPLAION_SYMBOLS_REGEX)[1];
    const { props } = 'props' in items[0].components?.[0] || ({} as any);
    const introLines = screen.getAllByTestId('intro-line');

    expect(screen.getByRole('article', { name: ariaLabel })).toBeVisible();
    expect(introLines.length).toBe(items.length);
    introLines.forEach((paragraph, index) => {
      expect(paragraph).toHaveTextContent(items[index].text.replaceAll(INTERPLAION_SYMBOLS_REGEX, ''));
    });
    expect(screen.getByRole('link', { name: linkLabel })).toHaveAttribute('href', props?.href);
    expect(screen.getByRole('link', { name: linkLabel })).toHaveAttribute('target', props?.target);
    expect(screen.getByRole('link', { name: linkLabel })).toHaveAttribute('rel', props?.rel);
  });
  it('should render the tasks', () => {
    render(<ClearScore />);
    const { title, tasks } = pageCopy.roleSummary;

    expect(screen.getByRole('heading', { level: 2, name: title })).toBeVisible();
    const allTasks = within(screen.getByRole('list', { name: title })).getAllByRole('listitem');

    expect(allTasks.length).toBe(tasks.length);
    allTasks.forEach((task, index) => {
      expect(task).toHaveTextContent(tasks[index].replaceAll(INTERPLAION_SYMBOLS_REGEX, ''));
    });
  });
  it('should render the technologies section', () => {
    render(<ClearScore />);
    const { technologies } = pageCopy;

    const list = screen.getByRole('list', { name: technologies.title });
    const technologyItems = within(list).getAllByRole('listitem');

    expect(technologyItems.length).toBe(technologies.items.length);
    technologyItems.forEach((technology, index) => {
      expect(technology).toHaveTextContent(technologies.items[index]);
    });
  });
  it('should render an acessible intro to the app preview section', () => {
    render(<ClearScore />);
    const { accessibilityIntro } = pageCopy.appPreviews;

    expect(screen.getByText(accessibilityIntro)).toBeVisible();
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
