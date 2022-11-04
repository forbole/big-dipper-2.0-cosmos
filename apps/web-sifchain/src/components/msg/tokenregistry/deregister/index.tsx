import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import Name from '@components/name';
import { MsgDeregister } from '@models';
import { useProfileRecoil } from '@recoil/profiles';

const Deregister = (props: { message: MsgDeregister }) => {
  const { message } = props;

  const from = useProfileRecoil(message.from);
  const fromMoniker = from ? from?.name : message.from;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:MsgDeregister"
        components={[<Name address={message.from} name={fromMoniker} />, <b />]}
        values={{
          denom: message.denom.toUpperCase(),
        }}
      />
    </Typography>
  );
};

export default Deregister;
