import Name from '@/components/name';
import MsgClawback from '@/models/msg/vesting/msg_clawback';
import { useProfileRecoil } from '@/recoil/profiles/hooks';
import Typography from '@mui/material/Typography';
import Trans from 'next-translate/Trans';
import React, { FC } from 'react';

const Clawback: FC<{ message: MsgClawback }> = (props) => {
  const { message } = props;

  const account = useProfileRecoil(message.accountAddress);
  const accountMoniker = account ? account?.name : message.accountAddress;

  const dest = useProfileRecoil(message.destAddress);
  const destMoniker = dest ? dest?.name : message.destAddress;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:MsgClawback"
        components={[
          <Name address={message.accountAddress} name={accountMoniker} />,
          <Name address={message.destAddress} name={destMoniker} />,
        ]}
      />
    </Typography>
  );
};

export default Clawback;
