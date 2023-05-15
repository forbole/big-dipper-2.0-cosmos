import Typography from '@mui/material/Typography';
import AppTrans from '@/components/AppTrans';
import { FC } from 'react';
import Name from '@/components/name';
import MsgCreateDataSource from '@/models/msg/oracle/msg_create_data_source';
import { useProfileRecoil } from '@/recoil/profiles/hooks';

const CreateDataSource: FC<{ message: MsgCreateDataSource }> = (props) => {
  const { message } = props;

  const sender = useProfileRecoil(message.sender);
  const senderMoniker = sender ? sender?.name : message.sender;

  return (
    <Typography>
      <AppTrans
        i18nKey="message_contents:txCreateDataSource"
        components={[<Name address={message.sender} name={senderMoniker} />, <b />]}
        values={{
          name: message.name,
        }}
      />
    </Typography>
  );
};

export default CreateDataSource;
