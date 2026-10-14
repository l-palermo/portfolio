import { StyleSheet } from '@react-pdf/renderer';

import { COLOURS } from '../resume/resume.style';

export const s = StyleSheet.create({
  expItem: { marginBottom: 10, gap: 1 },
  expCompany: { fontSize: 10, fontWeight: 700, color: COLOURS.blue },
  expRole: { fontSize: 9, fontWeight: 700, color: COLOURS.text, marginBottom: 2 },
  expMeta: { fontSize: 8, fontWeight: 600, color: COLOURS.blue, marginBottom: 3 },
});
