import Avatar from '@/components/avatar';
import Box from '@/components/box';
import Markdown from '@/components/markdown';
import useStyles from '@/screens/validator_details/components/profile/styles';
import type { ProfileType } from '@/screens/validator_details/types';
import { useDisplayStyles } from '@/styles/useSharedStyles';
import { isBech32 } from '@/utils/bech32';
import { getMiddleEllipsis } from '@/utils/get_middle_ellipsis';
import Typography from '@mui/material/Typography';
import { FC } from 'react';

const Profile: FC<{ className?: string; profile: ProfileType }> = ({ className, profile }) => {
  const { classes, cx } = useStyles();
  const display = useDisplayStyles().classes;
  let { name } = profile;
  if (isBech32(name)) {
    name = getMiddleEllipsis(profile.name, {
      beginning: 10,
      ending: 8,
    });
  }

  return (
    <Box className={className}>
      <div className={classes.bio}>
        <Avatar
          address={profile.name}
          imageUrl={profile.imageUrl}
          className={cx(classes.avatar, display.hiddenUntilLg)}
        />
        <div>
          <div className="bio__header">
            {/* ======================== */}
            {/* hiddenWhenLg header */}
            {/* ======================== */}
            <div className={classes.header}>
              <Avatar
                address={profile.name}
                imageUrl={profile.imageUrl}
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
    </Box>
  );
};

export default Profile;
