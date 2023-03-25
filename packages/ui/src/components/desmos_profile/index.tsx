import Typography from '@mui/material/Typography';
import { useTranslation } from 'next-i18next';
import numeral from 'numeral';
import { FC } from 'react';
import dayjs from 'dayjs';
import { getMiddleEllipsis } from '@/utils/get_middle_ellipsis';
import Avatar from '@/components/avatar';
import Box from '@/components/box';
import Link from '@mui/material/Link';
import Connections from '@/components/desmos_profile/components/connections';
import { useDesmosProfile } from '@/components/desmos_profile/hooks';
import useStyles from '@/components/desmos_profile/styles';
import Markdown from '@/components/markdown';
import CopyIcon from 'shared-utils/assets/icon-copy.svg';
import LinkIcon from 'shared-utils/assets/icon-link.svg';
import DateIcon from 'shared-utils/assets/icon-date.svg';
import ConnectionIcon from 'shared-utils/assets/icon-connection.svg';

type DesmosProfileProps = {
  className?: string;
  withdrawalAddress: string;
  address: string;
} & Omit<DesmosProfile, 'address'>;

const appLinkDict = {
  twitter: 'https://twitter.com/',
  discord: 'https://discord.com/users/',
  github: 'https://github.com/',
  domain: 'https://',
};

const LinkDisplay: FC<Pick<ApplicationLink, 'network' | 'identifier'>> = ({
  network,
  identifier,
}) => (
  <Link
    href={`${appLinkDict[network as keyof typeof appLinkDict]}${identifier}`}
    target="_blank"
    rel="noreferrer"
  >
    {network === 'domain' ? `${identifier}` : `@${identifier}`}
  </Link>
);

const DesmosProfile: FC<DesmosProfileProps> = (props) => {
  const { t } = useTranslation('accounts');
  const { classes, cx } = useStyles({ coverUrl: props.coverUrl });
  const format = 'MMM YYYY';
  const {
    connectionsOpen,
    handleConnectionsClose,
    handleConnectionsOpen,
    handleCopyToClipboard,
    handleReadMore,
    readMore,
  } = useDesmosProfile({ t, bio: props.bio, links: props.applicationLinks });

  const displayConnections = props?.connections?.length ? '' : 'hide';

  return (
    <>
      <Box className={cx(classes.root, props.className)}>
        <div className={classes.cover}>
          <div className="cover" />
        </div>

        <div className={classes.avatarContainer}>
          <Avatar address={props.dtag} imageUrl={props.imageUrl} className={classes.avatar} />{' '}
          <div className={classes.nicknameWrapper}>
            <Typography variant="h2">{props.nickname}</Typography>
            <Typography variant="body2" className="tag">
              @{props.dtag}
            </Typography>
          </div>
          <div className={classes.addressBox}>
            <div className={classes.address}>
              <Typography variant="body1" className="value">
                {t('address')}
              </Typography>
              <div className={classes.addressAndCopy}>
                <Typography variant="body1">
                  <span>
                    {getMiddleEllipsis(props.address, {
                      beginning: 9,
                      ending: 3,
                    })}
                  </span>
                </Typography>
                <CopyIcon
                  onClick={() => handleCopyToClipboard(props.address)}
                  className={classes.actionIcons}
                />
              </div>
            </div>
            <div className={classes.rewardAddress}>
              <Typography variant="body1" className="value">
                {t('rewardAddress')}
              </Typography>
              <div className={classes.addressAndCopy}>
                <Typography variant="body1">
                  <span>
                    {getMiddleEllipsis(props.withdrawalAddress, {
                      beginning: 9,
                      ending: 3,
                    })}
                  </span>
                </Typography>
                <CopyIcon
                  onClick={() => handleCopyToClipboard(props.withdrawalAddress)}
                  className={classes.actionIcons}
                />
              </div>
            </div>
          </div>
        </div>

        {props.bio && (
          <div>
            <Markdown markdown={props.bio} readMore={readMore} />
            {readMore && (
              <Typography
                variant="body1"
                className={classes.link}
                onClick={handleReadMore}
                role="button"
              >
                {t('more')}
              </Typography>
            )}
          </div>
        )}
        <div className={classes.infoDiv}>
          {props.applicationLinks.length > 0 && (
            <>
              {props.applicationLinks.map((app) => (
                <div key={app.identifier} className={classes.flexDiv}>
                  <LinkIcon className={classes.icon} />
                  <LinkDisplay network={app.network} identifier={app.identifier} />
                </div>
              ))}
            </>
          )}
          {props.creationTime && (
            <div className={classes.flexDiv}>
              <DateIcon className={classes.icon} />
              <Typography variant="body2">
                {t('joined', {
                  date: dayjs(props.creationTime).format(format),
                })}
              </Typography>
            </div>
          )}
          {props.connections && (
            <div className={classes.flexDiv}>
              <ConnectionIcon className={classes.icon} />
              <Typography
                variant="body1"
                className={cx(classes.link, displayConnections)}
                onClick={handleConnectionsOpen}
                role="button"
              >
                {t('connections', {
                  connections: numeral(props.connections.length).format('0,0'),
                })}
              </Typography>
            </div>
          )}
        </div>
      </Box>
      <Connections
        open={connectionsOpen}
        handleClose={handleConnectionsClose}
        data={props.connections}
      />
    </>
  );
};

export default DesmosProfile;
