import Typography from '@mui/material/Typography';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

type TotalProps = {
  className?: string;
  total: string;
};

const Total: FC<TotalProps> = ({ className, total }) => {
  const { t } = useTranslation('proposals');
  return (
    <Typography variant="body1" className={classnames(className)}>
      {t('totalProposals', {
        amount: total,
      })}
    </Typography>
  );
};

export default Total;
