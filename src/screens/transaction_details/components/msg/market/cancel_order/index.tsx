import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgCancelOrder } from '@models';
import { useChainContext } from '@contexts';

const CancelOrder = (props: {
  message: MsgCancelOrder;
}) => {
  const { findAddress } = useChainContext();
  const { message } = props;
  const owner = findAddress(message.owner);
  const ownerMoniker = owner ? owner?.moniker : message.owner;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txCancelOrderContent"
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
          clientOrderId: message.clientOrderId,
        }}
      />
    </Typography>
  );
};

export default CancelOrder;
