import Typography from '@mui/material/Typography';
import { Trans } from 'next-i18next';
import numeral from 'numeral';
import { FC } from 'react';
import { useProfileRecoil } from '@/recoil/profiles/hooks';
import MsgEditAuction from '@/models/msg/auction/msg_edit_auction';
import Name from '@/components/name';

const EditAuction: FC<{ message: MsgEditAuction }> = (props) => {
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
