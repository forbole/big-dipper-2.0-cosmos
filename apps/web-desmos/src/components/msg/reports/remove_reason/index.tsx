import Typography from '@mui/material/Typography';
import AppTrans from '@/components/AppTrans';
import { FC } from 'react';
import Name from '@/components/name';
import MsgRemoveReason from '@/models/msg/reports/msg_remove_reason';
import { useProfileRecoil } from '@/recoil/profiles/hooks';

const RemoveReason: FC<{ message: MsgRemoveReason }> = (props) => {
  const { message } = props;

  const signer = useProfileRecoil(message.signer);

  const signerMoniker = signer ? signer?.name : message.signer;

  return (
    <Typography>
      <AppTrans
        i18nKey="message_contents:txMsgRemoveReason"
        components={[<Name address={message.signer} name={signerMoniker} />, <b />]}
        values={{
          signer: signerMoniker,
        }}
      />
    </Typography>
  );
};

export default RemoveReason;
