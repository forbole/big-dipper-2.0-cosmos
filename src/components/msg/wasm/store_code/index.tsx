import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgStoreCode } from '@models';
import { useChainContext } from '@contexts';

const StoreCode = (props: {
  message: MsgStoreCode;
}) => {
  const { findAddress } = useChainContext();
  const { message } = props;

  const sender = findAddress(message.sender);
  const senderMoniker = sender ? sender?.moniker : message
    .sender;

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
