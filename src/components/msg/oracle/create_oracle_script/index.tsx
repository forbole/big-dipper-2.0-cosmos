import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgCreateOracleScript } from '@models';
import { useChainContext } from '@contexts';

const CreateOracleScript = (props: {
  message: MsgCreateOracleScript;
}) => {
  const { findAddress } = useChainContext();
  const { message } = props;

  const sender = findAddress(message.sender);
  const senderMoniker = sender ? sender?.moniker : message
    .sender;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txCreateOracleScript"
        components={[
          (
            <Name
              address={message.sender}
              name={senderMoniker}
            />
          ),
          (
            <b />
          ),
        ]}
        values={{
          name: message.name,
        }}
      />
    </Typography>
  );
};

export default CreateOracleScript;
