import Typography from '@material-ui/core/Typography';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import React from 'react';

const Total: React.FC<{
  className?: string;
  total: string;
}> = ({ className, total }) => {
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
