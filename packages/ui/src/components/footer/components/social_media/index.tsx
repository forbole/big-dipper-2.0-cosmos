import useStyles from '@/components/footer/components/social_media/styles';
import type { Props } from '@/components/footer/components/social_media/types';
import { socialMediaLinks } from '@/components/footer/components/social_media/utils';

const SocialMedia = (props: Props) => {
  const { className = '' } = props;
  const { classes } = useStyles();
  return (
    <div className={`${className} ${classes.root} social-media`}>
      {socialMediaLinks.map((x) => (
        <a
          key={x.url}
          href={x.url}
          target="_blank"
          rel="noreferrer"
          aria-label={x.className}
          className={`media ${x.className}`}
        >
          {x.component}
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
