import cx from 'classnames';

import styles from './section.module.css';
import { COMPONENT_MAP } from '..';
import { Text } from '../text';
import { FieldContent } from '../../helpers/fetch-contentful/types';

interface WrapperTagProps {
  children: React.ReactNode;
  htmlRole: 'ul' | 'span';
}

const WrapperTag = ({ children, htmlRole }: WrapperTagProps) => {
  if (htmlRole === 'ul') {
    return <li>{children}</li>;
  }

  return children;
};

export interface SectionProps {
  type: 'vertical' | 'horizontal';
  title: string;
  htmlRole: 'ul' | 'span';
  fields: FieldContent[];
}

export function Section({ fields, type, title, htmlRole = 'span' }: SectionProps) {
  const Tag = htmlRole;
  return (
    <Tag key={title} className={cx(styles.section, styles[`type_${type}`], styles[`role_${htmlRole}`])}>
      {title ? (
        <Text HTMLTag="h2" variant="heading3" sentiment="primary">
          {title}
        </Text>
      ) : null}
      {Array.isArray(fields)
        ? fields.map(({ fields: _field, sys }, index) => {
          const Component = COMPONENT_MAP[sys.contentType.sys.id as keyof typeof COMPONENT_MAP];
          return (
            <WrapperTag key={`${sys.contentType.sys.id}-${index}`} htmlRole={htmlRole}>
              {Component ? <Component {..._field} /> : null}
            </WrapperTag>
          );
        })
        : null}
    </Tag>
  );
}
