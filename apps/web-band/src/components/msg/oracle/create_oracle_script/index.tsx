import React from 'react';
import Trans from 'next-translate/Trans';
import Typography from '@material-ui/core/Typography';
import Name from 'ui/components/name';
import MsgCreateOracleScript from '@models/band/msg/oracle/msg_create_oracle_script';
import { useProfileRecoil } from '@recoil/profiles';

const CreateOracleScript = (props: { message: MsgCreateOracleScript }) => {
  const { message } = props;

  const sender = useProfileRecoil(message.sender);
  const senderMoniker = sender ? sender?.name : message.sender;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txCreateOracleScript"
        components={[<Name address={message.sender} name={senderMoniker} />, <b />]}
        values={{
          name: message.name,
        }}
      />
    </Typography>
  );
};

export default CreateOracleScript;
