import React from 'react';
import numeral from 'numeral';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import {
  formatToken, formatNumber,
} from '@utils/format_token';
import Name from '@components/name';
import { MsgOpenBid } from '@models';
import { useProfileRecoil } from '@recoil/profiles';

const OpenBid = (props: {
  message: MsgOpenBid;
}) => {
  const { message } = props;

  const amount = formatToken(message.bidAmount.amount, message.bidAmount.denom);

  const parsedAmount = `${formatNumber(amount.value, amount.exponent)} ${amount.displayDenom.toUpperCase()}`;

  const bidder = useProfileRecoil(message.bidder);
  const bidderMoniker = bidder ? bidder?.name : message.bidder;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txMsgOpenBid"
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
          amount: parsedAmount,
        }}
      />
    </Typography>
  );
};

export default OpenBid;
