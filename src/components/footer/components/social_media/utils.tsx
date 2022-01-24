import React from 'react';
import {
  TelegramIcon,
  LinkedinIcon,
  TwitterIcon,
  GithubIcon,
} from '@icons';

export const socialMediaLinks:{
  component: React.ReactNode;
  className: string;
  url: string;
}[] = [
  {
    component: <TelegramIcon />,
    className: 'telegram',
    url: 'https://t.me/cudostelegram',
  },
  {
    component: <LinkedinIcon />,
    className: 'linkedin',
    url: 'https://www.linkedin.com/company/cudos1',
  },
  {
    component: <TwitterIcon />,
    className: 'twitter',
    url: 'https://twitter.com/CUDOS_',
  },
  {
    component: <GithubIcon />,
    className: 'github',
    url: 'https://github.com/CudoVentures',
  },
];
