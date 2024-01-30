import Avatar from '@/components/avatar';
import Box from '@/components/box';
import Markdown from '@/components/markdown';
import { useProfileRecoil } from '@/recoil/profiles/hooks';
import useStyles from '@/screens/validator_details/components/profile/styles';
import { useDisplayStyles } from '@/styles/useSharedStyles';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import useAppTranslation from '@/hooks/useAppTranslation';
import { FC } from 'react';
import Loading from '@/components/loading';
import type { OverviewType } from '@/screens/validator_details/types';

const Profile: FC<{ className?: string; profile: OverviewType; loading: boolean }> = ({
  className,
  profile,
  loading,
}) => {
  const { classes, cx } = useStyles();
  const display = useDisplayStyles().classes;
  const { t } = useAppTranslation('validators');
  const { imageUrl, name } = useProfileRecoil(profile.validator);

  const pattern = /^((http|https|ftp):\/\/)/;
  let { website } = profile;

  if (!pattern.test(profile.website)) {
    website = `//${profile.website}`;
  }

  return (
    <Box className={className}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className={classes.bio}>
            <Avatar
              address={profile.operatorAddress}
              imageUrl={imageUrl ?? undefined}
              className={cx(classes.avatar, display.hiddenUntilLg)}
            />
            <div>
              <div className="bio__header">
                {/* ======================== */}
                {/* hiddenWhenLg header */}
                {/* ======================== */}
                <div className={classes.header}>
                  <Avatar
                    address={profile.operatorAddress}
                    imageUrl={imageUrl ?? undefined}
                    className={cx(classes.avatar, display.hiddenWhenLg)}
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
        </>
      )}
    </Box>
  );
};

export default Profile;
