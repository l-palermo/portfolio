interface ContentTypeLink {
  sys: {
    type: 'Link';
    linkType: 'ContentType' | 'Space' | 'Environment';
    id: string;
  };
}

interface Metadata {
  tags: string[];
  concepts: string[];
}

interface FileDetails {
  size: number;
  image: { width: number; height: number };
}

interface FileField {
  url: string;
  details: FileDetails;
  fileName: string;
  contentType: string;
}

interface IconField {
  metadata: Metadata;
  sys: ContentTypeLink & { type: 'Asset'; id: string; revision: number };
  fields: {
    title: string;
    file: FileField;
  };
}

interface LinkEntry {
  metadata: Metadata;
  sys: ContentTypeLink & { type: 'Entry'; id: string; revision: number };
  fields: {
    name: string;
    url: string;
    icon: IconField;
  };
}

interface EmbeddedEntryContent {
  nodeType: 'text' | 'paragraph' | 'embedded-entry-inline';
  value?: string;
  data: {
    target?: LinkEntry;
  };
  content?: EmbeddedEntryContent[];
  marks?: { type: 'bold' }[];
}

interface TextField {
  nodeType: 'document';
  data: Record<string, any>;
  content: EmbeddedEntryContent[];
}

interface FieldContent {
  metadata: Metadata;
  sys: { type: 'Entry'; id: string; revision: number; contentType: ContentTypeLink };
  fields: {
    [key: string]: string | TextField | IconField;
  };
}

interface SysFields {
  space: ContentTypeLink;
  type: 'Entry';
  id: string;
  contentType: ContentTypeLink;
  revision: number;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
  firstPublishedAt?: string;
  publishedVersion?: number;
  environment: ContentTypeLink;
  locale: string;
}

export interface Entry {
  metadata: Metadata;
  sys: SysFields;
  fields: {
    type?: string;
    fields?: FieldContent[];
  };
}

export type ContentfulResponsePayload = Entry[];
