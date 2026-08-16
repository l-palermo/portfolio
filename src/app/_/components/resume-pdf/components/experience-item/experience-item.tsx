import React from 'react';
import { View, Text } from '@react-pdf/renderer';

import type { ResumeExperience } from '../../../../helpers/fetch-resume/types';
import { differenceYearsMonths } from '../../../../helpers/difference-years-months';
import { s } from '../../styles';
import { RichText } from '../rich-text';

function formatDate(iso: string) {
  const d = new Date(iso);
  return `${d.getUTCMonth() + 1}/${d.getUTCFullYear()}`;
}

function buildMeta(exp: ResumeExperience) {
  const start = formatDate(exp.startDate);
  const end = exp.endDate ? formatDate(exp.endDate) : 'Present';
  const place = exp.remote ? `(Remote) ${exp.location}` : exp.location;
  const { years, months } = differenceYearsMonths(exp.startDate, exp.endDate ?? new Date().toISOString());
  const duration = [years ? `${years}y` : '', months ? `${months}m` : ''].filter(Boolean).join(' ');
  return `${start} – ${end}  |  ${place}  |  ${duration}`;
}

export function ExperienceItem({ exp }: { exp: ResumeExperience }) {
  return (
    <View style={s.expItem}>
      <Text style={s.expCompany}>{exp.company}</Text>
      <Text style={s.expRole}>{exp.role}</Text>
      <Text style={s.expMeta}>{buildMeta(exp)}</Text>
      <RichText doc={exp.description} />
    </View>
  );
}
