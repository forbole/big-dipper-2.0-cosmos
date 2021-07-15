import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import { Typography } from '@material-ui/core';
import { useScreenSize } from '@hooks';
import CopyIcon from '@assets/icon-copy.svg';
import { getMiddleEllipsis } from '@utils/get_middle_ellipsis';
import { Box } from '@components';
import Link from 'next/link';
import { ACCOUNT_DETAILS } from '@utils/go_to_page';
import { useStyles } from './styles';
import { useAddress } from './hooks';

const Address: React.FC<{
  className?: string;
  operatorAddress: string;
  selfDelegateAddress: string;
}> = ({
  className,
  operatorAddress,
  selfDelegateAddress,
}) => {
  const { isDesktop } = useScreenSize();
  const classes = useStyles();
  const { t } = useTranslation('validators');
  const { handleCopyToClipboard } = useAddress(t);

  return (
    <>
      <Box className={classnames(className, classes.root)}>
        <div className={classnames(classes.copyText, classes.item)}>
          <Typography variant="body1" className="label">
            {t('operatorAddress')}
          </Typography>
          <div className="detail">
            <CopyIcon
              onClick={() => handleCopyToClipboard(operatorAddress)}
              className={classes.actionIcons}
            />
            <Typography variant="body1" className="value">
              {
                !isDesktop ? (
                  getMiddleEllipsis(operatorAddress, {
                    beginning: 15, ending: 5,
                  })
                ) : (
                  operatorAddress
                )
              }
            </Typography>
          </div>
        </div>

        <div className={classnames(classes.copyText, classes.item)}>
          <Typography variant="body1" className="label">
            {t('selfDelegateAddress')}
          </Typography>
          <div className="detail">
            <CopyIcon
              className={classes.actionIcons}
              onClick={() => handleCopyToClipboard(selfDelegateAddress)}
            />
            <Link href={ACCOUNT_DETAILS(selfDelegateAddress)} passHref>
              <Typography variant="body1" className="value" component="a">
                {
                !isDesktop ? (
                  getMiddleEllipsis(selfDelegateAddress, {
                    beginning: 15, ending: 5,
                  })
                ) : (
                  selfDelegateAddress
                )
              }
              </Typography>
            </Link>
          </div>
        </div>
      </Box>
    </>
  );
};

export default Address;
