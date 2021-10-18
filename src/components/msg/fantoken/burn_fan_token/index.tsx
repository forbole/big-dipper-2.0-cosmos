import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgBurnFanToken } from '@models';
import { useChainContext } from '@contexts';

const BurnFanToken = (props: {
  message: MsgBurnFanToken;
}) => {
  const { findAddress } = useChainContext();
  const { message } = props;

  const sender = findAddress(message.sender);
  const senderMoniker = sender ? sender?.moniker : message.sender;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txMsgBurnFanToken"
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

export default BurnFanToken;
