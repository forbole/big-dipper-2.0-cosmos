import Typography from '@mui/material/Typography';
import AppTrans from '@/components/AppTrans';
import numeral from 'numeral';
import { FC } from 'react';
import Name from '@/components/name';
import MsgOpenBid from '@/models/msg/auction/msg_open_bid';
import { useProfileRecoil } from '@/recoil/profiles/hooks';
import { formatNumber, formatToken } from '@/utils/format_token';

const OpenBid: FC<{ message: MsgOpenBid }> = (props) => {
  const { message } = props;

  const amount = formatToken(message.bidAmount.amount, message.bidAmount.denom);

  const parsedAmount = `${formatNumber(
    amount.value,
    amount.exponent
  )} ${amount.displayDenom.toUpperCase()}`;

  const bidder = useProfileRecoil(message.bidder);
  const bidderMoniker = bidder ? bidder?.name : message.bidder;

  return (
    <Typography>
      <AppTrans
        i18nKey="message_contents:txMsgOpenBid"
        components={[<Name address={message.bidder} name={bidderMoniker} />, <b />]}
        values={{
          id: numeral(message.auctionId).format('0,0'),
          amount: parsedAmount,
        }}
      />
    </Typography>
  );
};

export default OpenBid;
