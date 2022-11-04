import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import Name from '@components/name';
import { MsgCreateUserClaim } from '@models';
import { useProfileRecoil } from '@recoil/profiles';

const CreateUserClaim = (props: { message: MsgCreateUserClaim }) => {
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
