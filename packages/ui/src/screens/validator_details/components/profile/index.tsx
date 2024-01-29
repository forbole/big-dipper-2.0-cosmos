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
import { useValidatorOverviewDetails } from '@/screens/validator_details/hooks';

const Profile: FC<{ className?: string }> = ({ className }) => {
  const { classes, cx } = useStyles();
  const display = useDisplayStyles().classes;
  const { t } = useAppTranslation('validators');
  const { state, loading } = useValidatorOverviewDetails();
  const { overview } = state;
  const { imageUrl, name } = useProfileRecoil(overview.validator);

  const pattern = /^((http|https|ftp):\/\/)/;
  let { website } = overview;

  if (!pattern.test(overview.website)) {
    website = `//${overview.website}`;
  }

  return (
    <Box className={className}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className={classes.bio}>
            <Avatar
              address={overview.operatorAddress}
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
                    address={overview.operatorAddress}
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
              {overview.description && (
                <div className="bio__content">
                  <Markdown markdown={overview.description} />
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
                {overview.website}
              </Typography>
            </div>
          </div>
        </>
      )}
    </Box>
  );
};

export default Profile;
