import Typography from '@mui/material/Typography';
import AppTrans from '@/components/AppTrans';
import { FC } from 'react';
import Name from '@/components/name';
import MsgCreateDenom from '@/models/msg/tokenfactory/msg_create_denom';
import { useProfileRecoil } from '@/recoil/profiles/hooks';

const CreateDenom: FC<{ message: MsgCreateDenom }> = (props) => {
  const { message } = props;

  const sender = useProfileRecoil(message.sender);

  const senderMoniker = sender ? sender?.name : message.sender;

  return (
    <Typography>
      <AppTrans
        i18nKey="message_contents:txMsgCreateDenom"
        components={[<Name address={message.sender} name={senderMoniker} />, <b />]}
        values={{
          sender: senderMoniker,
          subdenom: message.subdenom,
          subspace_id: message.subspace_id,
        }}
      />
    </Typography>
  );
};

export default CreateDenom;
