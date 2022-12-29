import { useStyles } from '@/components/result/styles';
import Typography from '@material-ui/core/Typography';
import { Cancel, CheckCircle } from '@material-ui/icons';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import React, { FC } from 'react';

type ResultProps = {
  className?: string;
  success?: boolean;
};

const Result: FC<ResultProps> = ({ className, success }) => {
  const { t } = useTranslation('common');
  const classes = useStyles();

  return (
    <div
      className={classnames(className, classes.root, {
        [classes.success]: success,
        [classes.fail]: !success,
      })}
    >
      {success ? (
        <>
          <CheckCircle />
          <Typography variant="body1">{t('success')}</Typography>
        </>
      ) : (
        <>
          <Cancel />
          <Typography variant="body1">{t('fail')}</Typography>
        </>
      )}
    </div>
  );
};

export default Result;
