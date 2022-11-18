import React from 'react';
import Trans from 'next-translate/Trans';
import Typography from '@material-ui/core/Typography';
import Name from 'ui/components/name';
import MsgEditDataSource from '@models/band/msg/oracle/msg_edit_data_source';
import { useProfileRecoil } from 'ui/recoil/profiles';

const EditDataSource: React.FC<{ message: MsgEditDataSource }> = (props) => {
  const { message } = props;

  const sender = useProfileRecoil(message.sender);
  const senderMoniker = sender ? sender?.name : message.sender;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txEditDataSource"
        components={[<Name address={message.sender} name={senderMoniker} />, <b />]}
        values={{
          name: message.name,
        }}
      />
    </Typography>
  );
};

export default EditDataSource;