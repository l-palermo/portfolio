import { Footer, FooterProps } from './footer';
import { Header, HeaderProps } from './header';
import { Link, LinkProps } from './link';
import { ContentfulRichText, ContentfulRichTextProps } from './contentful-rich-text';
import { Section, SectionProps } from './section';
import { Card, CardProps } from './card';
import { PillList, PillListProps } from './pill-list';
import { Video, VideoContentProps } from './video';
import { Image, ImageProps } from './image';

export const COMPONENT_MAP = {
  headerGroup: Header,
  card: Card,
  link: Link,
  textBlock: ContentfulRichText,
  pillList: PillList,
  section: Section,
  footer: Footer,
  videoContent: Video,
  image: Image,
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
