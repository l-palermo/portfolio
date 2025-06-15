import { render, screen } from '@testing-library/react';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';

import { ContentfulRichText } from './contentful-rich-text';

describe('ContentfulRichText', () => {
  it('renders bold text correctly', () => {
    const text = {
      nodeType: BLOCKS.DOCUMENT as const,
      data: {},
      content: [
        {
          nodeType: BLOCKS.PARAGRAPH as const,
          content: [
            {
              nodeType: 'text' as const,
              value: 'Bold text',
              marks: [{ type: MARKS.BOLD }],
              data: {},
            },
          ],
          data: {},
        },
      ],
    };

    render(<>{ContentfulRichText({ text })}</>);
    const boldText = screen.getByText('Bold text');
    expect(boldText).toBeVisible();
    expect(boldText.tagName).toBe('SPAN');
    expect(boldText).toHaveClass('text variant_bodyBold sentiment_primary');
  });

  it('renders list items correctly', () => {
    const text = {
      nodeType: BLOCKS.DOCUMENT as const,
      data: {},
      content: [
        {
          nodeType: BLOCKS.UL_LIST as const,
          data: {},
          content: [
            {
              nodeType: BLOCKS.LIST_ITEM as const,
              content: [
                {
                  nodeType: 'text' as const,
                  value: 'List item',
                  marks: [],
                  data: {},
                },
              ],
              data: {},
            },
          ],
        },
      ],
    };

    render(<>{ContentfulRichText({ text })}</>);
    const listItem = screen.getByText('List item');
    expect(listItem).toBeVisible();
    expect(listItem.tagName).toBe('LI');
  });

  it('renders paragraphs correctly', () => {
    const text = {
      nodeType: BLOCKS.DOCUMENT as const,
      data: {},
      content: [
        {
          nodeType: BLOCKS.PARAGRAPH as const,
          content: [
            {
              nodeType: 'text' as const,
              value: 'Paragraph text',
              marks: [],
              data: {},
            },
          ],
          data: {},
        },
      ],
    };

    render(<>{ContentfulRichText({ text })}</>);
    const paragraphText = screen.getByText('Paragraph text');
    expect(paragraphText).toBeVisible();
    expect(paragraphText.tagName).toBe('SPAN');
  });
});
