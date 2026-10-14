import React from 'react';
import { View, Text } from '@react-pdf/renderer';

import { s } from './resume-experience.style';
import { differenceYearsMonths } from '../../helpers/difference-years-months';
import { ResumeRichText } from '../resume-rich-text';

interface ResumeExperience {
  company?: string;
  role?: string;
  location?: string;
  remote?: boolean;
  startDate?: string;
  endDate?: string;
  description?: any;
}

function formatDate(iso: string) {
  const d = new Date(iso);
  return `${d.getUTCMonth() + 1}/${d.getUTCFullYear()}`;
}

export function ResumeExperience({
  company,
  role,
  location,
  remote,
  description,
  startDate,
  endDate,
}: ResumeExperience) {
  const start = formatDate(startDate || '');
  const end = endDate ? formatDate(endDate) : 'Present';
  const place = remote ? `(Remote) ${location}` : location;
  const { years, months } = differenceYearsMonths(startDate || '', endDate ?? new Date().toISOString());
  const duration = [years ? `${years}y` : '', months ? `${months}m` : ''].filter(Boolean).join(' ');
  return (
    <View style={s.expItem}>
      <Text style={s.expCompany}>{company}</Text>
      <Text style={s.expRole}>{role}</Text>
      <Text style={s.expMeta}>{`${start} – ${end}  |  ${place}  |  ${duration}`}</Text>
      <ResumeRichText content={description} />
    </View>
  );
}
