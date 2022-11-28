import Name from '@/components/name';
import MsgRetireRequest from '@/models/msg/ecocredit/msg_retire_request';
import { useProfileRecoil } from '@/recoil/profiles';
import Typography from '@material-ui/core/Typography';
import Trans from 'next-translate/Trans';
import React from 'react';

const RetireRequest: React.FC<{ message: MsgRetireRequest }> = (props) => {
  const { message } = props;

  const holder = useProfileRecoil(message.holder);
  const holderMoniker = holder ? holder?.name : message.holder;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:MsgRetireRequest"
        components={[<Name address={message.holder} name={holderMoniker} />]}
      />
    </Typography>
  );
};

export default RetireRequest;
