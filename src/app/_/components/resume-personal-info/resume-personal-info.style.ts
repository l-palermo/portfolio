import { StyleSheet } from '@react-pdf/renderer';

import { COLOURS } from '../resume/resume.style';

export { COLOURS };

export const s = StyleSheet.create({
  name: { fontSize: 22, fontWeight: 700, color: COLOURS.blue, marginBottom: 3, lineHeight: 1.2 },
  jobTitle: { fontSize: 14, color: COLOURS.blue, marginBottom: 10, lineHeight: 1.3 },
  contactRow: { flexDirection: 'row', marginBottom: 5, alignItems: 'center' },
  contactIcon: { width: 14, alignItems: 'center', justifyContent: 'center', marginRight: 5 },
  contactText: { fontSize: 8.5, color: COLOURS.text },
  contactLink: { fontSize: 8.5, fontWeight: 500, color: COLOURS.text, textDecoration: 'none' },
});
