import Typography from '@mui/material/Typography';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';
import useStyles from '@/components/result/styles';

type ResultProps = {
  className?: string;
  success?: boolean;
};

const Result: FC<ResultProps> = ({ className, success }) => {
  const { t } = useTranslation('common');
  const { classes, cx } = useStyles();

  return (
    <div
      className={cx(classes.root, className, {
        [classes.success]: success,
        [classes.fail]: !success,
      })}
    >
      {success ? (
        <>
          <CheckCircleIcon />
          <Typography variant="body1">{t('success')}</Typography>
        </>
      ) : (
        <>
          <CancelIcon />
          <Typography variant="body1">{t('fail')}</Typography>
        </>
      )}
    </div>
  );
};

export default Result;
