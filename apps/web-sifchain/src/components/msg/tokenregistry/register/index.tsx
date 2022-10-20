import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgRegister } from '@models';
import {
  useProfileRecoil,
} from '@recoil/profiles';

const Register = (props: {
  message: MsgRegister;
}) => {
  const { message } = props;

  const from = useProfileRecoil(message.from);
  const fromMoniker = from ? from?.name : message.from;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:MsgRegister"
        components={[
          (
            <Name
              address={message.from}
              name={fromMoniker}
            />
          ),
          <b />,
        ]}
        values={{
          denom: message.entry.denom.toUpperCase(),
        }}
      />
    </Typography>
  );
};

export default Register;
