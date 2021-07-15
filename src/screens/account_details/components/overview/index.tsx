import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import {
  Typography,
  Dialog,
} from '@material-ui/core';
import QRCode from 'qrcode.react';
import { useScreenSize } from '@hooks';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  TelegramShareButton,
  TelegramIcon,
  WhatsappShareButton,
  WhatsappIcon,
  EmailShareButton,
  EmailIcon,
} from 'react-share';
import CopyIcon from '@assets/icon-copy.svg';
import ShareIcon from '@assets/icon-share.svg';
import { getMiddleEllipsis } from '@utils/get_middle_ellipsis';
import { Box } from '@components';
import { useStyles } from './styles';
import { useOverview } from './hooks';

const Overview: React.FC<{
  className?: string;
  withdrawalAddress: string;
  address: string;
}> = ({
  className,
  address,
  withdrawalAddress,
}) => {
  const { isDesktop } = useScreenSize();
  const classes = useStyles();
  const { t } = useTranslation('accounts');
  const {
    open,
    handleClose,
    handleOpen,
    handleCopyToClipboard,
  } = useOverview(t);

  const url = `${process.env.NEXT_PUBLIC_URL}/accounts/${address}`;
  const hashTags = ['bigdipperexplorer', 'bigdipper'];
  return (
    <>
      <Dialog
        maxWidth="xl"
        onClose={handleClose}
        aria-labelledby="simple-dialog-title"
        open={open}
      >
        <Box className={classes.dialog}>
          <Typography variant="body1" align="center">
            {t('scanForAddress')}
          </Typography>
          <QRCode
            value={address}
            size={200}
            bgColor="#ffffff"
            fgColor="#000000"
            renderAs="svg"
          />
          <div className="dialog__share--wrapper">
            <Typography variant="body1">
              {t('shareTo')}
            </Typography>
            <div className={classes.icons}>
              <FacebookShareButton
                url={url}
                quote={address}
                hashtag={hashTags[0]}
                className="share-buttons"
              >
                <FacebookIcon
                  round
                />
              </FacebookShareButton>
              <TwitterShareButton
                url={url}
                title={address}
                hashtags={hashTags}
                className="share-buttons"
              >
                <TwitterIcon
                  round
                />
              </TwitterShareButton>

              <TelegramShareButton
                url={url}
                title={address}
                className="share-buttons"
              >
                <TelegramIcon
                  round
                />
              </TelegramShareButton>

              <WhatsappShareButton
                url={url}
                title={address}
                separator=":: "
                className="share-buttons"
              >
                <WhatsappIcon
                  round
                />
              </WhatsappShareButton>
              <EmailShareButton
                url={url}
                subject="address"
                body={address}
                separator=":: "
                className="share-buttons email"
              >
                <EmailIcon
                  round
                />
              </EmailShareButton>
            </div>
          </div>
        </Box>
      </Dialog>
      <Box className={classnames(className, classes.root)}>
        <div className={classnames(classes.copyText, classes.item)}>
          <Typography variant="body1" className="label">
            {t('address')}
          </Typography>
          <div className="detail">
            <CopyIcon
              onClick={() => handleCopyToClipboard(address)}
              className={classes.actionIcons}
            />
            <ShareIcon
              onClick={handleOpen}
              className={classes.actionIcons}
            />
            <Typography variant="body1" className="value">
              {
                !isDesktop ? (
                  getMiddleEllipsis(address, {
                    beginning: 15, ending: 5,
                  })
                ) : (
                  address
                )
              }
            </Typography>
          </div>
        </div>

        <div className={classnames(classes.copyText, classes.item)}>
          <Typography variant="body1" className="label">
            {t('rewardAddress')}
          </Typography>
          <div className="detail">
            <CopyIcon
              className={classes.actionIcons}
              onClick={() => handleCopyToClipboard(withdrawalAddress)}
            />
            <Typography variant="body1" className="value">
              {
                !isDesktop ? (
                  getMiddleEllipsis(withdrawalAddress, {
                    beginning: 15, ending: 5,
                  })
                ) : (
                  withdrawalAddress
                )
              }
            </Typography>
          </div>
        </div>
      </Box>
    </>
  );
};

export default Overview;
