import { StyleSheet } from '@react-pdf/renderer';

export const COLOURS = {
  navy: '#1a2e4a',
  blue: '#0e3f6a',
  text: '#000000',
  muted: '#6b7280',
  sep: '#f0f3f5',
  white: '#ffffff',
};

export const s = StyleSheet.create({
  page: {
    fontFamily: 'Inter',
    fontSize: 9,
    color: COLOURS.text,
    paddingHorizontal: 36,
    paddingVertical: 32,
    backgroundColor: COLOURS.white,
  },
  columns: { flex: 1 },
});

export const iframeStyles = {
  display: 'block',
  width: '100%',
  height: '100dvh',
  border: 'none',
};
