import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import classnames from 'classnames';
import { Typography } from '@material-ui/core';
import { useTokensContext } from '@src/screens/proposals/components/list/contexts/tokens';

const Total: React.FC<{
  className?: string;
}> = ({ className }) => {
  const { t } = useTranslation('tokens');
  const { total } = useTokensContext();
  return (
    <Typography variant="body1" className={classnames(className)}>
      {t('totalTokensAmount', {
        amount: total,
      })}
    </Typography>
  );
};

export default Total;
