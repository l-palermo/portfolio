import React from 'react';
import { renderToBuffer } from '@react-pdf/renderer';
import { connection } from 'next/server';

import { fetchResume } from '../../_/helpers/fetch-resume';
import { ResumeDocument } from '../../_/components/resume-pdf/resume-document';
import styles from './page.module.css';

export default async function ResumePage() {
  await connection();
  const resolved = await fetchResume();
  const buffer = await renderToBuffer(<ResumeDocument resolved={resolved} />);
  const base64 = Buffer.from(new Uint8Array(buffer)).toString('base64');
  const dataUrl = `data:application/pdf;base64,${base64}`;

  return <iframe src={dataUrl} className={styles.iframe} title="Luigi Palermo — Resume" />;
}
