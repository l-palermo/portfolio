import type { Document } from '@contentful/rich-text-types';

export interface ResumeLinkFields {
  id: string;
  url: string;
  label: string;
  iconUrl?: string;
}

export interface ResumePersonalInfo {
  id: string;
  name: string;
  role: string;
  location: string;
  links: ResumeLinkFields[];
}

export interface ResumeExperience {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate?: string;
  location: string;
  remote: boolean;
  description: Document;
}

export interface ResumeSkillGroup {
  id: string;
  category: string;
  skills: string[];
}

export interface ResumeAward {
  id: string;
  title: string;
  description: string;
}

export interface ResumeLanguage {
  id: string;
  language: string;
  level: number;
}

export interface ResumeData {
  id: string;
  personalInfo: ResumePersonalInfo;
  summary: Document;
  experiences: ResumeExperience[];
  skillGroups: ResumeSkillGroup[];
  awards: ResumeAward[];
  languages: ResumeLanguage[];
}
