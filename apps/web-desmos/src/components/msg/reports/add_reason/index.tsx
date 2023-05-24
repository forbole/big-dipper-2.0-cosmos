import Typography from '@mui/material/Typography';
import AppTrans from '@/components/AppTrans';
import { FC } from 'react';
import Name from '@/components/name';
import MsgAddReason from '@/models/msg/reports/msg_add_reason';
import { useProfileRecoil } from '@/recoil/profiles/hooks';

const AddReason: FC<{ message: MsgAddReason }> = (props) => {
  const { message } = props;

  const signer = useProfileRecoil(message.signer);

  const signerMoniker = signer ? signer?.name : message.signer;

  return (
    <Typography>
      <AppTrans
        i18nKey="message_contents:txMsgAddReason"
        components={[<Name address={message.signer} name={signerMoniker} />, <b />]}
        values={{
          signer: signerMoniker,
          title: message.title,
        }}
      />
    </Typography>
  );
};

export default AddReason;
