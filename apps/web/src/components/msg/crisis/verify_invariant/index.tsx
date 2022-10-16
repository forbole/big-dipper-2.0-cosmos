import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgVerifyInvariant } from '@models';
import {
  useProfileRecoil,
} from '@recoil/profiles';

const VerifyInvariant = (props: {
  message: MsgVerifyInvariant;
}) => {
  const { message } = props;

  const user = useProfileRecoil(message.sender);
  const userMoniker = user ? user?.name : message.sender;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txVerifyInvariantContent"
        components={[
          (
            <Name
              address={message.sender}
              name={userMoniker}
            />
          ),
        ]}
      />
    </Typography>
  );
};

export default VerifyInvariant;
