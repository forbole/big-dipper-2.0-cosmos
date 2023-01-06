import useStyles from '@/components/result/styles';
import Typography from '@mui/material/Typography';
import { Cancel, CheckCircle, Help } from '@mui/icons-material';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

type ResultProps = {
  className?: string;
  status: string;
};

const Result: FC<ResultProps> = ({ className, status }) => {
  const { t } = useTranslation('common');
  const { classes, cx } = useStyles();

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
      className={cx(classes.root, className, {
        [classes.success]: status === 'success',
        [classes.fail]: status === 'fail',
      })}
    >
      {component}
    </div>
  );
};

export default Result;
