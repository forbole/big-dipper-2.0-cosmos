import Typography from '@mui/material/Typography';
import AppTrans from '@/components/AppTrans';
import { FC } from 'react';
import MsgSignDataRequest from '@/models/msg/data/msg_sign_data_request';
import Signers from '@/components/msg/data/sign_data_request/components/signers';

const SignDataRequest: FC<{ message: MsgSignDataRequest }> = (props) => {
  const { message } = props;

  return (
    <Typography>
      <AppTrans
        i18nKey="message_contents:MsgSignDataRequest"
        components={[<Signers signers={message.signers} />]}
      />
    </Typography>
  );
};

export default SignDataRequest;
