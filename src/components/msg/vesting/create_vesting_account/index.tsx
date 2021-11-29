import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgCreateVestingAccount } from '@models';
import {
  useProfileRecoil,
} from '@recoil/profiles';

const CreateVestingAccount = (props: {
  message: MsgCreateVestingAccount;
}) => {
  const { message } = props;

  const to = useProfileRecoil(message.toAddress);
  const toMoniker = to ? to?.name : message.toAddress;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:MsgCreateVestingAccount"
        components={[
          (
            <Name
              address={message.toAddress}
              name={toMoniker}
            />
          ),
        ]}
      />
    </Typography>
  );
};

export default CreateVestingAccount;
