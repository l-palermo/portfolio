import { View, Text } from '@react-pdf/renderer';

import { s } from './resume-section.style';
import { COMPONENT_MAP } from '..';
import { FieldContent } from '../../helpers/fetch-contentful/types';

function SectionTitle({ label }: { label: string }) {
  return <Text style={s.sectionTitle}>{label.toUpperCase()}</Text>;
}

export interface ResumeSection {
  name?: string;
  fields: FieldContent[];
}

export function ResumeSection({ fields, name }: ResumeSection) {
  return (
    <View style={s.section}>
      {name ? <SectionTitle label={name} /> : null}
      {fields.map(({ fields: _field, sys }) => {
        const Component = COMPONENT_MAP[sys.contentType.sys.id as keyof typeof COMPONENT_MAP];
        return Component ? <Component key={sys.id} {..._field} /> : null;
      })}
    </View>
  );
}
