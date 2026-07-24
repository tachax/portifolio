export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  date: string;
  badge: string;
  badgeVariant: 'green' | 'gold';
  bullets: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: 'usf-research',
    role: 'Research Assistant Developer',
    company: 'University of South Florida',
    location: 'Tampa, FL, USA',
    date: 'Mar 2026 – Present',
    badge: 'Research',
    badgeVariant: 'green',
    bullets: [
      'Designed and developed a full-stack web platform for clinical cognitive research using React and Firebase, applying UX best practices for older adults and individuals with MCI.',
      'Implemented a music attention task with real-time reaction time recording relative to musical theme onset and offset timestamps.',
      'Deployed two independent study conditions to Firebase Hosting via GitHub Actions CI/CD pipeline, maintaining separate React branches for controlled experimental conditions.',
    ],
  },
  {
    id: 'telus-2025',
    role: 'Software Engineer Intern',
    company: 'TELUS Digital',
    location: 'Durham, NC, USA',
    date: 'Jun 2025 – Aug 2025',
    badge: 'Internship',
    badgeVariant: 'gold',
    bullets: [
      'Enhanced a React-based platform by refactoring document handling and improving system reliability, enabling more scalable content workflows across enterprise tools.',
      'Resolved stepper state logic bug in a multi-stage job application workflow by replacing step categorization from name-based grouping to index-based tracking.',
      'Debugged client-side production errors reported in Sentry logs by reproducing failures across multiple environments and removing an obsolete CSS file.',
    ],
  },
  {
    id: 'telus-2024',
    role: 'Software Engineer Intern',
    company: 'TELUS Digital',
    location: 'São Paulo, SP, Brazil',
    date: 'Jun 2024 – Aug 2024',
    badge: 'Internship',
    badgeVariant: 'gold',
    bullets: [
      'Built a full-stack feature for a chatbot platform to manage conversation data, integrating React frontend with backend database operations and improving automated test efficiency by 8+ hours.',
      'Executed a database migration to remove orphaned records and resolve data inconsistencies in a large-scale relational schema.',
      'Developed using TypeScript, TypeORM, React, and Jest, ensuring maintainable code and reliable unit test coverage.',
    ],
  },
  {
    id: 'brasa',
    role: 'Tech Development Analyst',
    company: 'Brazilian Student Association (BRASA)',
    location: 'USA — Remote',
    date: 'May 2023 – Aug 2024',
    badge: 'Volunteer',
    badgeVariant: 'green',
    bullets: [
      'Co-led development of a web application for BRASA Conferences attended by approximately 1,900+ participants and employers across all 3 BRASA events.',
      'Developed a workshop registration feature enabling participants to choose, register, and cancel registrations using React and TypeScript.',
    ],
  },
];