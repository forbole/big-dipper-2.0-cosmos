import Typography from '@mui/material/Typography';
import { useTranslation } from 'next-i18next';
import { FC } from 'react';

type TotalProps = {
  className?: string;
  total: string;
};

const Total: FC<TotalProps> = ({ className, total }) => {
  const { t } = useTranslation('proposals');
  return (
    <Typography variant="body1" className={className}>
      {t('totalProposals', {
        amount: total,
      })}
    </Typography>
  );
};

export default Total;
