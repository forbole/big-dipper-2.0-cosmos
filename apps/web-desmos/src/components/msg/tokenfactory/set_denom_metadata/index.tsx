import Typography from '@mui/material/Typography';
import AppTrans from '@/components/AppTrans';
import { FC } from 'react';
import Name from '@/components/name';
import MsgSetDenomMetadata from '@/models/msg/tokenfactory/msg_set_denom_metadata';
import { useProfileRecoil } from '@/recoil/profiles/hooks';

const SetDenomMetadata: FC<{ message: MsgSetDenomMetadata }> = (props) => {
  const { message } = props;

  const sender = useProfileRecoil(message.sender);

  const senderMoniker = sender ? sender?.name : message.sender;

  return (
    <Typography>
      <AppTrans
        i18nKey="message_contents:txMsgSetDenomMetadata"
        components={[<Name address={message.sender} name={senderMoniker} />, <b />]}
        values={{
          sender: senderMoniker,
          subspace_id: message.subspace_id,
        }}
      />
    </Typography>
  );
};

export default SetDenomMetadata;
