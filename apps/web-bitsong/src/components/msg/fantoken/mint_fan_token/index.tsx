import Typography from '@mui/material/Typography';
import { Trans } from 'next-i18next';
import { FC } from 'react';
import Name from '@/components/name';
import MsgMintFanToken from '@/models/msg/fantoken/msg_mint_fan_token';
import { useProfileRecoil } from '@/recoil/profiles/hooks';

const MintFanToken: FC<{ message: MsgMintFanToken }> = (props) => {
  const { message } = props;

  const recipient = useProfileRecoil(message.recipient);
  const recipientMoniker = recipient ? recipient?.name : message.recipient;

  return (
    <Typography>
      <Trans
        i18nKey="web_bitsong:message_contents.txMsgMintFanToken"
        components={[<Name address={message.recipient} name={recipientMoniker} />]}
      />
    </Typography>
  );
};

export default MintFanToken;
