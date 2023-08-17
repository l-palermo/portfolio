import React, { FunctionComponent, PropsWithChildren } from 'react';
import { randomUUID } from 'crypto';

/**
 * BlOCK_MATCH_REGEX: Match whole group with closing brackets e.g. "<0>foo bar</0>"
 * BlOCK_ELEMENT_MATCH_REGEX: Match and extract values for each part of the block "0, foo bar, 0"
*/
const BLOCK_MATCH_REGEX = /(<\d>.*?<\/\d>)/;
const BLOCK_ELEMENT_MATCH_REGEX = /<(\d)>(.*?)<\/(\d)>/;

export default function interpolateStringWithComponents(
  string: string,
  components?: { Component: FunctionComponent<PropsWithChildren<any>>; props?: Record<string, unknown> }[],
) {
  if (!components || !components.length) return string;
  const interpolations = string.match(BLOCK_MATCH_REGEX);
  if (!interpolations) return string;
  return string.split(BLOCK_MATCH_REGEX).map((str) => {
    const componentMatch = str.match(BLOCK_ELEMENT_MATCH_REGEX);
    if (!componentMatch) return str;

    const [, ComponentOpeningIndex, children, ComponentClosingIndex] = componentMatch;
    const componentIndex = ComponentOpeningIndex === ComponentClosingIndex ? ComponentOpeningIndex : null;

    if (!componentIndex) return str;

    const { Component, props = {} } = components[Number(componentIndex)];

    return React.createElement(Component, { ...props, key: randomUUID() }, children);
  });
}
