import { Document as PdfDocument, Page, View, renderToBuffer } from '@react-pdf/renderer';

import './fonts';
import { iframeStyles, s } from './resume.style';
import { FieldContent } from '../../helpers/fetch-contentful/types';
import { COMPONENT_MAP } from '..';

export interface ResumeColumn {
  fields: FieldContent[];
}

export async function Resume({ fields }: ResumeColumn) {
  const buffer = await renderToBuffer(
    <PdfDocument>
      <Page size="A4" style={s.page}>
        <View style={s.columns}>
          {fields.map(({ fields: _field, sys }, index) => {
            const Component = COMPONENT_MAP[sys.contentType.sys.id as keyof typeof COMPONENT_MAP];
            return Component ? <Component key={`${sys.id}-${index}`} {..._field} /> : null;
          })}
        </View>
      </Page>
    </PdfDocument>,
  );

  const base64 = Buffer.from(new Uint8Array(buffer)).toString('base64');
  const dataUrl = `data:application/pdf;base64,${base64}`;

  return <iframe src={dataUrl} style={iframeStyles} title="Luigi Palermo — Resume" />;
}
