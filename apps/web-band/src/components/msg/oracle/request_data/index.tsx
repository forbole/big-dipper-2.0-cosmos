import Typography from '@mui/material/Typography';
import TransByApp from '@/components/TransByApp';
import numeral from 'numeral';
import { FC } from 'react';
import { useProfileRecoil } from '@/recoil/profiles/hooks';
import MsgRequestData from '@/models/msg/oracle/msg_request_data';
import Name from '@/components/name';

const RequestData: FC<{ message: MsgRequestData }> = (props) => {
  const { message } = props;

  const sender = useProfileRecoil(message.sender);
  const senderMoniker = sender ? sender?.name : message.sender;

  return (
    <Typography>
      <TransByApp
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
