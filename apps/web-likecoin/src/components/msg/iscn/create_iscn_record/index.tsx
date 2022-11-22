import React from 'react';
import Trans from 'next-translate/Trans';
import Typography from '@material-ui/core/Typography';
import Name from 'ui/components/name';
import MsgCreateIscnRecord from '@models/likecoin/msg/iscn/msg_create_iscn_record';
import { useProfileRecoil } from 'ui/recoil/profiles';

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
