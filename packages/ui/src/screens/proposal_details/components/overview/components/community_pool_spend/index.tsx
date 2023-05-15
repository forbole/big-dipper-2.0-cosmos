import Typography from '@mui/material/Typography';
import useAppTranslation from '@/hooks/useAppTranslation';
import { FC } from 'react';
import Name from '@/components/name';

type communityPoolSpendProps = {
  recipient: string;
  recipientMoniker: string;
  amountRequested: string;
};

const CommunityPoolSpend: FC<communityPoolSpendProps> = ({
  recipient,
  recipientMoniker,
  amountRequested,
}) => {
  const { t } = useAppTranslation('proposals');
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
