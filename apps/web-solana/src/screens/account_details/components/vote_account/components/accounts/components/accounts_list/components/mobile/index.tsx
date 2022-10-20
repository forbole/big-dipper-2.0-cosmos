import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import {
  Divider,
  Typography,
} from '@material-ui/core';
import { ACCOUNT_DETAILS } from '@utils/go_to_page';
import Link from 'next/link';
import { useStyles } from './styles';
import { AccountType } from '../../../../types';

const Mobile: React.FC<{
  className?: string;
  items?: AccountType[];
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
                <Link href={ACCOUNT_DETAILS(x)} passHref>
                  <Typography variant="body1" component="a">
                    {x}
                  </Typography>
                </Link>
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
