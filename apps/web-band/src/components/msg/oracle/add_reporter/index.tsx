import Typography from '@mui/material/Typography';
import TransByApp from '@/components/TransByApp';
import { FC } from 'react';
import { useProfileRecoil } from '@/recoil/profiles/hooks';
import MsgAddReporter from '@/models/msg/oracle/msg_add_reporter';
import Name from '@/components/name';

const AddReporter: FC<{ message: MsgAddReporter }> = (props) => {
  const { message } = props;

  const validator = useProfileRecoil(message.validatorAddress);
  const validatorMoniker = validator ? validator?.name : message.validatorAddress;

  return (
    <Typography>
      <TransByApp
        i18nKey="message_contents:txAddReporter"
        components={[<Name address={message.validatorAddress} name={validatorMoniker} />, <b />]}
        values={{
          reporterAddress: message.reporterAddress,
        }}
      />
    </Typography>
  );
};

export default AddReporter;
