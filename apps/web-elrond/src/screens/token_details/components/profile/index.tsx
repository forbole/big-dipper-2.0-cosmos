import React, { FC } from 'react';
import classnames from 'classnames';
import Typography from '@mui/material/Typography';
import Box from '@/components/box';
import Avatar from '@/components/avatar';
import Markdown from '@/components/markdown';
import type { ProfileType } from '@/screens/token_details/types';
import { useStyles } from '@/screens/token_details/components/profile/styles';

const Profile: FC<{ className?: string; profile: ProfileType }> = ({ className, profile }) => {
  const classes = useStyles();

  return (
    <Box className={classnames(className)}>
      <div className={classes.bio}>
        <Avatar
          address={profile.name}
          imageUrl={profile.imageUrl}
          className={classnames(classes.avatar, classes.desktopAvatar)}
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
                className={classnames(classes.avatar, classes.mobile)}
              />
              <div className="header__content">
                <Typography variant="h2">{profile.name}</Typography>
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
