import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgCreateRelationship } from '@models';
import { useChainContext } from '@contexts';

const CreateRelationship = (props: {
  message: MsgCreateRelationship;
}) => {
  const { findAddress } = useChainContext();
  const { message } = props;

  const sender = findAddress(message.sender);
  const senderMoniker = sender ? sender?.moniker : message
    .sender;

  const receiver = findAddress(message.receiver);
  const receiverMoniker = receiver ? receiver?.moniker : message
    .receiver;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txCreateRelationshipContent"
        components={[
          (
            <Name
              address={message.receiver}
              name={senderMoniker}
            />
          ),
          (
            <Name
              address={message.receiver}
              name={receiverMoniker}
            />
          ),
          <span style={{ wordBreak: 'break-all' }} />,
        ]}
        values={{
          subspace: message.subspace,
        }}
      />
    </Typography>
  );
};

export default CreateRelationship;
