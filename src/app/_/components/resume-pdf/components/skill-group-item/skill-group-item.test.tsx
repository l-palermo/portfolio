import { render, screen } from '@testing-library/react';

import { SkillGroupItem } from './skill-group-item';

const defaultProps = {
  group: {
    id: 'testing',
    category: 'Testing',
    skills: ['Jest', 'Playwright', 'Cypress'],
  },
};

describe('SkillGroupItem', () => {
  it('should render the category name', () => {
    render(<SkillGroupItem {...defaultProps} />);
    expect(screen.getByText('Testing')).toBeVisible();
  });

  it('should render all skills in the output', () => {
    const { container } = render(<SkillGroupItem {...defaultProps} />);
    defaultProps.group.skills.forEach((skill) => {
      expect(container).toHaveTextContent(skill);
    });
  });

  it('should render separators between skills but not after the last', () => {
    const { container } = render(<SkillGroupItem {...defaultProps} />);
    const text = container.textContent ?? '';
    const separatorCount = (text.match(/·/g) ?? []).length;
    expect(separatorCount).toBe(defaultProps.group.skills.length - 1);
  });

  it('should render a single skill with no separator', () => {
    const { container } = render(<SkillGroupItem group={{ ...defaultProps.group, skills: ['OnlySkill'] }} />);
    expect(container).toHaveTextContent('OnlySkill');
    expect(container.textContent).not.toContain('·');
  });
});
