import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgEditOracleScript } from '@models';
import { useChainContext } from '@contexts';

const EditOracleScript = (props: {
  message: MsgEditOracleScript;
}) => {
  const { findAddress } = useChainContext();
  const { message } = props;

  const sender = findAddress(message.sender);
  const senderMoniker = sender ? sender?.moniker : message
    .sender;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txEditOracleScript"
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

export default EditOracleScript;
