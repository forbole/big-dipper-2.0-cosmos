import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import {
  Typography,
  Dialog,
} from '@material-ui/core';
import QRCode from 'qrcode.react';
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
import { getMiddleEllipsis } from '@utils/get_middle_ellipsis';
import CopyIcon from '@assets/icon-copy.svg';
import ShareIcon from '@assets/icon-share.svg';
import {
  Box,
} from '@components';
import { useScreenSize } from '@hooks';
import NativeAccountLogo from '@assets/native-account.svg';
import { useStyles } from './styles';
import { useOverview } from './hooks';
import { OverviewType } from '../../types';

const Overview: React.FC<{overview: OverviewType} & ComponentDefault> = (props) => {
  const { t } = useTranslation('accounts');
  const classes = useStyles();
  const { isDesktop } = useScreenSize();
  const {
    open,
    handleClose,
    handleOpen,
    handleCopyToClipboard,
  } = useOverview(t);

  const url = `${process.env.NEXT_PUBLIC_URL}/accounts/${props.overview.address}`;
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
            value={props.overview.address}
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
                value={props.overview.address}
                hashtag={hashTags[0]}
                className="share-buttons"
              >
                <FacebookIcon
                  round
                />
              </FacebookShareButton>
              <TwitterShareButton
                url={url}
                value={props.overview.address}
                hashtags={hashTags}
                className="share-buttons"
              >
                <TwitterIcon
                  round
                />
              </TwitterShareButton>

              <TelegramShareButton
                url={url}
                value={props.overview.address}
                className="share-buttons"
              >
                <TelegramIcon
                  round
                />
              </TelegramShareButton>

              <WhatsappShareButton
                url={url}
                value={props.overview.address}
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
                value={props.overview.address}
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
      <Box className={classnames(props.className, classes.root)}>
        <NativeAccountLogo />
        <div className={classnames(classes.content, classes.copyText)}>
          <Typography variant="h2">
            {t('nativeAccount')}
          </Typography>
          <div className="detail">
            <CopyIcon
              onClick={() => handleCopyToClipboard(props.overview.address)}
              className={classes.actionIcons}
            />
            <ShareIcon
              onClick={handleOpen}
              className={classes.actionIcons}
            />
            <Typography variant="body1" className="value">
              {
                !isDesktop ? (
                  getMiddleEllipsis(props.overview.address, {
                    beginning: 15, ending: 5,
                  })
                ) : (
                  props.overview.address
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
