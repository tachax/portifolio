import { FaBrain, FaGlobe } from 'react-icons/fa';
import type { IconType } from 'react-icons';

export interface Project {
  id: string;
  category: string;
  icon: IconType;
  title: string;
  org: string;
  date: string;
  description: string;
  tags: string[];
  variant: 'green' | 'gold';
  demo?: {
    label: string;
    src: string; // path in /public (e.g. /videos/x.mp4) or a Google Drive /preview link
    poster?: string;
  };
}

export const projects: Project[] = [
  {
    id: 'cognitive-research',
    category: 'RESEARCH · FULL-STACK',
    icon: FaBrain,
    title: 'Cognitive Research Platform',
    org: 'University of South Florida',
    date: 'Mar 2026 – Present',
    description:
      'Full-stack React/Firebase app for 2 experimental workflows in an 18-session cognitive study, with reaction-time recording synced to music timestamps and an admin dashboard with bulk Excel export.',
    tags: ['React', 'Firebase', 'GitHub Actions', 'UX Research', 'Accessibility'],
    variant: 'green',
  },
  {
    id: 'brasa-conference',
    category: 'COMMUNITY · WEB APP',
    icon: FaGlobe,
    title: 'BRASA Conference App',
    org: 'Brazilian Student Association',
    date: 'May 2023 – Aug 2024',
    description:
      'Conference web app for 3 BRASA events with 1,900+ participants and employers. Built workshop selection, registration, and cancellation, supporting ~300 registrations across 8 workshops.',
    tags: ['React', 'TypeScript', 'AWS S3', 'REST API'],
    variant: 'green',
    demo: {
      label: 'Take a quick peek at the registration feature I built',
      src: '/videos/brasa-registration.mp4',
    },
  },
  // {
  //   id: 'enterprise-content',
  //   category: 'ENTERPRISE · INTERNSHIP',
  //   icon: FaBolt,
  //   title: 'Enterprise Content Platform',
  //   org: 'TELUS Digital',
  //   date: 'Jun – Aug 2025',
  //   description:
  //     'Delivered resizable PDF embeds via TinyMCE plugins, fixed job-application progress tracking across 10 exam-sequence scenarios, and resolved 2 production defects with Sentry.',
  //   tags: ['React', 'TypeScript', 'TinyMCE', 'Sentry', 'Jest'],
  //   variant: 'gold',
  // },
  // {
  //   id: 'chatbot-data',
  //   category: 'FULL-STACK · INTERNSHIP',
  //   icon: FaRobot,
  //   title: 'Chatbot Data Platform',
  //   org: 'TELUS Digital · Brazil',
  //   date: 'Jun – Aug 2024',
  //   description:
  //     'Shipped a React/REST API bulk-delete feature for conversations, saving ~8 hours of manual testing per release, plus a database migration to clean orphaned records.',
  //   tags: ['React', 'TypeScript', 'TypeORM', 'Jest', 'PostgreSQL'],
  //   variant: 'green',
  // },
];
