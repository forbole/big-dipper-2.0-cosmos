import Avatar from '@/components/avatar';
import Box from '@/components/box';
import Connections from '@/components/desmos_profile/components/connections';
import { useDesmosProfile } from '@/components/desmos_profile/hooks';
import { useStyles } from '@/components/desmos_profile/styles';
import Markdown from '@/components/markdown';
import Typography from '@material-ui/core/Typography';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import numeral from 'numeral';
import React from 'react';

const DesmosProfile: React.FC<
  {
    className?: string;
  } & DesmosProfile
> = (props) => {
  const { t } = useTranslation('accounts');
  const classes = useStyles(props.coverUrl);
  const { connectionsOpen, handleConnectionsClose, handleConnectionsOpen } = useDesmosProfile();

  const displayConnections = props.connections.length ? '' : 'hide';

  return (
    <>
      <Box className={classnames(props.className, classes.root)}>
        <div className={classes.cover}>
          <div className="cover" />
        </div>

        <div className={classes.avatarContainer}>
          <Avatar address={props.dtag} imageUrl={props.imageUrl} className={classes.avatar} />
          <Typography
            variant="body1"
            className={classnames(classes.link, displayConnections)}
            onClick={handleConnectionsOpen}
            role="button"
          >
            {t('connections', {
              connections: numeral(props.connections.length).format('0,0'),
            })}
          </Typography>
        </div>
        <div className={classes.nicknameWrapper}>
          <Typography variant="h2">{props.nickname}</Typography>
          <Typography variant="body2" className="tag">
            @{props.dtag}
          </Typography>
        </div>
        {props.bio && (
          <div>
            <Markdown markdown={props.bio} />
          </div>
        )}
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
