import React from 'react';
import Trans from 'next-translate/Trans';
import Typography from '@material-ui/core/Typography';
import Name from '@/components/name';
import MsgActivate from '@/models/msg/oracle/msg_activate';
import { useProfileRecoil } from '@/recoil/profiles';

const Activate: React.FC<{ message: MsgActivate }> = (props) => {
  const { message } = props;

  const validator = useProfileRecoil(message.validator);
  const validatorMoniker = validator ? validator?.name : message.validator;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txActivate"
        components={[<Name address={message.validator} name={validatorMoniker} />]}
      />
    </Typography>
  );
};

export default Activate;
