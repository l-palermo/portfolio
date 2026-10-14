import React from 'react';
import { View, Text } from '@react-pdf/renderer';

import { s, dot } from './resume-language.style';

function Dot({ filled }: { filled: boolean }) {
  return <View style={dot(filled)} />;
}

export function ResumeLanguage({ language, level }: { language?: string; level?: number }) {
  return (
    <View style={s.langRow}>
      <Text style={s.langName}>{language}</Text>
      <View style={s.dotsRow}>
        {[1, 2, 3, 4, 5].map((n) => (
          <Dot key={n} filled={n <= (level ?? 0)} />
        ))}
      </View>
    </View>
  );
}
