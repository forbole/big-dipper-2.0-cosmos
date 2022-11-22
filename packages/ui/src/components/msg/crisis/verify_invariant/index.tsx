import React from 'react';
import Trans from 'next-translate/Trans';
import Typography from '@material-ui/core/Typography';
import Name from '@components/name';
import { MsgVerifyInvariant } from '@models';
import { useProfileRecoil } from 'ui/recoil/profiles';

const VerifyInvariant: React.FC<{ message: MsgVerifyInvariant }> = (props) => {
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
