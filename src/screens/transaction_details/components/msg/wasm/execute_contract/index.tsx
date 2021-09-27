import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgExecuteContract } from '@models';
import { useChainContext } from '@contexts';

const ExecuteContract = (props: {
  message: MsgExecuteContract;
}) => {
  const { findAddress } = useChainContext();
  const { message } = props;

  const sender = findAddress(message.sender);
  const senderMoniker = sender ? sender?.moniker : message
    .sender;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txExecuteContract"
        components={[
          (
            <Name
              address={message.sender}
              name={senderMoniker}
            />
          ),
          <b />,
        ]}
        values={{
          contract: message.contract,
        }}
      />
    </Typography>
  );
};

export default ExecuteContract;
