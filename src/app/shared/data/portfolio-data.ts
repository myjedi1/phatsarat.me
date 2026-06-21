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
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/phatsarat-arjharnsiriwong-504b10301/' },
    { label: 'GitHub', href: 'https://github.com/myjedi1' },
    { label: 'Instragram', href: 'https://www.instagram.com/myjedi.p/' },
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
          icon: 'code',
          name: 'JavaScript',
          description: 'Building dynamic web experiences with modern browser and runtime APIs.',
          tags: ['ESNext', 'DOM', 'Node.js'],
        },
        {
          icon: 'database',
          name: 'SQL',
          description:
            'Designing and optimizing relational databases for reliable data management.',
          tags: ['Query Optimization', 'Data Modeling', 'Joins'],
        },
        {
          icon: 'memory',
          name: 'Java',
          description: 'High-performance systems programming with memory safety.',
          tags: [],
        },
        {
          icon: 'terminal',
          name: 'Python',
          description: 'Data engineering, automation, and rapid prototyping.',
          tags: [],
        },
      ],
    },
    {
      id: 'frontend',
      title: 'Frontend',
      cards: [
        {
          icon: 'web',
          name: 'Angular',
          description:
            'Building enterprise-grade applications with scalable architectures and reusable components.',
          tags: ['TypeScript', 'RxJS', 'Standalone Components'],
        },
        {
          icon: 'rocket_launch',
          name: 'Next.js',
          description:
            'Creating production-ready web applications with modern routing and rendering strategies.',
          tags: ['SSR', 'App Router', 'SEO'],
        },
        {
          icon: 'palette',
          name: 'Tailwind CSS',
          description:
            'Crafting responsive interfaces through utility-first styling and consistent design systems.',
          tags: ['Responsive Design', 'Accessibility', 'UI Systems'],
        },
        {
          icon: 'dashboard_customize',
          name: 'Material Design',
          description:
            'Building intuitive user experiences using proven design patterns and components.',
          tags: ['Angular Material', 'UX', 'Accessibility'],
        },
      ],
    },
    {
      id: 'backend',
      title: 'Backend',
      cards: [
        {
          icon: 'hub',
          name: 'NestJS',
          description:
            'Structured backend framework for building maintainable and scalable services.',
          tags: ['Dependency Injection', 'Modules', 'Guards'],
        },
        {
          icon: 'dns',
          name: 'Node.js',
          description: 'Server-side JavaScript runtime for scalable and event-driven applications.',
          tags: ['Express', 'REST API', 'Async'],
        },
        {
          icon: 'account_tree',
          name: 'TypeORM',
          description: 'Object-relational mapping for managing complex database interactions.',
          tags: ['Repositories', 'Migrations', 'Query Builder'],
        },
        {
          icon: 'api',
          name: 'REST APIs',
          description:
            'Standardized communication layer for integrating services and applications.',
          tags: ['JSON', 'Authentication', 'OpenAPI'],
        },
      ],
    },
    {
      id: 'database',
      title: 'Database',
      cards: [
        {
          icon: 'storage',
          name: 'MySQL',
          description:
            'Reliable relational database for web applications and high-volume transactional systems.',
          tags: ['Indexing', 'Replication', 'Optimization'],
        },
        {
          icon: 'database',
          name: 'PostgreSQL',
          description:
            'Feature-rich database engine designed for scalability, integrity, and analytical workloads.',
          tags: ['JSONB', 'CTEs', 'Extensions'],
        },
        {
          icon: 'dns',
          name: 'Oracle Database',
          description:
            'Mission-critical database platform used in enterprise environments and large-scale operations.',
          tags: ['PL/SQL', 'Performance', 'Data Modeling'],
        },
        {
          icon: 'hub',
          name: 'MongoDB',
          description:
            'Document-oriented database for flexible schemas and rapidly evolving application data.',
          tags: ['Aggregation', 'Document Model', 'Atlas'],
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
          description:
            'Containerizing applications to ensure consistent development and deployment environments.',
          tags: ['Containers', 'Docker Compose', 'Images'],
        },
        {
          icon: 'sync',
          name: 'Jenkins',
          description:
            'Automating build, testing, and deployment workflows through CI/CD pipelines.',
          tags: ['CI/CD', 'Automation', 'Pipelines'],
        },
        {
          icon: 'hub',
          name: 'Apache Kafka',
          description:
            'Event-driven messaging platform for reliable communication between distributed systems.',
          tags: ['Pub/Sub', 'Streaming', 'Messaging'],
        },
        {
          icon: 'source',
          name: 'GitHub',
          description:
            'Collaborative development platform for source control and project management.',
          tags: ['Pull Requests', 'Actions', 'Code Review'],
        },
        {
          icon: 'merge_type',
          name: 'GitLab',
          description:
            'Managing repositories, pipelines, and development workflows across engineering teams.',
          tags: ['CI/CD', 'Merge Requests', 'DevOps'],
        },
        {
          icon: 'account_tree',
          name: 'Git Flow',
          description:
            'Structured branching strategy for managing releases and parallel development.',
          tags: ['Branching', 'Releases', 'Version Control'],
        },
        {
          icon: 'admin_panel_settings',
          name: 'Azure AD',
          description:
            'Identity and access management for enterprise authentication and authorization.',
          tags: ['SSO', 'OAuth', 'Directory Services'],
        },
      ],
    },
  ];
}
