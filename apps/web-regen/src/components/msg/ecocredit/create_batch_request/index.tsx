import React from 'react';
import Trans from 'next-translate/Trans';
import Typography from '@material-ui/core/Typography';
import Name from '@/components/name';
import MsgCreateBatchRequest from '@/models/msg/ecocredit/msg_create_batch_request';
import { useProfileRecoil } from '@/recoil/profiles';

const CreateBatchRequest: React.FC<{ message: MsgCreateBatchRequest }> = (props) => {
  const { message } = props;

  const issuer = useProfileRecoil(message.issuer);
  const issuerMoniker = issuer ? issuer?.name : message.issuer;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:MsgCreateBatchRequest"
        components={[<Name address={message.issuer} name={issuerMoniker} />]}
      />
    </Typography>
  );
};

export default CreateBatchRequest;
