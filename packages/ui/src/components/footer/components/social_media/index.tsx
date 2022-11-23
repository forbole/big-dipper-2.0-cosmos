import React from 'react';
import { socialMediaLinks } from '@/components/footer/components/social_media/utils';
import { useStyles } from '@/components/footer/components/social_media/styles';
import type { Props } from '@/components/footer/components/social_media/types';

const SocialMedia = (props: Props) => {
  const { className = '' } = props;
  const classes = useStyles();
  return (
    <div className={`${className} ${classes.root} social-media`}>
      {socialMediaLinks.map((x) => (
        <a
          key={x.className}
          href={x.url}
          target="_blank"
          rel="noreferrer"
          className={`media ${x.className}`}
        >
          {x.component}
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
