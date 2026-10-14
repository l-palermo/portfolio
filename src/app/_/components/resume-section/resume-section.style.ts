import { StyleSheet } from '@react-pdf/renderer';

import { COLOURS } from '../resume/resume.style';

export const s = StyleSheet.create({
  section: { marginBottom: 14 },
  sectionTitle: {
    fontSize: 8,
    fontWeight: 700,
    color: COLOURS.blue,
    letterSpacing: 1.5,
    padding: 3,
    textAlign: 'center',
    backgroundColor: COLOURS.sep,
    marginBottom: 8,
  },
});
