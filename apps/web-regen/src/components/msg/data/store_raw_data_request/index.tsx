import React from 'react';
import Trans from 'next-translate/Trans';
import Typography from '@material-ui/core/Typography';
import Name from 'ui/components/name';
import MsgStoreRawDataRequest from '@models/regen/msg/data/msg_store_raw_data_request';
import { useProfileRecoil } from '@recoil/profiles';

const StoreRawDataRequest = (props: { message: MsgStoreRawDataRequest }) => {
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
