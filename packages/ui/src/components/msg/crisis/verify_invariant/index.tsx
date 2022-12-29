import Name from '@/components/name';
import { MsgVerifyInvariant } from '@/models';
import { useProfileRecoil } from '@/recoil/profiles/hooks';
import Typography from '@material-ui/core/Typography';
import Trans from 'next-translate/Trans';
import React, { FC } from 'react';

const VerifyInvariant: FC<{ message: MsgVerifyInvariant }> = (props) => {
  const { message } = props;

  const user = useProfileRecoil(message.sender);
  const userMoniker = user ? user?.name : message.sender;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txVerifyInvariantContent"
        components={[<Name address={message.sender} name={userMoniker} />]}
      />
    </Typography>
  );
};

export default VerifyInvariant;
