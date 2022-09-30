import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgRevoke } from '@models';
import {
  useProfileRecoil,
} from '@recoil/profiles';

function Revoke(props: {
  message: MsgRevoke;
}) {
  const { message } = props;

  const granter = useProfileRecoil(message.granter);
  const granterMoniker = granter ? granter?.name : message.granter;

  const grantee = useProfileRecoil(message.grantee);
  const granteeMoniker = grantee ? grantee?.name : message.grantee;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:MsgRevoke"
        components={[
          (
            <Name
              address={message.granter}
              name={granterMoniker}
            />
          ),
          (
            <Name
              address={message.grantee}
              name={granteeMoniker}
            />
          ),
        ]}
      />
    </Typography>
  );
}

export default Revoke;
