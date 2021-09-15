import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import classnames from 'classnames';
import { Typography } from '@material-ui/core';

const Total: React.FC<{
  className?: string;
  total: string;
}> = ({
  className, total,
}) => {
  const { t } = useTranslation('iscns');
  return (
    <Typography variant="body1" className={classnames(className)}>
      {t('totalIscns', {
        amount: total,
      })}
    </Typography>
  );
};

export default Total;
