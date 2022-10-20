import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import {
  CheckCircle, Cancel, Help,
} from '@material-ui/icons';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';

const Result: React.FC<{
  className?: string;
  status: string;
}> = ({
  className, status,
}) => {
  const { t } = useTranslation('common');
  const classes = useStyles();

  let component = null;
  if (status === 'success') {
    component = (
      <>
        <CheckCircle />
        <Typography variant="body1">
          {t('success')}
        </Typography>
      </>
    );
  } else if (status === 'fail') {
    component = (
      <>
        <Cancel />
        <Typography variant="body1">
          {t('fail')}
        </Typography>
      </>
    );
  } else {
    component = (
      <>
        <Help />
        <Typography variant="body1">
          {t('pending')}
        </Typography>
      </>
    );
  }

  return (
    <div
      className={classnames(className, classes.root, {
        [classes.success]: status === 'success',
        [classes.fail]: status === 'fail',
      })}
    >
      {component}
    </div>
  );
};

export default Result;
