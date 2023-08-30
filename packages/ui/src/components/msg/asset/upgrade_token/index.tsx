import { FC } from 'react';
import { useProfileRecoil } from '@/recoil/profiles';
import { Typography } from '@mui/material';
import { Trans } from 'react-i18next';
import Name from '@/components/name';
import { MsgUpgradeToken } from '@/models';

const UpgradeToken: FC<{ message: MsgUpgradeToken }> = (props) => {
  const { message } = props;

  const sender = useProfileRecoil(message.sender);

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:msgUpgradeTokenContent"
        components={[
          <Name address={message.sender} name={sender.name ?? message.sender} />,
          <b />,
          <b />,
        ]}
        values={{
          sender: message.sender,
          denom: message.denom,
          ibc_enabled: message.ibc_enabled,
        }}
      />
    </Typography>
  );
};

export default UpgradeToken;
