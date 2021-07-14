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
  Tag,
} from '@components';
import { useStyles } from './styles';
import { useDesmosProfile } from './hooks';
import { Connections } from './components';
import {
  ConnectionType, ValidatorProfile,
} from './types';
import { getStatusTheme } from './utils';

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

  const { validator } = props;

  const statusTheme = validator ? getStatusTheme(validator.status, validator.jailed) : null;

  return (
    <>
      <Box className={props.className}>
        <div className={classes.profile}>
          {validator && (
            <Tag
              value={t(`validators:${statusTheme.status}`)}
              theme={statusTheme.theme as any}
              className={classnames(classes.tag, classes.validatorStatus, 'mobile')}
            />
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
                {validator && (
                <Tag
                  value={t(`validators:${statusTheme.status}`)}
                  theme={statusTheme.theme as any}
                  className={classnames(classes.tag, classes.validatorStatus, 'tablet')}
                />
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
