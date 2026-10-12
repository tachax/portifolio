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
    role: 'Operation Technology Infrastructure Developer',
    company: 'University of South Florida',
    location: 'Tampa, FL, USA',
    date: 'Aug 2026 – Present',
    badge: 'Part-time',
    badgeVariant: 'green',
    bullets: [
      'Validated 300+ HVAC data points against a legacy system, correcting 10 configuration discrepancies in types, values, and engineering units before deployment.',
      'Built reusable HVAC display templates for 5+ device types (including VAV, SAV, and AHU), eliminating the need to build a separate display for each device.',
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
      'Engineered a full-stack React/Firebase application for 2 experimental workflows in a planned 18-session cognitive research study, translating researcher requirements into accessible interfaces.',
      'Developed reaction-time recording synchronized with musical onset and offset timestamps, validating 3 input configurations: mouse, trackpad, and iPad-connected keyboard.',
      'Built an admin dashboard with bulk Excel export, consolidating participant data into one workbook and eliminating manual collection and merging of individual records.',
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
      'Quickly learned TinyMCE’s plugin architecture to deliver resizable PDF embeds on deadline, validating functionality across 3 browsers.',
      'Fixed job-application progress tracking with index-based state tracking, validating progress indicators across 10 exam-sequence scenarios.',
      'Resolved 2 production frontend defects using Sentry and browser tools, working with engineers and QA to reproduce and validate fixes across environments.',
    ],
  },
  {
    id: 'telus-2024',
    role: 'Software Engineer Intern',
    company: 'TELUS Digital',
    location: 'São Paulo, Brazil',
    date: 'Jun 2024 – Aug 2024',
    badge: 'Internship',
    badgeVariant: 'gold',
    bullets: [
      'Shipped a full-stack React/REST API feature to delete all of a user’s conversations at once, saving an estimated 8 hours of manual testing per release (test-engineer estimate).',
      'Identified orphaned playground records in a single-conversation deletion endpoint and executed a database migration to clean inconsistent data in a company-wide relational database.',
      'Added Jest unit and integration tests for TypeScript/TypeORM bulk deletion, verifying removal of conversations, messages, and associated playground records.',
    ],
  },
  {
    id: 'brasa',
    role: 'Technology Development Analyst',
    company: 'Brazilian Student Association (BRASA)',
    location: 'USA — Remote',
    date: 'May 2023 – Aug 2024',
    badge: 'Volunteer',
    badgeVariant: 'green',
    bullets: [
      'Co-led a conference web application for 3 BRASA Conferences attended by 1,900+ participants and employers.',
      'Developed workshop selection, registration, and cancellation in React/TypeScript, supporting about 300 registrations across 8 workshops at BRASA At Home.',
      'Integrated AWS S3 image storage into a React web application, using custom hooks to retrieve and display image assets.',
    ],
  },
];
