import { renderToBuffer } from '@react-pdf/renderer';

import { fetchResume } from '../../_/helpers/fetch-resume';
import { ResumeDocument } from '../../_/components/resume-pdf/resume-document';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const download = searchParams.get('download') === '1';

  const resolved = await fetchResume();
  const buffer = await renderToBuffer(<ResumeDocument resolved={resolved} />);

  return new Response(new Uint8Array(buffer), {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `${download ? 'attachment' : 'inline'}; filename="luigi-palermo-resume.pdf"`,
    },
  });
}
