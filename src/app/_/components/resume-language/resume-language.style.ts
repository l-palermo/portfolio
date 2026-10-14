import { StyleSheet } from '@react-pdf/renderer';

import { COLOURS } from '../resume/resume.style';

export const s = StyleSheet.create({
  langRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 5 },
  langName: { fontSize: 9, color: COLOURS.blue, fontWeight: 700 },
  dotsRow: { flexDirection: 'row' },
});

export const dot = (filled: boolean) => ({
  width: 7,
  height: 7,
  borderRadius: 4,
  backgroundColor: filled ? COLOURS.blue : COLOURS.white,
  borderWidth: 1.5,
  borderColor: COLOURS.blue,
  marginRight: 3,
});
