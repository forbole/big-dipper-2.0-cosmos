import Box from '@/components/box';
import { useWindowOrigin } from '@/hooks/use_window';
import { useOverview } from '@/screens/account_details/components/overview/hooks';
import useStyles from '@/screens/account_details/components/overview/styles';
import { useDisplayStyles } from '@/styles/useSharedStyles';
import { getMiddleEllipsis } from '@/utils/get_middle_ellipsis';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import useAppTranslation from '@/hooks/useAppTranslation';
import { QRCodeSVG } from 'qrcode.react';
import { FC } from 'react';
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'react-share';
import CopyIcon from 'shared-utils/assets/icon-copy.svg';
import ShareIcon from 'shared-utils/assets/icon-share.svg';

type OverviewProps = {
  className?: string;
  withdrawalAddress: string;
  address: string;
};

const Overview: FC<OverviewProps> = ({ className, address, withdrawalAddress }) => {
  const { location } = useWindowOrigin();
  const { classes, cx } = useStyles();
  const display = useDisplayStyles().classes;
  const { t } = useAppTranslation('accounts');
  const { open, handleClose, handleOpen, handleCopyToClipboard } = useOverview(t);

  const url = `${location}/accounts/${address}`;
  const hashTags = ['bigdipperexplorer', 'bigdipper'];
  return (
    <>
      <Dialog maxWidth="xl" onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
        <Box className={classes.dialog}>
          <Typography variant="body1" align="center">
            {t('scanForAddress')}
          </Typography>
          <QRCodeSVG value={address} size={200} bgColor="#ffffff" fgColor="#000000" />
          <div className="dialog__share--wrapper">
            <Typography variant="body1">{t('shareTo')}</Typography>
            <div className={classes.icons}>
              <FacebookShareButton
                url={url}
                quote={address}
                hashtag={hashTags[0]}
                className="share-buttons"
              >
                <FacebookIcon round />
              </FacebookShareButton>
              <TwitterShareButton
                url={url}
                title={address}
                hashtags={hashTags}
                className="share-buttons"
              >
                <TwitterIcon round />
              </TwitterShareButton>

              <TelegramShareButton url={url} title={address} className="share-buttons">
                <TelegramIcon round />
              </TelegramShareButton>

              <WhatsappShareButton
                url={url}
                title={address}
                separator=":: "
                className="share-buttons"
              >
                <WhatsappIcon round />
              </WhatsappShareButton>
              <EmailShareButton
                url={url}
                subject="address"
                body={address}
                separator=":: "
                className="share-buttons email"
              >
                <EmailIcon round />
              </EmailShareButton>
            </div>
          </div>
        </Box>
      </Dialog>
      <Box className={cx(classes.root, className)}>
        <div className={cx(classes.copyText, classes.item)}>
          <Typography variant="body1" className="label">
            {t('address')}
          </Typography>
          <div className="detail">
            <CopyIcon
              onClick={() => handleCopyToClipboard(address)}
              className={classes.actionIcons}
            />
            <ShareIcon onClick={handleOpen} className={classes.actionIcons} />
            <Typography variant="body1" className="value">
              <span className={display.hiddenUntilLg}>{address}</span>
              <span className={display.hiddenWhenLg}>
                {getMiddleEllipsis(address, {
                  beginning: 15,
                  ending: 5,
                })}
              </span>
            </Typography>
          </div>
        </div>

        <div className={cx(classes.copyText, classes.item)}>
          <Typography variant="body1" className="label">
            {t('rewardAddress')}
          </Typography>
          <div className="detail">
            <CopyIcon
              className={classes.actionIcons}
              onClick={() => handleCopyToClipboard(withdrawalAddress)}
            />
            <Typography variant="body1" className="value">
              <span className={display.hiddenUntilLg}>{withdrawalAddress}</span>
              <span className={display.hiddenWhenLg}>
                {getMiddleEllipsis(withdrawalAddress, {
                  beginning: 15,
                  ending: 5,
                })}
              </span>
            </Typography>
          </div>
        </div>
      </Box>
    </>
  );
};

export default Overview;
