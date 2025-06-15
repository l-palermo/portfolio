import { Fragment, ReactNode } from 'react';
import { BLOCKS, MARKS, Block, Document, Inline } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import { Text } from '../text';
import { COMPONENT_MAP } from '..';
import { List, ListItem } from '../list';

const options = {
  renderMark: {
    [MARKS.BOLD]: function (text: ReactNode) {
      return (
        <Text variant="bodyBold" sentiment="primary" HTMLTag="span">
          {text}
        </Text>
      );
    },
  },
  renderNode: {
    [BLOCKS.LIST_ITEM]: function (_node: Block | Inline, children: ReactNode) {
      return <ListItem>{children}</ListItem>;
    },
    [BLOCKS.UL_LIST]: function (_node: Block | Inline, children: ReactNode) {
      return <List>{children}</List>;
    },
    [BLOCKS.PARAGRAPH]: function (node: Block | Inline) {
      return (
        <span>
          {node.content
            .map((node, index) => {
              const { data, nodeType } = node;
              if (nodeType === 'embedded-entry-inline') {
                return (
                  <Fragment key={`${data.target.sys.contentType.sys.id}-${index}`}>
                    {COMPONENT_MAP[data.target.sys.contentType.sys.id as keyof typeof COMPONENT_MAP]?.({
                      ...data.target.fields,
                    })}
                  </Fragment>
                );
              }
              if (nodeType === 'text' && node.value && node.marks.length) {
                return (
                  <Fragment key={`${node.value}-${index}`}>
                    {options.renderMark[node.marks[0].type as keyof typeof options.renderMark](node.value)}
                  </Fragment>
                );
              }
              if (nodeType === 'text' && node.value) {
                return (
                  <Text key={`${node.value}-${index}`} variant="body" sentiment="primary_faded" HTMLTag="span">
                    {node.value}
                  </Text>
                );
              }
              return null;
            })
            .filter(Boolean)}
        </span>
      );
    },
  },
};

export interface ContentfulRichTextProps {
  text: Document;
}

export function ContentfulRichText({ text }: ContentfulRichTextProps) {
  return documentToReactComponents(text, options);
}
