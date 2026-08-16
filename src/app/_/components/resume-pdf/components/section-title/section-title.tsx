import React from 'react';
import { Text } from '@react-pdf/renderer';

import { s } from '../../styles';

export function SectionTitle({ label }: { label: string }) {
  return <Text style={s.sectionTitle}>{label.toUpperCase()}</Text>;
}
