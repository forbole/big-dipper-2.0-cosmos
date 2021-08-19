import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgCounterpartyChannel } from '@models';
import { useChainContext } from '@contexts';

const CounterpartyChannel = (props: {
  message: MsgCounterpartyChannel;
}) => {
  const { findAddress } = useChainContext();
  const { message } = props;

  const signer = findAddress(message.signer);
  const signerMoniker = signer ? signer?.moniker : message.signer;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txCounterpartyContent"
        components={[
          (
            <Name
              address={message.signer}
              name={signerMoniker}
            />
          ),
          <b />,
        ]}
      />
    </Typography>
  );
};

export default CounterpartyChannel;
