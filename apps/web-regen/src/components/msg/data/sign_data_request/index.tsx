import Signers from '@/components/msg/data/sign_data_request/components/signers';
import MsgSignDataRequest from '@/models/msg/data/msg_sign_data_request';
import Typography from '@mui/material/Typography';
import Trans from 'next-translate/Trans';
import React, { FC } from 'react';

const SignDataRequest: FC<{ message: MsgSignDataRequest }> = (props) => {
  const { message } = props;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:MsgSignDataRequest"
        components={[<Signers signers={message.signers} />]}
      />
    </Typography>
  );
};

export default SignDataRequest;
