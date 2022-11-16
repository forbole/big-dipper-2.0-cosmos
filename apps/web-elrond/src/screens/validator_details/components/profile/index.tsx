import React from 'react';
import classnames from 'classnames';
import Typography from '@material-ui/core/Typography';
import Box from 'ui/components/box';
import Avatar from 'ui/components/avatar';
import Markdown from 'ui/components/markdown';
import { getMiddleEllipsis } from 'ui/utils/get_middle_ellipsis';
import { isBech32 } from '@utils/bech32';
import { useStyles } from './styles';
import type { ProfileType } from '../../types';

const Profile: React.FC<{ profile: ProfileType } & ComponentDefault> = ({ className, profile }) => {
  const classes = useStyles();
  let { name } = profile;
  if (isBech32(name)) {
    name = getMiddleEllipsis(profile.name, {
      beginning: 10,
      ending: 8,
    });
  }

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
