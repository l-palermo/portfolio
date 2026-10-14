import { Footer, FooterProps } from './footer';
import { Header, HeaderProps } from './header';
import { Link, LinkProps } from './link';
import { ContentfulRichText, ContentfulRichTextProps } from './contentful-rich-text';
import { Section, SectionProps } from './section';
import { CardProps } from './card';
import { PillList, PillListProps } from './pill-list';
import { Video, VideoContentProps } from './video';
import { Image, ImageProps } from './image';
import { CardWithImage } from './card-with-image';
import { ResumeColumn } from './resume-column';
import { ResumeSection } from './resume-section';
import { ResumeExperience } from './resume-experience';
import { ResumesSkillGroup } from './resume-skills-group';
import { ResumeRichText } from './resume-rich-text';
import { ResumePersonalInfo } from './resume-personal-info';
import { Resume } from './resume';
import { ResumeLanguage } from './resume-language/resume-language';

export const COMPONENT_MAP = {
  headerGroup: Header,
  card: CardWithImage,
  link: Link,
  textBlock: ContentfulRichText,
  pillList: PillList,
  section: Section,
  footer: Footer,
  videoContent: Video,
  image: Image,
  resume: Resume,
  resumeColumn: ResumeColumn,
  resumeSection: ResumeSection,
  resumeExperience: ResumeExperience,
  resumeSkillGroup: ResumesSkillGroup,
  resumeRichText: ResumeRichText,
  resumePersonalInfo: ResumePersonalInfo,
  resumeLanguage: ResumeLanguage,
};

export type ComponentMapProps = HeaderProps &
  CardProps &
  LinkProps &
  ContentfulRichTextProps &
  PillListProps &
  SectionProps &
  FooterProps &
  VideoContentProps &
  ImageProps;
