import { GithubIcon, LinkedinIcon, TelegramIcon, TwitterIcon } from '@/components/icons';
import React from 'react';

export const socialMediaLinks: {
  component: React.ReactNode;
  className: string;
  url: string;
}[] = [
  {
    component: <TelegramIcon />,
    className: 'telegram',
    url: 'https://t.me/forbole',
  },
  {
    component: <LinkedinIcon />,
    className: 'linkedin',
    url: 'https://www.linkedin.com/company/forbole',
  },
  {
    component: <TwitterIcon />,
    className: 'twitter',
    url: 'https://twitter.com/bigdipperlive',
  },
  {
    component: <GithubIcon />,
    className: 'github',
    url: 'https://github.com/forbole',
  },
];
