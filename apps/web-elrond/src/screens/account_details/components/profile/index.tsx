import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import { Typography } from '@material-ui/core';
import { useScreenSize } from '@hooks';
import CopyIcon from 'shared-utils/assets/icon-copy.svg';
import { getMiddleEllipsis } from 'ui/utils/get_middle_ellipsis';
import Box from '@components/box';
import { useStyles } from './styles';
import { useOverview } from './hooks';
import { ProfileType } from '../../types';

const Profile: React.FC<{ profile: ProfileType } & ComponentDefault> = ({ className, profile }) => {
  const { isDesktop } = useScreenSize();
  const classes = useStyles();
  const { t } = useTranslation('accounts');
  const { handleCopyToClipboard } = useOverview(t);

  return (
    <Box className={classnames(className, classes.root)}>
      <div className={classnames(classes.copyText, classes.item)}>
        <Typography variant="body1" className="label">
          {t('address')}
        </Typography>
        <div className="detail">
          <CopyIcon
            onClick={() => handleCopyToClipboard(profile.address)}
            className={classes.actionIcons}
          />
          <Typography variant="body1" className="value">
            {!isDesktop
              ? getMiddleEllipsis(profile.address, {
                  beginning: 15,
                  ending: 5,
                })
              : profile.address}
          </Typography>
        </div>
      </div>

      <div className={classnames(classes.copyText, classes.item)}>
        <Typography variant="body1" className="label">
          {t('user')}
        </Typography>
        <div className="detail">
          <Typography variant="body1" className="value">
            {profile.username || '-'}
          </Typography>
        </div>
      </div>
    </Box>
  );
};

export default Profile;
