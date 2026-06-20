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
      company: 'Linear Systems',
      period: '2021 — PRESENT',
      role: 'Lead Frontend Architect',
      description:
        'Orchestrating the evolution of design systems and frontend infrastructure for high-scale enterprise operations. Focused on modularity, developer ergonomics, and sub-100ms interaction latency.',
      dotFilled: true,
      highlights: [
        {
          icon: 'architecture',
          title: 'System Design',
          description: 'Engineered a multi-tenant component library serving 40+ micro-frontends.',
        },
        {
          icon: 'speed',
          title: 'Performance',
          description:
            'Reduced initial bundle sizes by 42% through automated tree-shaking and dynamic imports.',
        },
        {
          icon: 'groups',
          title: 'Leadership',
          description: 'Mentoring a team of 12 engineers across globally distributed timezones.',
        },
      ],
      tags: ['Next.js', 'TypeScript', 'Rust/WASM', 'Tailwind'],
    },
    {
      company: 'Aperture Science',
      period: '2018 — 2021',
      role: 'Senior Software Engineer',
      description:
        'Developed experimental web interfaces for data visualization and real-time sensory monitoring. Collaborated with hardware teams to bridge the gap between physical sensors and browser-based dashboards.',
      dotFilled: false,
      keyContribution: {
        imageUrl:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuA-bgUP6yhzgLSGbajvCg0mKMmTMitNik8DmaWBspHfrw0TxHVFSD4YjgOw0XVLfkvnxTecxEuh5c9dINzfOXBQ2tVQYShqqFhzJZZABNcpXvSenkD1d05mvaaOKGnOB57LAaE3T7Kl1KnqBFCu60YIK0eIN4FrR8vHThP1YezgWuD6IavRTtYfEeEIzA_Lcx-s-I5hHhi3_RPUmu39Gtbx3fFXbvqG0VVrWgjznsm_OYw6ui6UxUviaR87jsSRi85qbtFl_Qj6_bvK',
        imageAlt:
          'A high-contrast, minimalist scientific laboratory interface showing complex data visualizations in black and white.',
        points: [
          'Built a real-time WebSocket layer handling 10k+ concurrent data points.',
          'Implemented a Canvas-based visualization engine for high-frequency updates.',
        ],
      },
      tags: ['React', 'D3.js', 'WebSockets', 'GraphQL'],
    },
    {
      company: 'Ghost Foundation',
      period: '2015 — 2018',
      role: 'UI/UX Developer',
      description:
        'Pioneered the open-source publishing experience. Focused on the intersection of typography, accessibility, and editorial design for a global user base.',
      dotFilled: false,
      sideProjects: [
        {
          icon: 'edit_note',
          title: 'Ghost Editor',
          description: 'Refined the Markdown/WYSIWYG hybrid editor experience for professional writers.',
        },
        {
          icon: 'universal_currency_alt',
          title: 'Memberships',
          description: 'Core contributor to the initial implementation of native subscription logic.',
        },
      ],
      tags: ['Ember.js', 'Node.js', 'PostgreSQL', 'Design Systems'],
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
          name: 'Rust',
          description: 'High-performance systems programming with memory safety.',
          tags: ['Cargo', 'Wasm'],
        },
        {
          icon: 'dynamic_form',
          name: 'Go',
          description: 'Efficient concurrency and robust backend microservices.',
          tags: ['GRPC', 'Cloud'],
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
