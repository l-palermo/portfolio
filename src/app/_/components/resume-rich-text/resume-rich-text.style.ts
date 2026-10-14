import { StyleSheet } from '@react-pdf/renderer';

import { COLOURS } from '../resume/resume.style';

export const s = StyleSheet.create({
  para: { fontSize: 8, color: COLOURS.text, lineHeight: 1.2, marginBottom: 3 },
  bold: { fontWeight: 700 },
  bulletRow: { flexDirection: 'row', marginBottom: 2 },
  bulletSymbol: { width: 9, fontSize: 8.5, color: COLOURS.text },
  bulletText: { flex: 1, fontSize: 8, lineHeight: 1.2, color: COLOURS.text },
});
