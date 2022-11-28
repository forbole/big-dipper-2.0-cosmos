import Name from '@/components/name';
import MsgWithdraw from '@/models/msg/auction/msg_withdraw';
import { useProfileRecoil } from '@/recoil/profiles';
import Typography from '@material-ui/core/Typography';
import Trans from 'next-translate/Trans';
import numeral from 'numeral';
import React from 'react';

const Withdraw: React.FC<{ message: MsgWithdraw }> = (props) => {
  const { message } = props;

  const recipient = useProfileRecoil(message.recipient);
  const recipientMoniker = recipient ? recipient?.name : message.recipient;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txMsgWithdraw"
        components={[<Name address={message.recipient} name={recipientMoniker} />, <b />]}
        values={{
          id: numeral(message.auctionId).format('0,0'),
        }}
      />
    </Typography>
  );
};

export default Withdraw;
