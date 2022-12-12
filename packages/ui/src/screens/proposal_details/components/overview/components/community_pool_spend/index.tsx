import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { Typography } from '@material-ui/core';
import Name from '@/components/name';

const CommunityPoolSpend: React.FC<{
  recipient: string;
  recipientMoniker: string;
  amountRequested: string;
}> = ({ recipient, recipientMoniker, amountRequested }) => {
  const { t } = useTranslation('proposals');
  return (
    <div className="content">
      <div className="recipient">
        <Typography variant="body1">{t('recipient')}</Typography>
        <Name name={recipientMoniker} address={recipient} />
      </div>
      <div className="amountRequested">
        <Typography variant="body1">{t('amountRequested')}</Typography>
        <Typography variant="body1">{amountRequested}</Typography>
      </div>
    </div>
  );
};

export default CommunityPoolSpend;
