import { FaBrain, FaGlobe, FaBolt, FaRobot } from 'react-icons/fa';
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
      'Full-stack web platform for clinical cognitive research, designed with UX best practices to serve older adults and individuals with MCI. Built with React and Firebase, deployed via CI/CD.',
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
      'Web application serving 1,900+ participants and employers across 3 BRASA events. Features a full workshop registration system with real-time availability, conflict detection, and cancellation flows.',
    tags: ['React', 'TypeScript', 'Node.js', 'REST API'],
    variant: 'green',
  },
  {
    id: 'enterprise-content',
    category: 'ENTERPRISE · INTERNSHIP',
    icon: FaBolt,
    title: 'Enterprise Content Platform',
    org: 'TELUS Digital',
    date: 'Jun – Aug 2025',
    description:
      'Refactored document handling on a React-based enterprise platform for scalable content workflows. Fixed critical stepper state logic and resolved Sentry-reported client-side production errors.',
    tags: ['React', 'TypeScript', 'Sentry', 'Jest', 'CSS'],
    variant: 'gold',
  },
  {
    id: 'chatbot-data',
    category: 'FULL-STACK · INTERNSHIP',
    icon: FaRobot,
    title: 'Chatbot Data Platform',
    org: 'TELUS Digital · Brazil',
    date: 'Jun – Aug 2024',
    description:
      'Built a full-stack feature for managing conversation data in a chatbot platform. Integrated React frontend with database operations and improved automated test efficiency by 8+ hours.',
    tags: ['React', 'TypeScript', 'TypeORM', 'Jest', 'PostgreSQL'],
    variant: 'green',
  },
];
