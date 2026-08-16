import React from 'react';
import { View, Text } from '@react-pdf/renderer';

import type { ResumeAward } from '../../../../helpers/fetch-resume/types';
import { s } from '../../styles';

export function AwardItem({ award }: { award: ResumeAward }) {
  return (
    <View style={{ marginBottom: 6 }}>
      <Text style={s.awardTitle}>{award.title}</Text>
      <Text style={s.awardDesc}>{award.description}</Text>
    </View>
  );
}
