import Typography from '@mui/material/Typography';
import AppTrans from '@/components/AppTrans';
import { FC } from 'react';
import Name from '@/components/name';
import { type MsgCounterpartyConnection } from '@/models';
import { useProfileRecoil } from '@/recoil/profiles/hooks';

const CounterpartyConnection: FC<{ message: MsgCounterpartyConnection }> = (props) => {
  const { message } = props;

  const signer = useProfileRecoil(message.signer);
  const signerMoniker = signer ? signer?.name : message.signer;

  return (
    <Typography>
      <AppTrans
        i18nKey="message_contents:txCounterpartyContent"
        components={[<Name address={message.signer} name={signerMoniker} />, <b />]}
      />
    </Typography>
  );
};

export default CounterpartyConnection;
