import Name from '@/components/name';
import { MsgDtagAcceptTransfer } from '@/models';
import { useProfileRecoil } from '@/recoil/profiles/hooks';
import Typography from '@material-ui/core/Typography';
import Trans from 'next-translate/Trans';
import React, { FC } from 'react';

const DtagAcceptTransfer: FC<{ message: MsgDtagAcceptTransfer }> = (props) => {
  const { message } = props;

  const sender = useProfileRecoil(message.sender);
  const senderMoniker = sender ? sender?.name : message.sender;

  const receiver = useProfileRecoil(message.receiver);
  const receiverMoniker = receiver ? receiver?.name : message.receiver;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txAcceptDTagTransferContent"
        components={[
          <Name address={message.sender} name={senderMoniker} />,
          <Name address={message.receiver} name={receiverMoniker} />,
        ]}
      />
    </Typography>
  );
};

export default DtagAcceptTransfer;
