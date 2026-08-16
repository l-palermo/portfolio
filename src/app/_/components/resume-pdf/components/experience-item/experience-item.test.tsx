import { render, screen } from '@testing-library/react';
import { BLOCKS } from '@contentful/rich-text-types';
import type { Document } from '@contentful/rich-text-types';

import { ExperienceItem } from './experience-item';

const emptyDoc: Document = {
  nodeType: BLOCKS.DOCUMENT,
  data: {},
  content: [],
};

const docWithText = (text: string): Document => ({
  nodeType: BLOCKS.DOCUMENT,
  data: {},
  content: [
    {
      nodeType: BLOCKS.PARAGRAPH,
      data: {},
      content: [{ nodeType: 'text', value: text, marks: [], data: {} }],
    },
  ],
});

const defaultProps = {
  exp: {
    id: 'acme',
    company: 'Acme Corp',
    role: 'Senior Engineer',
    startDate: '2020-01-01',
    endDate: '2024-06-01',
    location: 'London, UK',
    remote: false,
    description: emptyDoc,
  },
};

describe('ExperienceItem', () => {
  it('should render the company name', () => {
    render(<ExperienceItem {...defaultProps} />);
    expect(screen.getByText('Acme Corp')).toBeVisible();
  });

  it('should render the role', () => {
    render(<ExperienceItem {...defaultProps} />);
    expect(screen.getByText('Senior Engineer')).toBeVisible();
  });

  it('should render the formatted date range', () => {
    render(<ExperienceItem {...defaultProps} />);
    expect(screen.getByText(/1\/2020/)).toBeVisible();
    expect(screen.getByText(/6\/2024/)).toBeVisible();
  });

  it('should render the location', () => {
    render(<ExperienceItem {...defaultProps} />);
    expect(screen.getByText(/London, UK/)).toBeVisible();
  });

  it('should prefix location with (Remote) when remote is true', () => {
    render(<ExperienceItem exp={{ ...defaultProps.exp, remote: true }} />);
    expect(screen.getByText(/\(Remote\) London, UK/)).toBeVisible();
  });

  it('should show Present when no endDate is provided', () => {
    const { exp } = defaultProps;
    render(<ExperienceItem exp={{ ...exp, endDate: undefined }} />);
    expect(screen.getByText(/Present/)).toBeVisible();
  });

  it('should render rich text description content', () => {
    render(<ExperienceItem exp={{ ...defaultProps.exp, description: docWithText('Led the team.') }} />);
    expect(screen.getByText('Led the team.')).toBeVisible();
  });
});
