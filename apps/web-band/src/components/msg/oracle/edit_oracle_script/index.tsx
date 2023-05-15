import Typography from '@mui/material/Typography';
import AppTrans from '@/components/AppTrans';
import { FC } from 'react';
import Name from '@/components/name';
import MsgEditOracleScript from '@/models/msg/oracle/msg_edit_oracle_script';
import { useProfileRecoil } from '@/recoil/profiles/hooks';

const EditOracleScript: FC<{ message: MsgEditOracleScript }> = (props) => {
  const { message } = props;

  const sender = useProfileRecoil(message.sender);
  const senderMoniker = sender ? sender?.name : message.sender;

  return (
    <Typography>
      <AppTrans
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
