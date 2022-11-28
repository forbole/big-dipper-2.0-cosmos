import Name from '@/components/name';
import MsgCancelBid from '@/models/msg/auction/msg_cancel_bid';
import { useProfileRecoil } from '@/recoil/profiles';
import Typography from '@material-ui/core/Typography';
import Trans from 'next-translate/Trans';
import numeral from 'numeral';
import React from 'react';

const CancelBid: React.FC<{ message: MsgCancelBid }> = (props) => {
  const { message } = props;

  const bidder = useProfileRecoil(message.bidder);
  const bidderMoniker = bidder ? bidder?.name : message.bidder;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txMsgCancelBid"
        components={[<Name address={message.bidder} name={bidderMoniker} />, <b />]}
        values={{
          id: numeral(message.auctionId).format('0,0'),
        }}
      />
    </Typography>
  );
};

export default CancelBid;
