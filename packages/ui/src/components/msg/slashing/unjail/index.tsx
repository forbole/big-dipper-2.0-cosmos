import Name from '@/components/name';
import { type MsgUnjail } from '@/models';
import { useProfileRecoil } from '@/recoil/profiles';
import Typography from '@material-ui/core/Typography';
import Trans from 'next-translate/Trans';
import React from 'react';

const Unjail: React.FC<{ message: MsgUnjail }> = (props) => {
  const { message } = props;
  const validator = useProfileRecoil(message.validatorAddress);
  const validatorMoniker = validator ? validator?.name : message.validatorAddress;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txUnjailContent"
        components={[<Name address={message.validatorAddress} name={validatorMoniker} />]}
      />
    </Typography>
  );
};

export default Unjail;
