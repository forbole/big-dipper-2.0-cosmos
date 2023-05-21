import Box from '@/components/box';
import { useOverview } from '@/screens/account_details/components/profile/hooks';
import useStyles from '@/screens/account_details/components/profile/styles';
import type { ProfileType } from '@/screens/account_details/types';
import { useDisplayStyles } from '@/styles/useSharedStyles';
import { getMiddleEllipsis } from '@/utils/get_middle_ellipsis';
import Typography from '@mui/material/Typography';
import useAppTranslation from '@/hooks/useAppTranslation';
import { FC } from 'react';
import CopyIcon from 'shared-utils/assets/icon-copy.svg';

const Profile: FC<{ className?: string; profile: ProfileType }> = ({ className, profile }) => {
  const { classes, cx } = useStyles();
  const display = useDisplayStyles().classes;
  const { t } = useAppTranslation('accounts');
  const { handleCopyToClipboard } = useOverview(t);

  return (
    <Box className={cx(classes.root, className)}>
      <div className={cx(classes.copyText, classes.item)}>
        <Typography variant="body1" className="label">
          {t('address')}
        </Typography>
        <div className="detail">
          <CopyIcon
            onClick={() => handleCopyToClipboard(profile.address)}
            className={classes.actionIcons}
          />
          <Typography variant="body1" className="value">
            <span className={display.hiddenUntilLg}>{profile.address}</span>
            <span className={display.hiddenWhenLg}>
              {getMiddleEllipsis(profile.address, {
                beginning: 15,
                ending: 5,
              })}
            </span>
          </Typography>
        </div>
      </div>

      <div className={cx(classes.copyText, classes.item)}>
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
