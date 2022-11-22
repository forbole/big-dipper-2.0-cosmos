import React from 'react';
import Trans from 'next-translate/Trans';
import Typography from '@material-ui/core/Typography';
import Name from 'ui/components/name';
import MsgEditOracleScript from '@models/band/msg/oracle/msg_edit_oracle_script';
import { useProfileRecoil } from 'ui/recoil/profiles';

const EditOracleScript: React.FC<{ message: MsgEditOracleScript }> = (props) => {
  const { message } = props;

  const sender = useProfileRecoil(message.sender);
  const senderMoniker = sender ? sender?.name : message.sender;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txEditOracleScript"
        components={[<Name address={message.sender} name={senderMoniker} />, <b />]}
        values={{
          name: message.name,
        }}
      />
    </Typography>
  );
};

export default EditOracleScript;
