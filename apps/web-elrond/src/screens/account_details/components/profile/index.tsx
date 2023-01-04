import Box from '@/components/box';
import { useScreenSize } from '@/hooks';
import { useOverview } from '@/screens/account_details/components/profile/hooks';
import { useStyles } from '@/screens/account_details/components/profile/styles';
import type { ProfileType } from '@/screens/account_details/types';
import { getMiddleEllipsis } from '@/utils/get_middle_ellipsis';
import Typography from '@mui/material/Typography';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';
import CopyIcon from 'shared-utils/assets/icon-copy.svg';

const Profile: FC<{ className?: string; profile: ProfileType }> = ({ className, profile }) => {
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
