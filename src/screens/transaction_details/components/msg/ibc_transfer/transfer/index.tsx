import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgTransfer } from '@models';
import { useChainContext } from '@contexts';
import numeral from 'numeral';
import { formatDenom } from '@utils/format_denom';

const Transfer = (props: {
  message: MsgTransfer;
}) => {
  const { findAddress } = useChainContext();
  const { message } = props;

  const sender = findAddress(message.sender);
  const senderMoniker = sender ? sender?.moniker : message.sender;
  const receiver = findAddress(message.receiver);
  const receiverMoniker = receiver ? receiver?.moniker : message.receiver;
  const tokenFormatDenom = formatDenom(message.token?.amount, message.token?.denom);
  const token = `${numeral(tokenFormatDenom.value).format('0,0.[0000]')} ${tokenFormatDenom.denom.toUpperCase()}`;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txTransferContent"
        components={[
          (
            <Name
              address={message.sender}
              name={senderMoniker}
            />
          ),
          (
            <Name
              address={message.receiver}
              name={receiverMoniker}
            />
          ),
          <b />,
        ]}
        values={{
          token,
          sourceChannel: message.sourceChannel,
        }}
      />
    </Typography>
  );
};

export default Transfer;
