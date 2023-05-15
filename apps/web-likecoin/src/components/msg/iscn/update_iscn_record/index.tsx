import Typography from '@mui/material/Typography';
import AppTrans from '@/components/AppTrans';
import numeral from 'numeral';
import { FC } from 'react';
import { useProfileRecoil } from '@/recoil/profiles/hooks';
import MsgUpdateIscnRecord from '@/models/msg/iscn/msg_update_iscn_record';
import Name from '@/components/name';

const UpdateIscnRecord: FC<{ message: MsgUpdateIscnRecord }> = (props) => {
  const { message } = props;

  const from = useProfileRecoil(message.from);
  const fromMoniker = from ? from?.name : message.from;

  return (
    <Typography>
      <AppTrans
        i18nKey="message_contents:txUpdateIscnRecordContent"
        components={[<Name address={message.from} name={fromMoniker} />, <b />]}
        values={{
          iscnId: numeral(message.iscnId).format('0,0'),
        }}
      />
    </Typography>
  );
};

export default UpdateIscnRecord;
