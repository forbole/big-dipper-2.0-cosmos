import React, { FC } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@/components/box';
import Avatar from '@/components/avatar';
import Markdown from '@/components/markdown';
import { getMiddleEllipsis } from '@/utils/get_middle_ellipsis';
import { isBech32 } from '@/utils/bech32';
import useStyles from '@/screens/validator_details/components/profile/styles';
import type { ProfileType } from '@/screens/validator_details/types';

const Profile: FC<{ className?: string; profile: ProfileType }> = ({ className, profile }) => {
  const { classes, cx } = useStyles();
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
          className={cx(classes.avatar, classes.desktopAvatar)}
        />
        <div>
          <div className="bio__header">
            {/* ======================== */}
            {/* mobile header */}
            {/* ======================== */}
            <div className={classes.header}>
              <Avatar
                address={profile.name}
                imageUrl={profile.imageUrl}
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
    </Box>
  );
};

export default Profile;
