import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import {
  Divider,
  Typography,
} from '@material-ui/core';
import { AvatarName } from '@components';
import { useStyles } from './styles';
import { AddressesType } from '../../../../types';

const Mobile: React.FC<{
  className?: string;
  items?: AddressesType;
}> = ({
  className, items,
}) => {
  const classes = useStyles();
  const { t } = useTranslation('accounts');

  return (
    <div className={classnames(className)}>
      {items.map((x, i) => {
        return (
          <React.Fragment key={`votes-mobile-${i}`}>
            <div className={classes.list}>
              <div className={classes.item}>
                <Typography variant="h4" className="label">
                  {t('address')}
                </Typography>
                <AvatarName
                  address={x}
                  name={x}
                />
              </div>
            </div>
            {i !== items.length - 1 && <Divider />}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Mobile;
