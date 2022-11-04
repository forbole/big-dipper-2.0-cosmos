import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { MsgSignDataRequest } from '@models';
import { useProfilesRecoil } from '@recoil/profiles';
import { Signers } from './components';

const SignDataRequest = (props: { message: MsgSignDataRequest }) => {
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
