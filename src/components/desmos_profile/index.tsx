import React from 'react';
import numeral from 'numeral';
import classnames from 'classnames';
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
import {
  ConnectionType, ValidatorProfile,
} from './types';

const DesmosProfile: React.FC<{
  className?: string;
  dtag: string;
  nickname: string;
  imageUrl: string;
  bio: string;
  connections: ConnectionType[];
  validator?: ValidatorProfile;
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
      <Box className={props.className}>
        <div className={classes.profile}>
          {props.validator && (
            <div
              className={classnames(classes.validatorStatus, 'mobile')}
            >
              hellow world
            </div>
          )}
          <Avatar
            address={props.dtag}
            imageUrl={props.imageUrl}
            className={classes.avatar}
          />
          <div className={classes.description}>
            <div>
              <div className={classes.nicknameWrapper}>
                <Typography variant="h2">
                  {props.nickname}
                </Typography>
                {props.validator && (
                  <div className={classnames(classes.validatorStatus, 'tablet')}>
                    hellow world
                  </div>
                )}
              </div>
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
