import Avatar from '@/components/avatar';
import Box from '@/components/box';
import Markdown from '@/components/markdown';
import { useProfileRecoil } from '@/recoil/profiles/hooks';
import useStyles from '@/screens/validator_details/components/profile/styles';
import type { OverviewType } from '@/screens/validator_details/types';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

const Profile: FC<{ className?: string; profile: OverviewType }> = ({ className, profile }) => {
  const { classes, cx } = useStyles();
  const { t } = useTranslation('validators');
  const { imageUrl, name } = useProfileRecoil(profile.validator);

  const pattern = /^((http|https|ftp):\/\/)/;
  let { website } = profile;

  if (!pattern.test(profile.website)) {
    website = `//${profile.website}`;
  }

  return (
    <Box className={className}>
      <div className={classes.bio}>
        <Avatar
          address={profile.operatorAddress}
          imageUrl={imageUrl ?? undefined}
          className={cx(classes.avatar, classes.desktopAvatar)}
        />
        <div>
          <div className="bio__header">
            {/* ======================== */}
            {/* mobile header */}
            {/* ======================== */}
            <div className={classes.header}>
              <Avatar
                address={profile.operatorAddress}
                imageUrl={imageUrl ?? undefined}
                className={cx(classes.avatar, classes.mobile)}
              />
              <div className="header__content">
                <Typography variant="h2">{name}</Typography>
              </div>
            </div>
          </div>
          {/* ======================== */}
          {/* bio */}
          {/* ======================== */}
          {profile.description && (
            <div className="bio__content">
              <Markdown markdown={profile.description} />
            </div>
          )}
        </div>
      </div>

      <Divider className={classes.divider} />
      <div>
        <div className={classes.item}>
          <Typography variant="h4" className="label">
            {t('website')}
          </Typography>
          <Typography
            variant="body1"
            className="value"
            component="a"
            href={website}
            target="_blank"
            rel="noreferrer"
          >
            {profile.website}
          </Typography>
        </div>
      </div>
    </Box>
  );
};

export default Profile;
