export const VARIANTS = [
  'heading1',
  'heading2',
  'heading3',
  'heading4',
  'heading5',
  'heading6',
  'body',
  'bodyBold',
] as const;
export type Variants = (typeof VARIANTS)[number];

export const SENTIMENTS = ['primary', 'primary_faded', 'secondary', 'secondary_faded'] as const;
export type Sentiments = (typeof SENTIMENTS)[number];

export const HTML_TAGS = ['p', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'b', 'em', 'strong'] as const;
export type HTMLTags = (typeof HTML_TAGS)[number];
