import Typography from '@mui/material/Typography';
import TransByApp from '@/components/TransByApp';
import numeral from 'numeral';
import { FC } from 'react';
import { useProfileRecoil } from '@/recoil/profiles/hooks';
import MsgWithdraw from '@/models/msg/auction/msg_withdraw';
import Name from '@/components/name';

const Withdraw: FC<{ message: MsgWithdraw }> = (props) => {
  const { message } = props;

  const recipient = useProfileRecoil(message.recipient);
  const recipientMoniker = recipient ? recipient?.name : message.recipient;

  return (
    <Typography>
      <TransByApp
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
