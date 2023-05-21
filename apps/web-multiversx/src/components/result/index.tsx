import useStyles from '@/components/result/styles';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HelpIcon from '@mui/icons-material/Help';
import Typography from '@mui/material/Typography';
import useAppTranslation from '@/hooks/useAppTranslation';
import { FC } from 'react';

type ResultProps = {
  className?: string;
  status: string;
};

const Result: FC<ResultProps> = ({ className, status }) => {
  const { t } = useAppTranslation('common');
  const { classes, cx } = useStyles();

  let component = null;
  if (status === 'success') {
    component = (
      <>
        <CheckCircleIcon />
        <Typography component="span" variant="body1">
          {t('success')}
        </Typography>
      </>
    );
  } else if (status === 'fail') {
    component = (
      <>
        <CancelIcon />
        <Typography component="span" variant="body1">
          {t('fail')}
        </Typography>
      </>
    );
  } else {
    component = (
      <>
        <HelpIcon />
        <Typography component="span" variant="body1">
          {t('pending')}
        </Typography>
      </>
    );
  }

  return (
    <span
      className={cx(classes.root, className, {
        [classes.success]: status === 'success',
        [classes.fail]: status === 'fail',
      })}
    >
      {component}
    </span>
  );
};

export default Result;
