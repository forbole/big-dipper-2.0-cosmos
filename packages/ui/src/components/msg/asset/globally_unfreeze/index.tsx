import { FC } from 'react';
import { useProfileRecoil } from '@/recoil/profiles';
import { Typography } from '@mui/material';
import { Trans } from 'react-i18next';
import Name from '@/components/name';
import { MsgGloballyUnfreeze } from '@/models';

const GloballyUnfreeze: FC<{ message: MsgGloballyUnfreeze }> = (props) => {
  const { message } = props;

  const sender = useProfileRecoil(message.sender);

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:msgGloballyUnfreezeContent"
        components={[<Name address={message.sender} name={sender.name ?? message.sender} />, <b />]}
        values={{
          sender: message.sender,
          denom: message.denom,
        }}
      />
    </Typography>
  );
};

export default GloballyUnfreeze;
