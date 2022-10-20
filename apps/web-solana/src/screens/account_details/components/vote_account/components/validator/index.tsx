import React from 'react';
import classnames from 'classnames';
import numeral from 'numeral';
import {
  Typography,
  Divider,
} from '@material-ui/core';
import useTranslation from 'next-translate/useTranslation';
import {
  Box,
  Avatar,
  Markdown,
  Tag,
} from '@components';
import { useStyles } from './styles';
import { ValidatorProfileType } from '../../types';

const Validator: React.FC<{validator: ValidatorProfileType} & ComponentDefault> = (props) => {
  const classes = useStyles();
  const { t } = useTranslation('accounts');
  const status = props.validator.active ? 'active' : 'delinquent';
  const theme = props.validator.active ? 'two' : 'five';

  return (
    <Box className={classnames(props.className)}>
      <div className={classes.statusWrapper}>
        <Tag className={classes.status} value={t(status)} theme={theme} />
      </div>
      <div className={classes.bio}>
        <Avatar
          address={props.validator.address}
          imageUrl={props.validator.imageUrl}
          className={classnames(classes.avatar, classes.desktopAvatar)}
        />
        <div>
          <div className="bio__header">
            {/* ======================== */}
            {/* mobile header */}
            {/* ======================== */}
            <div className={classes.header}>
              <Avatar
                address={props.validator.address}
                imageUrl={props.validator.imageUrl}
                className={classnames(classes.avatar, classes.mobile)}
              />
              <div className="header__content">
                <Typography variant="h2">
                  {props.validator.name}
                </Typography>
              </div>
            </div>
          </div>
          {/* ======================== */}
          {/* bio */}
          {/* ======================== */}
          {props.validator.description && (
            <div className="bio__content">
              <Markdown markdown={props.validator.description} />
            </div>
          )}
        </div>
      </div>

      <Divider className={classes.divider} />
      <div>
        <div className={classes.item}>
          <Typography variant="h4" className="label">
            {t('website')}
          </Typography>
          <Typography className="value">
            {props.validator.website || '-'}
          </Typography>
        </div>
        <div className={classes.item}>
          <Typography variant="h4" className="label">
            {t('commission')}
          </Typography>
          <Typography className="value">
            {`${props.validator.commission}%`}
          </Typography>
        </div>
        <div className={classes.item}>
          <Typography variant="h4" className="label">
            {t('voteDistance')}
          </Typography>
          <Typography variant="body1" className="value">
            {numeral(props.validator.voteDistance).format('0,0')}
          </Typography>
        </div>
        <div className={classes.item}>
          <Typography variant="h4" className="label">
            {t('rootDistance')}
          </Typography>
          <Typography variant="body1" className="value">
            {numeral(props.validator.rootDistance).format('0,0')}
          </Typography>
        </div>
      </div>
    </Box>
  );
};

export default Validator;
