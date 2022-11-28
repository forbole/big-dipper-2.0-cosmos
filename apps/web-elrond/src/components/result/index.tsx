import { useStyles } from '@/components/result/styles';
import Typography from '@material-ui/core/Typography';
import { Cancel, CheckCircle, Help } from '@material-ui/icons';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import React from 'react';

const Result: React.FC<{
  className?: string;
  status: string;
}> = ({ className, status }) => {
  const { t } = useTranslation('common');
  const classes = useStyles();

  let component = null;
  if (status === 'success') {
    component = (
      <>
        <CheckCircle />
        <Typography variant="body1">{t('success')}</Typography>
      </>
    );
  } else if (status === 'fail') {
    component = (
      <>
        <Cancel />
        <Typography variant="body1">{t('fail')}</Typography>
      </>
    );
  } else {
    component = (
      <>
        <Help />
        <Typography variant="body1">{t('pending')}</Typography>
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
