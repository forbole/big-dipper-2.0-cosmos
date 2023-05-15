import Typography from '@mui/material/Typography';
import AppTrans from '@/components/AppTrans';
import { FC } from 'react';
import Name from '@/components/name';
import MsgSupportStandardReason from '@/models/msg/reports/msg_support_standard_reason';
import { useProfileRecoil } from '@/recoil/profiles/hooks';

const SupportStandardReason: FC<{ message: MsgSupportStandardReason }> = (props) => {
  const { message } = props;

  const signer = useProfileRecoil(message.signer);

  const signerMoniker = signer ? signer?.name : message.signer;

  return (
    <Typography>
      <AppTrans
        i18nKey="message_contents:txMsgSupportStandardReason"
        components={[<Name address={message.signer} name={signerMoniker} />, <b />]}
        values={{
          signer: signerMoniker,
        }}
      />
    </Typography>
  );
};

export default SupportStandardReason;
