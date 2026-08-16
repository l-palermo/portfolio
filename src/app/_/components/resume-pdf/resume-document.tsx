import React from 'react';
import { Document as PdfDocument, Page, View } from '@react-pdf/renderer';

import './fonts';
import type { ResumeData } from '../../helpers/fetch-resume/types';
import { s } from './styles';
import { RichText } from './components/rich-text';
import { SectionTitle } from './components/section-title';
import { NameCard } from './components/name-card';
import { ExperienceItem } from './components/experience-item';
import { SkillGroupItem } from './components/skill-group-item';
import { AwardItem } from './components/award-item';
import { LanguageItem } from './components/language-item';

function mapData(resolved: any[]): ResumeData {
  const root = resolved[0].fields;
  return {
    id: root.id,
    personalInfo: {
      id: root.personalInfo.fields.id,
      name: root.personalInfo.fields.name,
      role: root.personalInfo.fields.role,
      location: root.personalInfo.fields.location,
      links: (root.personalInfo.fields.links ?? []).map((l: any) => ({
        id: l.sys?.id ?? '',
        url: l.fields?.url ?? '',
        label: l.fields?.label ?? '',
      })),
    },
    summary: root.summary,
    experiences: (root.experiences ?? []).map((e: any) => e.fields),
    skillGroups: (root.skillGroups ?? []).map((sg: any) => sg.fields),
    awards: (root.awards ?? []).map((a: any) => a.fields),
    languages: (root.languages ?? []).map((l: any) => l.fields),
  };
}

export function ResumeDocument({ resolved }: { resolved: any[] }) {
  const data = mapData(resolved);
  return (
    <PdfDocument>
      <Page size="A4" style={s.page}>
        <View style={s.columns}>
          <View style={s.rightCol}>
            <NameCard info={data.personalInfo} />

            <View style={s.section}>
              <SectionTitle label="Skills" />
              {data.skillGroups.map((group) => (
                <SkillGroupItem key={group.id} group={group} />
              ))}
            </View>

            {data.awards.length > 0 && (
              <View style={s.section}>
                <SectionTitle label="Awards" />
                {data.awards.map((award) => (
                  <AwardItem key={award.id} award={award} />
                ))}
              </View>
            )}

            {data.languages.length > 0 && (
              <View style={s.section}>
                <SectionTitle label="Languages" />
                {data.languages.map((lang) => (
                  <LanguageItem key={lang.id} lang={lang} />
                ))}
              </View>
            )}
          </View>

          <View style={s.leftCol}>
            <View style={s.section}>
              <SectionTitle label="Summary" />
              <RichText doc={data.summary} />
            </View>

            <View style={s.section}>
              <SectionTitle label="Work Experience" />
              {data.experiences.map((exp) => (
                <ExperienceItem key={exp.id} exp={exp} />
              ))}
            </View>
          </View>
        </View>
      </Page>
    </PdfDocument>
  );
}
