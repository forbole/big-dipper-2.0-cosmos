import { FC } from 'react';
import { useProfileRecoil } from '@/recoil/profiles';
import { Typography } from '@mui/material';
import { Trans } from 'react-i18next';
import Name from '@/components/name';
import { MsgGloballyFreeze } from '@/models';

const GloballyFreeze: FC<{ message: MsgGloballyFreeze }> = (props) => {
  const { message } = props;

  const sender = useProfileRecoil(message.sender);

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:msgGloballyFreezeContent"
        components={[<Name address={message.sender} name={sender.name ?? message.sender} />, <b />]}
        values={{
          sender: message.sender,
          denom: message.denom,
        }}
      />
    </Typography>
  );
};

export default GloballyFreeze;
