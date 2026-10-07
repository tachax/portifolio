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
    id: 'usf-ot',
    role: 'Operational Technology Infrastructure Developer',
    company: 'University of South Florida',
    location: 'Tampa, FL, USA',
    date: 'Aug 2026 – Present',
    badge: 'Part-time',
    badgeVariant: 'green',
    bullets: [
      'Validated 300+ HVAC data points by verifying point types, live values, and engineering units against the legacy system, identifying and correcting 10 configuration discrepancies before deployment.',
      'Applied UX design principles to HVAC device displays by organizing critical points (temperatures, setpoints, alarms) for fast readability, reducing the time operators need to locate key information by 80%.',
    ],
  },
  {
    id: 'usf-research',
    role: 'Research Assistant Developer',
    company: 'University of South Florida',
    location: 'Tampa, FL, USA',
    date: 'Mar 2026 – Present',
    badge: 'Research',
    badgeVariant: 'green',
    bullets: [
      'Designed and built a responsive end-to-end full-stack web platform for cognitive research using React and Firebase by aligning with stakeholders to define requirements and applying UX best practices for participants with disabilities.',
      'Developed a reaction time recording system synchronized with musical theme onset and offset timestamps, enabling accurate behavioral data collection for cognitive research.',
      'Built an admin dashboard enabling researchers to view participant response data and export it to Excel, removing the need for manual database queries.',
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
      'Independently learned TinyMCE’s plugin architecture to implement resizable PDF embeds within a rich-text editor, quickly ramping up on an unfamiliar framework to meet a deadline.',
      'Resolved a stepper state logic bug in a multi-stage job application workflow by replacing step categorization from name-based grouping to index-based tracking, ensuring accurate progress indicators across dynamic exam steps, covered by unit tests.',
      'Debugged client-side production errors reported in Sentry logs and browser developer tools by collaborating with engineers, PMs, and QA to reproduce failures across multiple environments, restoring platform stability.',
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
      'Built and shipped a full-stack feature end-to-end for a chatbot platform to manage conversation data, developing both the React frontend and the REST API endpoint with database logic, saving 8+ hours of manual testing per release cycle.',
      'Executed a database migration to remove orphaned records and resolve data inconsistencies in a company-wide relational database, improving data integrity for internal systems used across the organization.',
      'Developed using TypeScript, TypeORM, React, and Jest, writing and maintaining unit and integration tests and shipping through peer code review to ensure production-ready code.',
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