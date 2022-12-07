import React from 'react';
import {
  TelegramIcon,
  LinkedinIcon,
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
} from '@icons';

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
  {
    component: <DiscordIcon />,
    className: 'discord',
    url: 'https://discord.com/channels/963778337904427018/963780976239063060',
  },
];
