import Box from '@/components/box';
import { useProfile } from '@/screens/node_details/components/profile/hooks';
import useStyles from '@/screens/node_details/components/profile/styles';
import type { ProfileType } from '@/screens/node_details/types';
import { useDisplayStyles } from '@/styles/useSharedStyles';
import { getMiddleEllipsis } from '@/utils/get_middle_ellipsis';
import { VALIDATOR_DETAILS } from '@/utils/go_to_page';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import useAppTranslation from '@/hooks/useAppTranslation';
import Link from 'next/link';
import { FC } from 'react';
import CopyIcon from 'shared-utils/assets/icon-copy.svg';

const Profile: FC<{ className?: string; profile: ProfileType; showRating: boolean }> = (props) => {
  const { t } = useAppTranslation('nodes');
  const { classes, cx } = useStyles();
  const display = useDisplayStyles().classes;
  const { handleCopyToClipboard } = useProfile(t);

  let validator = null;

  if (props.profile?.validator) {
    validator = (
      <div className="detail">
        <Link shallow href={VALIDATOR_DETAILS(props.profile?.identity)} className="value">
          <span className={display.hiddenUntilLg}>
            {getMiddleEllipsis(props.profile?.validator, {
              beginning: 20,
              ending: 20,
            })}
          </span>
          <span className={display.hiddenWhenLg}>
            {getMiddleEllipsis(props.profile?.validator, {
              beginning: 15,
              ending: 5,
            })}
          </span>
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
              <span className={display.hiddenUntilLg}>
                {getMiddleEllipsis(props.profile?.pubkey, {
                  beginning: 20,
                  ending: 20,
                })}
              </span>
              <span className={display.hiddenWhenLg}>
                {getMiddleEllipsis(props.profile?.pubkey, {
                  beginning: 15,
                  ending: 5,
                })}
              </span>
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
