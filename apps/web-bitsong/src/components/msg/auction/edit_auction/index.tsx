import React from 'react';
import numeral from 'numeral';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import Name from '@components/name';
import MsgEditAuction from '@models/bitsong/msg/auction/msg_edit_auction';
import { useProfileRecoil } from '@recoil/profiles';

const EditAuction = (props: { message: MsgEditAuction }) => {
  const { message } = props;

  const owner = useProfileRecoil(message.owner);
  const ownerMoniker = owner ? owner?.name : message.owner;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txMsgEditAuction"
        components={[<Name address={message.owner} name={ownerMoniker} />, <b />]}
        values={{
          id: numeral(message.id).format('0,0'),
        }}
      />
    </Typography>
  );
};

export default EditAuction;
