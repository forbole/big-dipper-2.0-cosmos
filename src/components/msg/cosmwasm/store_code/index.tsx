import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgStoreCode } from '@models';
import { useProfileRecoil } from '@recoil/profiles';

const StoreCode = (props: {
   message: MsgStoreCode;
 }) => {
  const { message } = props;

  const sender = useProfileRecoil(message.sender);
  const senderMoniker = sender ? sender?.name : message.sender;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txStoreCode"
        components={[
          (
            <Name
              address={message.sender}
              name={senderMoniker}
            />
          ),
        ]}
      />
    </Typography>
  );
};

export default StoreCode;
