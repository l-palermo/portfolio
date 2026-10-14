import path from 'path';

import { Font } from '@react-pdf/renderer';

// public/fonts/ is reliably present in the Vercel serverless bundle; node_modules/ is not
const dir = path.resolve(process.cwd(), 'public/fonts');

Font.register({
  family: 'Inter',
  fonts: [
    { src: `${dir}/inter-latin-400-normal.woff`, fontWeight: 400, fontStyle: 'normal' },
    { src: `${dir}/inter-latin-400-italic.woff`, fontWeight: 400, fontStyle: 'italic' },
    { src: `${dir}/inter-latin-700-normal.woff`, fontWeight: 700, fontStyle: 'normal' },
    { src: `${dir}/inter-latin-700-italic.woff`, fontWeight: 700, fontStyle: 'italic' },
  ],
});
