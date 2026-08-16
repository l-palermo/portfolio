import React from 'react';
import { View, Text } from '@react-pdf/renderer';

import type { ResumeSkillGroup } from '../../../../helpers/fetch-resume/types';
import { s } from '../../styles';

export function SkillGroupItem({ group }: { group: ResumeSkillGroup }) {
  return (
    <View style={s.skillGroup}>
      <Text style={s.skillCategory}>
        {group.category}
        {'  '}
        <Text style={s.skillList}>{'– ' + group.skills.join(' · ')}</Text>
      </Text>
    </View>
  );
}
