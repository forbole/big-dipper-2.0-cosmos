import Typography from '@mui/material/Typography';
import TransByApp from '@/components/TransByApp';
import { FC } from 'react';
import Name from '@/components/name';
import { MsgVerifyInvariant } from '@/models';
import { useProfileRecoil } from '@/recoil/profiles/hooks';

const VerifyInvariant: FC<{ message: MsgVerifyInvariant }> = (props) => {
  const { message } = props;

  const user = useProfileRecoil(message.sender);
  const userMoniker = user ? user?.name : message.sender;

  return (
    <Typography>
      <TransByApp
        i18nKey="message_contents:txVerifyInvariantContent"
        components={[<Name address={message.sender} name={userMoniker} />]}
      />
    </Typography>
  );
};

export default VerifyInvariant;
