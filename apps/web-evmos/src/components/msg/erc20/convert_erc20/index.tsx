import React from 'react';
import Trans from 'next-translate/Trans';
import Typography from '@material-ui/core/Typography';
import Name from '@/components/name';
import MsgConvertErc20 from '@/models/msg/erc20/msg_convert_erc20';
import { useProfileRecoil } from '@/recoil/profiles';

const ConvertErc20: React.FC<{ message: MsgConvertErc20 }> = (props) => {
  const { message } = props;

  const receiver = useProfileRecoil(message.receiver);
  const receiverMoniker = receiver ? receiver?.name : message.receiver;

  return (
    <Typography>
      <Trans
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
