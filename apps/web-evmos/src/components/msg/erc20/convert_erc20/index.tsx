import Typography from '@mui/material/Typography';
import AppTrans from '@/components/AppTrans';
import { FC } from 'react';
import Name from '@/components/name';
import MsgConvertErc20 from '@/models/msg/erc20/msg_convert_erc20';
import { useProfileRecoil } from '@/recoil/profiles/hooks';

const ConvertErc20: FC<{ message: MsgConvertErc20 }> = (props) => {
  const { message } = props;

  const receiver = useProfileRecoil(message.receiver);
  const receiverMoniker = receiver ? receiver?.name : message.receiver;

  return (
    <Typography>
      <AppTrans
        i18nKey="message_contents:MsgConvertErc20"
        components={[<Name address={message.receiver} name={receiverMoniker} />, <b />]}
        values={{
          sender: message.sender,
          amount: message.amount,
        }}
      />
    </Typography>
  );
};

export default ConvertErc20;
