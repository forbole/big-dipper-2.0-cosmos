import Typography from '@mui/material/Typography';
import AppTrans from '@/components/AppTrans';
import { FC } from 'react';
import Name from '@/components/name';
import MsgUpdateParams from '@/models/msg/tokenfactory/msg_update_params';
import { useProfileRecoil } from '@/recoil/profiles/hooks';

const UpdateParams: FC<{ message: MsgUpdateParams }> = (props) => {
  const { message } = props;

  const authority = useProfileRecoil(message.authority);

  const authorityMoniker = authority ? authority?.name : message.authority;

  return (
    <Typography>
      <AppTrans
        i18nKey="message_contents:txMsgUpdateParams"
        components={[<Name address={message.authority} name={authorityMoniker} />, <b />]}
        values={{
          authority: authorityMoniker,
          params: message.params,
        }}
      />
    </Typography>
  );
};

export default UpdateParams;
