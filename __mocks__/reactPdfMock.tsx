import React from 'react';

const block = ({ children, ...props }: any) => <div {...props}>{children}</div>;
const inline = ({ children, ...props }: any) => <span {...props}>{children}</span>;

export const View = block;
export const Page = block;
export const Document = block;
export const Text = inline;
export const Link = ({ children, src, ...props }: any) => (
  <a href={src} {...props}>
    {children}
  </a>
);
export const Image = ({ src, ...props }: any) => <img src={src} {...props} alt="" />;
export const Svg = ({ children, viewBox, width, height, ...props }: any) => (
  <svg viewBox={viewBox} width={width} height={height} {...props}>
    {children}
  </svg>
);
export const Path = ({ d, fill, stroke, strokeWidth, ...props }: any) => (
  <path d={d} fill={fill} stroke={stroke} strokeWidth={strokeWidth} {...props} />
);
export const StyleSheet = {
  create: <T extends Record<string, object>>(styles: T): T => styles,
};
export const Font = { register: () => {} };
