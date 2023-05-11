import Typography from '@mui/material/Typography';
import { Trans } from 'next-i18next';
import { FC } from 'react';
import { useProfileRecoil } from '@/recoil/profiles/hooks';
import MsgRemoveReporter from '@/models/msg/oracle/msg_remove_reporter';
import Name from '@/components/name';

const RemoveReporter: FC<{ message: MsgRemoveReporter }> = (props) => {
  const { message } = props;

  const validator = useProfileRecoil(message.validatorAddress);
  const validatorMoniker = validator ? validator?.name : message.validatorAddress;

  return (
    <Typography>
      <Trans
        i18nKey="web-band:message_contents_txRemoveReporter"
        components={[<Name address={message.validatorAddress} name={validatorMoniker} />, <b />]}
        values={{
          reporterAddress: message.reporterAddress,
        }}
      />
    </Typography>
  );
};

export default RemoveReporter;
