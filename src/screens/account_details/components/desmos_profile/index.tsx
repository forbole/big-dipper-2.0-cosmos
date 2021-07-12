import React from 'react';
import numeral from 'numeral';
import useTranslation from 'next-translate/useTranslation';
import {
  Typography,
  Divider,
} from '@material-ui/core';
import {
  Box,
  Avatar,
  Markdown,
} from '@components';
import { useStyles } from './styles';
import { useDesmosProfile } from './hooks';
import { Connections } from './components';
import { ConnectionType } from './types';

const DesmosProfile: React.FC<{
  className?: string;
  dtag: string;
  nickname: string;
  imageUrl: string;
  bio: string;
  connections: ConnectionType[]
}> = (props) => {
  const { t } = useTranslation('accounts');
  const classes = useStyles();
  const {
    connectionsOpen,
    handleConnectionsClose,
    handleConnectionsOpen,
  } = useDesmosProfile();

  return (
    <>
      <Box>
        <div className={classes.profile}>
          <Avatar
            address={props.dtag}
            imageUrl={props.imageUrl}
            className={classes.avatar}
          />
          <div className={classes.description}>
            <div className="name">
              <Typography variant="h2">
                {props.nickname}
              </Typography>
              <Typography variant="body1" className="tag">
                @
                {props.dtag}
              </Typography>
            </div>
            {
            !!props.connections.length && (
            <Typography
              variant="body1"
              className={classes.link}
              onClick={handleConnectionsOpen}
              role="button"
            >
              {t('connections', {
                connections: numeral(props.connections.length).format('0,0'),
              })}
            </Typography>
            )
          }
          </div>
        </div>
        {
        props.bio && (
          <>
            <Divider className={classes.divider} />
            <Markdown>
              {props.bio}
            </Markdown>
          </>
        )
      }
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
