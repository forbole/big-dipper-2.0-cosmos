import Typography from '@mui/material/Typography';
import { Trans } from 'next-i18next';
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
      <Trans
        i18nKey="chain_band:message_contents_txEditOracleScript"
        components={[<Name address={message.sender} name={senderMoniker} />, <b />]}
        values={{
          name: message.name,
        }}
      />
    </Typography>
  );
};

export default EditOracleScript;
