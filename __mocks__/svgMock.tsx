import React, { LegacyRef } from 'react';

const MockSvg = ({ title, ...props }: { title: string }) => <svg {...props}>{title && <title>{title}</title>}</svg>;

const MockSvgWithRef = ({ title, ...props }: { title: string }, ref: LegacyRef<SVGSVGElement>) => (
  <svg ref={ref} {...props}>
    {title && <title>{title}</title>}
  </svg>
);

export default MockSvg;
export const ReactComponent = MockSvgWithRef;
