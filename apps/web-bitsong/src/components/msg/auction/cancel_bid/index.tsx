import Typography from '@mui/material/Typography';
import AppTrans from '@/components/AppTrans';
import numeral from 'numeral';
import { FC } from 'react';
import { useProfileRecoil } from '@/recoil/profiles/hooks';
import MsgCancelBid from '@/models/msg/auction/msg_cancel_bid';
import Name from '@/components/name';

const CancelBid: FC<{ message: MsgCancelBid }> = (props) => {
  const { message } = props;

  const bidder = useProfileRecoil(message.bidder);
  const bidderMoniker = bidder ? bidder?.name : message.bidder;

  return (
    <Typography>
      <AppTrans
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
