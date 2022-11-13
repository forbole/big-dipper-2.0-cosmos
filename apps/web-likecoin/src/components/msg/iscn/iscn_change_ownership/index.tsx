import React from 'react';
import Trans from 'next-translate/Trans';
import numeral from 'numeral';
import Typography from '@material-ui/core/Typography';
import Name from 'ui/components/name';
import MsgChangeIscnRecordOwnership from '@models/likecoin/msg/iscn/msg_change_iscn_record_ownership';
import { useProfileRecoil } from '@recoil/profiles';

const IscnChangeOwnership = (props: { message: MsgChangeIscnRecordOwnership }) => {
  const { message } = props;

  const from = useProfileRecoil(message.from);
  const fromMoniker = from ? from?.name : message.from;

  const to = useProfileRecoil(message.newOwner);
  const toMoniker = to ? to?.name : message.newOwner;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txChangeIscnRecordOwnershipContent"
        components={[
          <Name address={message.from} name={fromMoniker} />,
          <b />,
          <Name address={message.newOwner} name={toMoniker} />,
        ]}
        values={{
          iscnId: numeral(message.iscnId).format('0,0'),
        }}
      />
    </Typography>
  );
};

export default IscnChangeOwnership;
