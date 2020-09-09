import React from 'react';
import { socialMediaLinks } from './utils';
import { useGetStyles } from './styles';
import { Props } from './types';

const SocialMedia = (props: Props) => {
  const { className = '' } = props;
  const { classes } = useGetStyles();
  return (
    <div className={`${className} ${classes.root} social-media`}>
      {socialMediaLinks.map((x) => {
        return (
          <a
            key={x.className}
            href={x.url}
            target="_blank"
            rel="noreferrer"
            className={`media ${x.className}`}
          >
            {x.component}
          </a>
        );
      })}
    </div>
  );
};

export default SocialMedia;
