import Typography from '@mui/material/Typography';
import { Trans } from 'next-i18next';
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
      <Trans
        i18nKey="web-band:message_contents_txRequestData"
        components={[<Name address={message.sender} name={senderMoniker} />, <b />]}
        values={{
          oracleScriptId: numeral(message.oracleScriptId).format('0,0'),
        }}
      />
    </Typography>
  );
};

export default RequestData;
