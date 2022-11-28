import Name from '@/components/name';
import MsgStoreRawDataRequest from '@/models/msg/data/msg_store_raw_data_request';
import { useProfileRecoil } from '@/recoil/profiles';
import Typography from '@material-ui/core/Typography';
import Trans from 'next-translate/Trans';
import React from 'react';

const StoreRawDataRequest: React.FC<{ message: MsgStoreRawDataRequest }> = (props) => {
  const { message } = props;

  const sender = useProfileRecoil(message.sender);
  const senderMoniker = sender ? sender?.name : message.sender;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:MsgStoreRawDataRequest"
        components={[<Name address={message.sender} name={senderMoniker} />]}
      />
    </Typography>
  );
};

export default StoreRawDataRequest;
