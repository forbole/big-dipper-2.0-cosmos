import Typography from '@mui/material/Typography';
import AppTrans from '@/components/AppTrans';
import { FC } from 'react';
import Name from '@/components/name';
import MsgCreateBatchRequest from '@/models/msg/ecocredit/msg_create_batch_request';
import { useProfileRecoil } from '@/recoil/profiles/hooks';

const CreateBatchRequest: FC<{ message: MsgCreateBatchRequest }> = (props) => {
  const { message } = props;

  const issuer = useProfileRecoil(message.issuer);
  const issuerMoniker = issuer ? issuer?.name : message.issuer;

  return (
    <Typography>
      <AppTrans
        i18nKey="message_contents:MsgCreateBatchRequest"
        components={[<Name address={message.issuer} name={issuerMoniker} />]}
      />
    </Typography>
  );
};

export default CreateBatchRequest;
