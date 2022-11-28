import Signers from '@/components/msg/data/sign_data_request/components/signers';
import MsgSignDataRequest from '@/models/msg/data/msg_sign_data_request';
import { useProfilesRecoil } from '@/recoil/profiles';
import Typography from '@material-ui/core/Typography';
import Trans from 'next-translate/Trans';
import React from 'react';

const SignDataRequest: React.FC<{ message: MsgSignDataRequest }> = (props) => {
  const { message } = props;
  const signersProfiles = useProfilesRecoil(message.signers);

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:MsgSignDataRequest"
        components={[<Signers signers={signersProfiles} />]}
      />
    </Typography>
  );
};

export default SignDataRequest;
