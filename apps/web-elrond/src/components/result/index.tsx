import Typography from '@mui/material/Typography';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HelpIcon from '@mui/icons-material/Help';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';
import useStyles from '@/components/result/styles';

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
        <CheckCircleIcon />
        <Typography variant="body1">{t('success')}</Typography>
      </>
    );
  } else if (status === 'fail') {
    component = (
      <>
        <CancelIcon />
        <Typography variant="body1">{t('fail')}</Typography>
      </>
    );
  } else {
    component = (
      <>
        <HelpIcon />
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
