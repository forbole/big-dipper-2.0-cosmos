import Typography from '@mui/material/Typography';
import { Trans } from 'next-i18next';
import { FC } from 'react';
import Name from '@/components/name';
import MsgRegister from '@/models/msg/tokenregistry/msg_register';
import { useProfileRecoil } from '@/recoil/profiles/hooks';

const Register: FC<{ message: MsgRegister }> = (props) => {
  const { message } = props;

  const from = useProfileRecoil(message.from);
  const fromMoniker = from ? from?.name : message.from;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:MsgRegister"
        components={[<Name address={message.from} name={fromMoniker} />, <b />]}
        values={{
          denom: message.entry.denom.toUpperCase(),
        }}
      />
    </Typography>
  );
};

export default Register;
