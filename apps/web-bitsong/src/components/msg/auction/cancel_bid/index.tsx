import React from 'react';
import numeral from 'numeral';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import Name from '@components/name';
import { MsgCancelBid } from '@models';
import { useProfileRecoil } from '@recoil/profiles';

const CancelBid = (props: {
  message: MsgCancelBid;
}) => {
  const { message } = props;

  const bidder = useProfileRecoil(message.bidder);
  const bidderMoniker = bidder ? bidder?.name : message.bidder;

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
