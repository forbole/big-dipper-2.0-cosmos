import Box from '@/components/box';
import { useScreenSize } from '@/hooks';
import { useProfile } from '@/screens/node_details/components/profile/hooks';
import useStyles from '@/screens/node_details/components/profile/styles';
import type { ProfileType } from '@/screens/node_details/types';
import { getMiddleEllipsis } from '@/utils/get_middle_ellipsis';
import { VALIDATOR_DETAILS } from '@/utils/go_to_page';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import { FC } from 'react';
import CopyIcon from 'shared-utils/assets/icon-copy.svg';

const Profile: FC<{ className?: string; profile: ProfileType; showRating: boolean }> = (props) => {
  const { t } = useTranslation('nodes');
  const { classes, cx } = useStyles();
  const { isDesktop } = useScreenSize();
  const { handleCopyToClipboard } = useProfile(t);

  let ellipsis = {
    beginning: 15,
    ending: 5,
  };

  if (isDesktop) {
    ellipsis = {
      beginning: 20,
      ending: 20,
    };
  }

  let validator = null;

  if (props.profile?.validator) {
    validator = (
      <div className="detail">
        <Link shallow href={VALIDATOR_DETAILS(props.profile?.identity)} className="value">
          {getMiddleEllipsis(props.profile?.validator, ellipsis)}
        </Link>
      </div>
    );
  } else {
    validator = (
      <div className="detail">
        <Typography variant="body1" className="value" component="a">
          -
        </Typography>
      </div>
    );
  }

  return (
    <Box className={props.className}>
      <div className={classes.topWrapper}>
        <div className={classes.nametag}>
          <Typography variant="h2" className="name">
            {props.profile?.name}
          </Typography>
          <Typography className="version">({props.profile?.version})</Typography>
        </div>
        {!!props.showRating && (
          <Typography className={classes.rating}>
            {t('rating')} {props.profile?.rating}%
          </Typography>
        )}
      </div>
      <Divider className={classes.divider} />
      <div className={classes.addresses}>
        <div className={cx(classes.copyText, classes.item)}>
          <Typography variant="body1" className="label">
            {t('pubkey')}
          </Typography>
          <div className="detail">
            <CopyIcon
              onClick={() => handleCopyToClipboard(props.profile?.pubkey)}
              className={classes.actionIcons}
            />
            <Typography variant="body1" className="value">
              {getMiddleEllipsis(props.profile?.pubkey, ellipsis)}
            </Typography>
          </div>
        </div>

        <div className={cx(classes.copyText, classes.item)}>
          <Typography variant="body1" className="label">
            {t('validator')}
          </Typography>
          {validator}
        </div>
      </div>
    </Box>
  );
};

export default Profile;
