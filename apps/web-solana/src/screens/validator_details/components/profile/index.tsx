import React from 'react';
import classnames from 'classnames';
import {
  Typography,
  Divider,
} from '@material-ui/core';
import useTranslation from 'next-translate/useTranslation';
import {
  Box,
  Avatar,
  Markdown,
} from '@components';
import { useProfileRecoil } from '@recoil/profiles';
import { useStyles } from './styles';
import { OverviewType } from '../../types';

const Profile: React.FC<OverviewType & {
  className?: string;
}> = ({
  className, ...data
}) => {
  const classes = useStyles();
  const { t } = useTranslation('validators');
  const validator = useProfileRecoil(data.validator);

  const pattern = /^((http|https|ftp):\/\/)/;
  let { website } = data;

  if (!pattern.test(data.website)) {
    website = `//${data.website}`;
  }

  const formattedItem = {
    website: (
      <Typography
        variant="body1"
        className="value"
        component="a"
        href={website}
        target="_blank"
        rel="noreferrer"
      >
        {data.website}
      </Typography>
    ),
  };
  return (
    <Box className={classnames(className)}>
      <div className={classes.bio}>
        <Avatar
          address={data.identity}
          imageUrl={validator.imageUrl}
          className={classnames(classes.avatar, classes.desktopAvatar)}
        />
        <div>
          <div className="bio__header">
            {/* ======================== */}
            {/* mobile header */}
            {/* ======================== */}
            <div className={classes.header}>
              <Avatar
                address={data.identity}
                imageUrl={validator.imageUrl}
                className={classnames(classes.avatar, classes.mobile)}
              />
              <div className="header__content">
                <Typography variant="h2">
                  {validator.name}
                </Typography>
              </div>
            </div>
          </div>
          {/* ======================== */}
          {/* bio */}
          {/* ======================== */}
          {data.description && (
            <div className="bio__content">
              <Markdown markdown={data.description} />
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
          {formattedItem.website}
        </div>
      </div>
    </Box>
  );
};

export default Profile;
