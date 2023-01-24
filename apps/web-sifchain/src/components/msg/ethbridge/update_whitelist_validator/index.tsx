import Typography from '@mui/material/Typography';
import { Trans } from 'next-i18next';
import { FC } from 'react';
import Name from '@/components/name';
import MsgUpdateWhitelistValidator from '@/models/msg/ethbridge/msg_update_whitelist_validator';
import { useProfileRecoil } from '@/recoil/profiles/hooks';

const UpdateWhiteListValidator: FC<{ message: MsgUpdateWhitelistValidator }> = (props) => {
  const { message } = props;

  const cosmosSender = useProfileRecoil(message.cosmosSender);
  const cosmosSenderMoniker = cosmosSender ? cosmosSender?.name : message.cosmosSender;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:MsgUpdateWhitelistValidator"
        components={[<Name address={message.cosmosSender} name={cosmosSenderMoniker} />, <b />]}
      />
    </Typography>
  );
};

export default UpdateWhiteListValidator;
