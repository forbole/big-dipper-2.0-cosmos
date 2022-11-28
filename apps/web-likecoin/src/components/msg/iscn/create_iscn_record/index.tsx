import Name from '@/components/name';
import MsgCreateIscnRecord from '@/models/msg/iscn/msg_create_iscn_record';
import { useProfileRecoil } from '@/recoil/profiles';
import Typography from '@material-ui/core/Typography';
import Trans from 'next-translate/Trans';
import React from 'react';

const CreateIscnRecord: React.FC<{ message: MsgCreateIscnRecord }> = (props) => {
  const { message } = props;

  const from = useProfileRecoil(message.from);
  const fromMoniker = from ? from?.name : message.from;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txCreateIscnRecordContent"
        components={[<Name address={message.from} name={fromMoniker} />]}
      />
    </Typography>
  );
};

export default CreateIscnRecord;
