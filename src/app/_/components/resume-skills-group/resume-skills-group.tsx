import React from 'react';
import { View, Text } from '@react-pdf/renderer';

import { s } from './resume-skills-group.style';

export function ResumesSkillGroup({ category, skills }: { category?: string; skills?: string[] }) {
  return (
    <View style={s.skillGroup}>
      <Text style={s.skillCategory}>
        {category}
        <Text style={s.skillList}>{' - ' + skills?.join(' · ')}</Text>
      </Text>
    </View>
  );
}
