import React from 'react';
import { View, Text, Link, Svg, Path } from '@react-pdf/renderer';

import { s, COLOURS } from './resume-personal-info.style';
import { FieldContent } from '../../helpers/fetch-contentful/types';

const ICON = 9;

// All paths are 24×24 viewBox (Heroicons solid / simple-icons MIT)
function ContactIcon({ url }: { url: string }) {
  const fill = COLOURS.blue;
  if (url.startsWith('mailto:'))
    return (
      <Svg width={ICON} height={ICON} viewBox="0 0 24 24">
        <Path fill={fill} d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
        <Path
          fill={fill}
          d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"
        />
      </Svg>
    );
  if (url.startsWith('tel:'))
    return (
      <Svg width={ICON} height={ICON} viewBox="0 0 24 24">
        <Path
          fill={fill}
          d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
        />
      </Svg>
    );
  if (url.includes('linkedin.com'))
    return (
      <Svg width={ICON} height={ICON} viewBox="0 0 24 24">
        <Path
          fill={fill}
          d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
        />
      </Svg>
    );
  if (url.includes('github.com'))
    return (
      <Svg width={ICON} height={ICON} viewBox="0 0 24 24">
        <Path
          fill={fill}
          d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
        />
      </Svg>
    );
  // default: external link
  return (
    <Svg width={ICON} height={ICON} viewBox="0 0 24 24">
      <Path
        stroke={fill}
        strokeWidth={3}
        d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
      />
    </Svg>
  );
}

export interface ResumePersonalInfo {
  name?: string;
  role?: string;
  links?: FieldContent[];
}

export function ResumePersonalInfo({ name, role, links }: ResumePersonalInfo) {
  return (
    <>
      <Text style={s.name}>{name}</Text>
      <Text style={s.jobTitle}>{role}</Text>
      {links?.map(({ fields, sys }) => (
        <View key={sys.id} style={s.contactRow}>
          <View style={s.contactIcon}>
            <ContactIcon url={fields.url} />
          </View>
          <Link src={fields.url} style={s.contactLink}>
            {fields.label}
          </Link>
        </View>
      ))}
    </>
  );
}
