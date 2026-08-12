import type { Site, Metadata, Socials } from '@types';

export const SITE: Site = {
  NAME: 'Eyal Alfasi',
  EMAIL: 'eyalalf@gmail.com',
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
};

export const HOME: Metadata = {
  TITLE: '',
  DESCRIPTION:
    'Eyal Alfasi is a senior full-stack engineer working with TypeScript, React, Node.js, and PostgreSQL.',
};

export const BLOG: Metadata = {
  TITLE: 'Blog',
  DESCRIPTION: 'Notes about software and things I’m learning.',
};

export const WORK: Metadata = {
  TITLE: 'Experience',
  DESCRIPTION:
    'A summary of Eyal Alfasi’s work experience across frontend and backend development.',
};

export const NOT_FOUND: Metadata = {
  TITLE: '404 Not Found',
  DESCRIPTION: 'The page you are looking for does not exist.',
};

export const SOCIALS: Socials = [
  {
    NAME: 'github',
    HREF: 'https://github.com/eyalalfasi',
  },
  {
    NAME: 'linkedin',
    HREF: 'https://www.linkedin.com/in/alfasi-eyal',
  },
];
