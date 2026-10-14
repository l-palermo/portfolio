import { StyleSheet } from '@react-pdf/renderer';

import { COLOURS } from '../resume/resume.style';

export { COLOURS };

export const s = StyleSheet.create({
  skillGroup: { marginBottom: 5 },
  skillCategory: { fontSize: 8, fontWeight: 700, color: COLOURS.blue },
  skillList: { fontSize: 8, color: COLOURS.text, lineHeight: 1.5, fontWeight: 600 },
});
