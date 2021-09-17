import React from 'react';
import Trans from 'next-translate/Trans';
import numeral from 'numeral';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { formatDenom } from '@utils/format_denom';
import { MsgAddLimitOrder } from '@models';
import { useChainContext } from '@contexts';

const AddLimitOrder = (props: {
  message: MsgAddLimitOrder;
}) => {
  const { findAddress } = useChainContext();
  const { message } = props;
  const owner = findAddress(message.owner);
  const ownerMoniker = owner ? owner?.moniker : message.owner;
  const source = formatDenom(message.source.amount, message.source.denom);
  const destination = formatDenom(message.destination.amount, message.destination.denom);
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
          <b />,
          <b />,
        ]}
        values={{
          clientOrderId: message.clientOrderId,
          source: `${numeral(source.value).format('0,0.[000000]')} ${source.denom.toUpperCase()}`,
          destination: `${numeral(destination.value).format('0,0.[000000]')} ${destination.denom.toUpperCase()}`,
        }}
      />
    </Typography>
  );
};

export default AddLimitOrder;
