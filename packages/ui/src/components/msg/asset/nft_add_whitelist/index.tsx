import { FC } from 'react';
import { useProfileRecoil } from '@/recoil/profiles';
import { Typography } from '@mui/material';
import { Trans } from 'react-i18next';
import Name from '@/components/name';
import { MsgNftAddToWhitelist } from '@/models';

const NftAddToWhitelist: FC<{ message: MsgNftAddToWhitelist }> = (props) => {
  const { message } = props;

  const sender = useProfileRecoil(message.sender);
  const account = useProfileRecoil(message.account);

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:msgNftAddToWhitelistContent"
        components={[
          <Name address={message.sender} name={sender.name ?? message.sender} />,
          <Name address={message.account} name={account.name ?? message.account} />,
          <b />,
          <b />,
        ]}
        values={{
          id: message.id,
          class_id: message.class_id,
        }}
      />
    </Typography>
  );
};

export default NftAddToWhitelist;
