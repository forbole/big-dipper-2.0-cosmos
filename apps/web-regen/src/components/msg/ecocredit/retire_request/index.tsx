import Typography from '@mui/material/Typography';
import AppTrans from '@/components/AppTrans';
import { FC } from 'react';
import Name from '@/components/name';
import MsgRetireRequest from '@/models/msg/ecocredit/msg_retire_request';
import { useProfileRecoil } from '@/recoil/profiles/hooks';

const RetireRequest: FC<{ message: MsgRetireRequest }> = (props) => {
  const { message } = props;

  const holder = useProfileRecoil(message.holder);
  const holderMoniker = holder ? holder?.name : message.holder;

  return (
    <Typography>
      <AppTrans
        i18nKey="message_contents:MsgRetireRequest"
        components={[<Name address={message.holder} name={holderMoniker} />]}
      />
    </Typography>
  );
};

export default RetireRequest;
