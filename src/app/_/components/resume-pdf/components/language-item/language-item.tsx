import React from 'react';
import { View, Text } from '@react-pdf/renderer';

import type { ResumeLanguage } from '../../../../helpers/fetch-resume/types';
import { C, s } from '../../styles';

function Dot({ filled }: { filled: boolean }) {
  return (
    <View
      style={{
        width: 7,
        height: 7,
        borderRadius: 4,
        backgroundColor: filled ? C.blue : C.white,
        borderWidth: 1.5,
        borderColor: C.blue,
        marginRight: 3,
      }}
    />
  );
}

export function LanguageItem({ lang }: { lang: ResumeLanguage }) {
  return (
    <View style={s.langRow}>
      <Text style={s.langName}>{lang.language}</Text>
      <View style={s.dotsRow}>
        {[1, 2, 3, 4, 5].map((n) => (
          <Dot key={n} filled={n <= lang.level} />
        ))}
      </View>
    </View>
  );
}
