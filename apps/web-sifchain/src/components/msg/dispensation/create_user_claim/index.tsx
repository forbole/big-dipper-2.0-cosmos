import Typography from '@mui/material/Typography';
import Trans from 'next-translate/Trans';
import { FC } from 'react';
import Name from '@/components/name';
import MsgCreateUserClaim from '@/models/msg/dispensation/msg_create_user_claim';
import { useProfileRecoil } from '@/recoil/profiles/hooks';

const CreateUserClaim: FC<{ message: MsgCreateUserClaim }> = (props) => {
  const { message } = props;

  const user = useProfileRecoil(message.userClaimAddress);
  const userMoniker = user ? user?.name : message.userClaimAddress;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:MsgCreateUserClaim"
        components={[<Name address={message.userClaimAddress} name={userMoniker} />, <b />]}
        values={{
          userClaimType: message.userClaimType,
        }}
      />
    </Typography>
  );
};

export default CreateUserClaim;
