import { connection } from 'next/server';

import { Page } from '../../_/page-module/page';

export default async function RoutePage() {
  await connection();
  return <Page params={Promise.resolve({ path: 'resume' })} />;
}
