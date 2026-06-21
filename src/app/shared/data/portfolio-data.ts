import { Injectable } from '@angular/core';

export interface Highlight {
  icon: string;
  title: string;
  description: string;
}

export interface KeyContribution {
  imageUrl: string;
  imageAlt: string;
  points: string[];
}

export interface SideProject {
  icon: string;
  title: string;
  description: string;
}

export interface ExperienceEntry {
  company: string;
  period: string;
  role: string;
  description: string;
  tags: string[];
  highlights?: Highlight[];
  keyContribution?: KeyContribution;
  sideProjects?: SideProject[];
  dotFilled: boolean;
}

export interface SkillCard {
  icon: string;
  name: string;
  description: string;
  tags: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  cards: SkillCard[];
}

export interface SocialLink {
  label: string;
  href: string;
}

/**
 * Single source of truth for portfolio content. Centralizing here (rather
 * than hardcoding arrays per-component) keeps pages thin and means this can
 * later be swapped for an httpResource()-backed CMS fetch without touching
 * any component template.
 */
@Injectable({ providedIn: 'root' })
export class PortfolioData {
  readonly socialLinks: SocialLink[] = [
    { label: 'GitHub', href: '#' },
    { label: 'LinkedIn', href: '#' },
    { label: 'Twitter', href: '#' },
  ];

  readonly experience: ExperienceEntry[] = [
    {
      company: 'Bangkok Commercial Asset Management',
      period: 'Aug 2024 — PRESENT',
      role: 'Full-stack Developer',
      description:
        'Building and modernizing enterprise web applications that transform complex business workflows into scalable, maintainable digital systems. Focused on data integrity, system integration, and developer productivity.',
      dotFilled: true,
      highlights: [
        {
          icon: 'architecture',
          title: 'Enterprise Systems',
          description:
            'Designed and maintained business-critical applications supporting large-scale operational workflows.',
        },
        {
          icon: 'sync_alt',
          title: 'System Integration',
          description:
            'Connected internal platforms and external services through reliable APIs and data pipelines.',
        },
        {
          icon: 'database',
          title: 'Data Migration',
          description:
            'Migrated millions of legacy records while preserving data integrity and business continuity.',
        },
        {
          icon: 'speed',
          title: 'Performance',
          description:
            'Optimized database queries and application workflows to improve responsiveness and scalability.',
        },
        {
          icon: 'web',
          title: 'Full-Stack Development',
          description:
            'Built modern web applications with robust backend services and intuitive user interfaces.',
        },
        {
          icon: 'code',
          title: 'Developer Experience',
          description:
            'Established reusable patterns and tooling to improve maintainability across development teams.',
        },
      ],
      tags: [
        'Next.js',
        'Nest.js',
        'Tailwind CSS',
        'TypeScript',
        'Javascript',
        'TypeORM',
        'Node.js',
        'MySQL',
        'Postgres',
        'Oracle',
      ],
    },
  ];

  readonly skillCategories: SkillCategory[] = [
    {
      id: 'languages',
      title: 'Languages',
      cards: [
        {
          icon: 'code',
          name: 'TypeScript',
          description: 'Type-safe development for large-scale enterprise applications.',
          tags: ['ESNext', 'OOP'],
        },
        {
          icon: 'memory',
          name: 'Java',
          description: 'High-performance systems programming with memory safety.',
          tags: ['Cargo', 'Wasm'],
        },
        {
          icon: 'terminal',
          name: 'Python',
          description: 'Data engineering, automation, and rapid prototyping.',
          tags: ['Django', 'Numpy'],
        },
      ],
    },
    {
      id: 'frontend',
      title: 'Frontend',
      cards: [
        {
          icon: 'layers',
          name: 'React',
          description: 'Component-driven architecture for modern web interfaces.',
          tags: ['Next.js', 'Zustand'],
        },
        {
          icon: 'palette',
          name: 'Tailwind CSS',
          description: 'Utility-first styling for rapid, systematic design execution.',
          tags: ['Design Tokens', 'Responsive'],
        },
        {
          icon: 'bolt',
          name: 'WebAssembly',
          description: 'Near-native performance for complex browser logic.',
          tags: ['Low Level', 'Perf'],
        },
        {
          icon: 'view_in_ar',
          name: 'Three.js',
          description: 'Immersive 3D experiences and WebGL visualizations.',
          tags: ['Shaders', 'Math'],
        },
      ],
    },
    {
      id: 'infrastructure',
      title: 'Infrastructure',
      cards: [
        {
          icon: 'package_2',
          name: 'Docker',
          description: 'Containerization for consistent deployment cycles.',
          tags: ['Kubernetes', 'CI/CD'],
        },
        {
          icon: 'database',
          name: 'PostgreSQL',
          description: 'Relational data modeling and complex query optimization.',
          tags: ['SQL', 'Prisma'],
        },
        {
          icon: 'cloud',
          name: 'AWS',
          description: 'Scalable cloud infrastructure and serverless solutions.',
          tags: ['S3', 'Lambda'],
        },
        {
          icon: 'architecture',
          name: 'Terraform',
          description: 'Infrastructure as Code for deterministic environments.',
          tags: ['HCL', 'Automation'],
        },
      ],
    },
  ];
}
