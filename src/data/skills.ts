export interface SkillGroup {
  id: string;
  title: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'languages',
    title: 'Programming Languages',
    items: ['JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Python', 'C/C++', 'SQL'],
  },
  {
    id: 'tools',
    title: 'Technologies & Tools',
    items: [
      'React.js',
      'REST APIs',
      'DOM',
      'Jest',
      'Unit & Integration Testing',
      'Git',
      'GitHub Actions',
      'Docker',
      'Firebase (GCP)',
      'PostgreSQL',
      'Linux',
      'TCP/IP',
      'Figma',
      'Agile/Scrum',
      'AI coding tools (GitHub Copilot, Claude)',
    ],
  },
  {
    id: 'spoken',
    title: 'Languages',
    items: ['English - Fluent', 'Portuguese - Fluent', 'Spanish - Beginner', 'Italian - Beginner'],
  },
];
