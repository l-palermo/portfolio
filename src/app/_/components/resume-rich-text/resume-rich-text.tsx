import React from 'react';
import { View, Text } from '@react-pdf/renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import type { Document as RichTextDoc } from '@contentful/rich-text-types';

import { s } from './resume-rich-text.style';

function renderInlines(nodes: any[]) {
  return nodes.map((node: any, i: number) => {
    if (node.nodeType !== 'text') return null;
    const isBold = node.marks?.some((m: any) => m.type === 'bold');
    return (
      <Text key={i} style={isBold ? s.bold : {}}>
        {node.value}
      </Text>
    );
  });
}

export function ResumeRichText({ content, textStyle }: { content?: RichTextDoc; textStyle?: object }) {
  return (
    <>
      {content?.content.map((block: any, i: number) => {
        if (block.nodeType === BLOCKS.PARAGRAPH) {
          return (
            <Text key={i} style={{ ...s.para, ...textStyle }}>
              {renderInlines(block.content)}
            </Text>
          );
        }

        if (block.nodeType === BLOCKS.UL_LIST) {
          return block.content.map((item: any, j: number) => {
            const inlines = item.content[0]?.content ?? [];
            return (
              <View key={`${i}-${j}`} style={s.bulletRow}>
                <Text style={s.bulletSymbol}>{'•  '}</Text>
                <Text style={{ ...s.bulletText, ...textStyle }}>{renderInlines(inlines)}</Text>
              </View>
            );
          });
        }

        return null;
      })}
    </>
  );
}
