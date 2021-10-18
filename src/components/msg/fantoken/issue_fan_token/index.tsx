import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgIssueFanToken } from '@models';
import { useChainContext } from '@contexts';

const IssueFanToken = (props: {
  message: MsgIssueFanToken;
}) => {
  const { findAddress } = useChainContext();
  const { message } = props;

  const owner = findAddress(message.owner);
  const ownerMoniker = owner ? owner?.moniker : message.owner;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txMsgIssueFanToken"
        components={[
          (
            <Name
              address={message.owner}
              name={ownerMoniker}
            />
          ),
          <b />,
        ]}
        values={{
          name: message.name,
          maxSupply: message.maxSupply,
        }}
      />
    </Typography>
  );
};

export default IssueFanToken;
