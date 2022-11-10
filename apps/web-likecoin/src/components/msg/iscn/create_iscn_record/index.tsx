import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import Name from '@components/name';
import MsgCreateIscnRecord from '@models/likecoin/msg/iscn/msg_create_iscn_record';
import { useProfileRecoil } from '@recoil/profiles';

const CreateIscnRecord = (props: { message: MsgCreateIscnRecord }) => {
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
