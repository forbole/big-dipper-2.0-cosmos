import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgCreateIssuer } from '@models';
import { useChainContext } from '@contexts';

const CreateIssuer = (props: {
  message: MsgCreateIssuer;
}) => {
  const { findAddress } = useChainContext();
  const { message } = props;

  const owner = findAddress(message.owner);
  const ownerMoniker = owner ? owner?.moniker : message.owner;

  const id = message.clientOrderId;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txAddLimitOrderContent"
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
          id,
        }}
      />
    </Typography>
  );
};

export default CreateIssuer;
