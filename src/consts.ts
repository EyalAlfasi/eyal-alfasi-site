import type { Site, Metadata, Socials } from '@types';

export const SITE: Site = {
  NAME: 'Eyal Alfasi',
  EMAIL: 'eyalalf@gmail.com',
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: 'Home',
  DESCRIPTION: 'Astro Nano is a minimal and lightweight blog and portfolio.',
};

export const BLOG: Metadata = {
  TITLE: 'Blog',
  DESCRIPTION: 'A collection of articles on topics I am passionate about.',
};

export const WORK: Metadata = {
  TITLE: 'Work',
  DESCRIPTION: 'Where I have worked and what I have done.',
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
