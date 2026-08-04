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
    'Eyal Alfasi is a senior full-stack engineer building durable product experiences across React, TypeScript, Node.js, and AWS.',
};

export const BLOG: Metadata = {
  TITLE: 'Blog',
  DESCRIPTION: 'A collection of articles on topics I am passionate about.',
};

export const WORK: Metadata = {
  TITLE: 'Experience',
  DESCRIPTION:
    'Eyal Alfasi’s professional experience across product engineering, frontend infrastructure, and backend systems.',
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
