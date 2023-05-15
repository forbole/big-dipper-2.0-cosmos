import Typography from '@mui/material/Typography';
import AppTrans from '@/components/AppTrans';
import { FC } from 'react';
import Name from '@/components/name';
import { MsgDtagRefuseTransfer } from '@/models';
import { useProfileRecoil } from '@/recoil/profiles/hooks';

const DtagRefuseTransfer: FC<{ message: MsgDtagRefuseTransfer }> = (props) => {
  const { message } = props;

  const sender = useProfileRecoil(message.sender);
  const senderMoniker = sender ? sender?.name : message.sender;

  const receiver = useProfileRecoil(message.receiver);
  const receiverMoniker = receiver ? receiver?.name : message.receiver;

  return (
    <Typography>
      <AppTrans
        i18nKey="message_contents:txRefuseDTagTransferContent"
        components={[
          <Name address={message.sender} name={senderMoniker} />,
          <Name address={message.receiver} name={receiverMoniker} />,
        ]}
      />
    </Typography>
  );
};

export default DtagRefuseTransfer;
