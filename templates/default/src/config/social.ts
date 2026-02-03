/**
 * Social Links Configuration
 *
 * Configure social media links for the blog
 */

import type { SocialLink } from '@jet-w/astro-blog';

/**
 * Social links
 */
export const socialLinks: SocialLink[] = [
  { type: 'github', url: 'https://github.com/jet-w', label: 'GitHub' },
  { type: 'linkedin', url: 'https://www.linkedin.com/in/jet-w/', label: 'LinkedIn' },
  { type: 'email', url: 'mailto:unisa.dady@gmail.com', label: 'Email' },
];
