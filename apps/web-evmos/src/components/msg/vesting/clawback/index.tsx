import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import Name from '@components/name';
import { MsgClawback } from '@models';
import {
  useProfileRecoil,
} from '@recoil/profiles';

const Clawback = (props: {
  message: MsgClawback;
}) => {
  const { message } = props;

  const account = useProfileRecoil(message.accountAddress);
  const accountMoniker = account ? account?.name : message.accountAddress;

  const dest = useProfileRecoil(message.destAddress);
  const destMoniker = dest ? dest?.name : message.destAddress;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:MsgClawback"
        components={[
          (
            <Name
              address={message.accountAddress}
              name={accountMoniker}
            />
          ),
          (
            <Name
              address={message.destAddress}
              name={destMoniker}
            />
          ),
        ]}
      />
    </Typography>
  );
};

export default Clawback;
