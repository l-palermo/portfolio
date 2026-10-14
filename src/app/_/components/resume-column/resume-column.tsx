import { View } from '@react-pdf/renderer';

import { s } from './resume-column.style';
import { COMPONENT_MAP } from '..';
import { FieldContent } from '../../helpers/fetch-contentful/types';

export interface ResumeColumn {
  side?: 'left' | 'right';
  fields: FieldContent[];
}

export function ResumeColumn({ fields, side }: ResumeColumn) {
  return (
    <View style={side ? s[side] : {}}>
      {fields.map(({ fields: _field, sys }) => {
        const Component = COMPONENT_MAP[sys.contentType.sys.id as keyof typeof COMPONENT_MAP];
        return Component ? <Component {..._field} /> : null;
      })}
    </View>
  );
}
