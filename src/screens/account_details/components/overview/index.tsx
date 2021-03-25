import React from 'react';
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
import CopyIcon from '@assets/icon-copy.svg';
import ShareIcon from '@assets/icon-share.svg';
import { getMiddleEllipsis } from '@utils/get_middle_ellipsis';
import {
  BoxDetails, Box,
} from '@components';
import { useStyles } from './styles';
import { useOverview } from './hooks';

const Overview: React.FC<{
  className?: string;
}> = ({ className }) => {
  const classes = useStyles();
  const { t } = useTranslation('accounts');
  const {
    open,
    handleClose,
    handleOpen,
    handleCopyToClipboard,
  } = useOverview(t);

  const dummyProps = {
    title: t('overview'),
    details: [
      {
        label: t('address'),
        className: classes.copyText,
        detail: (
          <>
            <CopyIcon onClick={() => handleCopyToClipboard('1334')} />
            <ShareIcon onClick={handleOpen} />
            <Typography variant="body1" className="value">
              {getMiddleEllipsis('HjTgC7ukwMA1gsEC5YGTaDFM5zt0skfsdkhfsdkhfshjsfdGE6B6X', {
                beginning: 15, ending: 5,
              })}
            </Typography>
          </>
        ),
      },
      {
        label: t('rewardAddress'),
        className: classes.copyText,
        detail: (
          <>
            <CopyIcon onClick={() => handleCopyToClipboard('1334')} />
            <Typography variant="body1" className="value">
              {getMiddleEllipsis('HjTgC7ukwMA1gsEC5YGTaDFM5zt0skfsdkhfsdkhfshjsfdGE6B6X', {
                beginning: 15, ending: 5,
              })}
            </Typography>
          </>
        ),
      },
    ],
  };

  const fakeAddress = 'HjTgC7ukwMA1gsEC5YGTaDFM5zt0skfsdkhfsdkhfshjsfdGE6B6X';
  const url = `https://desmos.bigdipper.live/accounts${fakeAddress}`;
  const hashTags = ['#forbole', '#bigdipper'];
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
            value="HjTgC7ukwMA1gsEC5YGTaDFM5zt0skfsdkhfsdkhfshjsfdGE6B6X"
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
                quote={fakeAddress}
                hashtag={hashTags[0]}
                className="share-buttons"
              >
                <FacebookIcon
                  round
                />
              </FacebookShareButton>
              <TwitterShareButton
                url={url}
                title={fakeAddress}
                hashtags={hashTags}
                className="share-buttons"
              >
                <TwitterIcon
                  round
                />
              </TwitterShareButton>

              <TelegramShareButton
                url={url}
                title={fakeAddress}
                className="share-buttons"
              >
                <TelegramIcon
                  round
                />
              </TelegramShareButton>

              <WhatsappShareButton
                url={url}
                title={fakeAddress}
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
                body={fakeAddress}
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
      <BoxDetails className={className} {...dummyProps} />
    </>
  );
};

export default Overview;
