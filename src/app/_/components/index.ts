import { Footer } from './footer';
import { Header } from './header';
import { Link } from './link';
import { contentfulRichText } from './contentful-rich-text';
import { Section } from './section';
import { Card } from './card';
import { PillList } from './pill-list';
import { Video } from './video';
import { Image } from './image';

export const COMPONENT_MAP = {
  headerGroup: Header,
  card: Card,
  link: Link,
  textBlock: contentfulRichText,
  pillList: PillList,
  section: Section,
  footer: Footer,
  videoContent: Video,
  image: Image,
};
