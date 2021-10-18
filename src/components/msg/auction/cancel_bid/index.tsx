import React from 'react';
import numeral from 'numeral';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgCancelBid } from '@models';
import { useChainContext } from '@contexts';

const CancelBid = (props: {
  message: MsgCancelBid;
}) => {
  const { findAddress } = useChainContext();
  const { message } = props;

  const bidder = findAddress(message.bidder);
  const bidderMoniker = bidder ? bidder?.moniker : message.bidder;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txMsgCancelBid"
        components={[
          (
            <Name
              address={message.bidder}
              name={bidderMoniker}
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

export default CancelBid;
