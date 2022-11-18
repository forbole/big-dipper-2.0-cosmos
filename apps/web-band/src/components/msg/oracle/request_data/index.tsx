import React from 'react';
import numeral from 'numeral';
import Trans from 'next-translate/Trans';
import Typography from '@material-ui/core/Typography';
import Name from 'ui/components/name';
import MsgRequestData from '@models/band/msg/oracle/msg_request_data';
import { useProfileRecoil } from 'ui/recoil/profiles';

const RequestData: React.FC<{ message: MsgRequestData }> = (props) => {
  const { message } = props;

  const sender = useProfileRecoil(message.sender);
  const senderMoniker = sender ? sender?.name : message.sender;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txRequestData"
        components={[<Name address={message.sender} name={senderMoniker} />, <b />]}
        values={{
          oracleScriptId: numeral(message.oracleScriptId).format('0,0'),
        }}
      />
    </Typography>
  );
};

export default RequestData;
