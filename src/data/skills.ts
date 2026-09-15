export interface SkillGroup {
  id: string;
  title: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'languages',
    title: 'Programming Languages',
    items: ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'C/C++', 'Python', 'Java'],
  },
  {
    id: 'tools',
    title: 'Technologies & Tools',
    items: ['React.js', 'Node.js', 'PostgreSQL', 'SQL', 'Git', 'GitHub', 'Docker', 'Linux', 'Agile', 'Jest', 'Firebase'],
  },
  {
    id: 'spoken',
    title: 'Languages',
    items: ['English - Fluent', 'Portuguese - Fluent', 'Spanish - Beginner', 'Italian - Beginner'],
  },
];
