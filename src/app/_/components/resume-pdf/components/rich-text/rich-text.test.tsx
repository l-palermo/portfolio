import { render, screen } from '@testing-library/react';
import { BLOCKS } from '@contentful/rich-text-types';
import type { Document } from '@contentful/rich-text-types';

import { RichText } from './rich-text';

const paragraph = (text: string): Document => ({
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

const withBold = (plain: string, bold: string): Document => ({
  nodeType: BLOCKS.DOCUMENT,
  data: {},
  content: [
    {
      nodeType: BLOCKS.PARAGRAPH,
      data: {},
      content: [
        { nodeType: 'text', value: plain, marks: [], data: {} },
        { nodeType: 'text', value: bold, marks: [{ type: 'bold' }], data: {} },
      ],
    },
  ],
});

const bulletList = (...items: string[]): Document => ({
  nodeType: BLOCKS.DOCUMENT,
  data: {},
  content: [
    {
      nodeType: BLOCKS.UL_LIST,
      data: {},
      content: items.map((text) => ({
        nodeType: BLOCKS.LIST_ITEM,
        data: {},
        content: [
          {
            nodeType: BLOCKS.PARAGRAPH,
            data: {},
            content: [{ nodeType: 'text', value: text, marks: [], data: {} }],
          },
        ],
      })),
    },
  ],
});

describe('RichText', () => {
  it('should render a paragraph', () => {
    render(<RichText doc={paragraph('Hello world')} />);
    expect(screen.getByText('Hello world')).toBeVisible();
  });

  it('should render bold text', () => {
    render(<RichText doc={withBold('NormalText', 'BoldText')} />);
    expect(screen.getByText('NormalText')).toBeVisible();
    expect(screen.getByText('BoldText')).toBeVisible();
  });

  it('should render bullet list items', () => {
    render(<RichText doc={bulletList('First item', 'Second item')} />);
    expect(screen.getByText('First item')).toBeVisible();
    expect(screen.getByText('Second item')).toBeVisible();
  });

  it('should render multiple bullet points', () => {
    render(<RichText doc={bulletList('A', 'B', 'C')} />);
    ['A', 'B', 'C'].forEach((text) => {
      expect(screen.getByText(text)).toBeVisible();
    });
  });
});
