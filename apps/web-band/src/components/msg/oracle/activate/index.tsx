import Typography from '@mui/material/Typography';
import AppTrans from '@/components/AppTrans';
import { FC } from 'react';
import Name from '@/components/name';
import MsgActivate from '@/models/msg/oracle/msg_activate';
import { useProfileRecoil } from '@/recoil/profiles/hooks';

const Activate: FC<{ message: MsgActivate }> = (props) => {
  const { message } = props;

  const validator = useProfileRecoil(message.validator);
  const validatorMoniker = validator ? validator?.name : message.validator;

  return (
    <Typography>
      <AppTrans
        i18nKey="message_contents:txActivate"
        components={[<Name address={message.validator} name={validatorMoniker} />]}
      />
    </Typography>
  );
};

export default Activate;
