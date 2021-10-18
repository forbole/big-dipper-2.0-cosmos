import React from 'react';
import numeral from 'numeral';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgWithdraw } from '@models';
import { useChainContext } from '@contexts';

const Withdraw = (props: {
  message: MsgWithdraw;
}) => {
  const { findAddress } = useChainContext();
  const { message } = props;

  const recipient = findAddress(message.recipient);
  const recipientMoniker = recipient ? recipient?.moniker : message.recipient;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txMsgWithdraw"
        components={[
          (
            <Name
              address={message.recipient}
              name={recipientMoniker}
            />
          ),
          <b />,
        ]}
        values={{
          id: numeral(message.auctionId).format('0,0'),
        }}
      />
    </Typography>
  );
};

export default Withdraw;
