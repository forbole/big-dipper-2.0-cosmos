import React from 'react';
import Trans from 'next-translate/Trans';
import Typography from '@material-ui/core/Typography';
import MsgSignDataRequest from '@models/regen/msg/data/msg_sign_data_request';
import { useProfilesRecoil } from '@recoil/profiles';
import { Signers } from './components';

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
