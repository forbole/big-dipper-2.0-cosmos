import Typography from '@mui/material/Typography';
import AppTrans from '@/components/AppTrans';
import { FC } from 'react';
import Name from '@/components/name';
import MsgTransferFanTokenOwner from '@/models/msg/fantoken/msg_transfer_fan_token';
import { useProfileRecoil } from '@/recoil/profiles/hooks';

const TransferFanToken: FC<{ message: MsgTransferFanTokenOwner }> = (props) => {
  const { message } = props;

  const src = useProfileRecoil(message.srcOwner);
  const srcMoniker = src ? src?.name : message.srcOwner;

  const dst = useProfileRecoil(message.dstOwner);
  const dstMoniker = dst ? dst?.name : message.dstOwner;

  return (
    <Typography>
      <AppTrans
        i18nKey="message_contents:txMsgTransferFanTokenOwner"
        components={[
          <Name address={message.srcOwner} name={srcMoniker} />,
          <b />,
          <Name address={message.dstOwner} name={dstMoniker} />,
        ]}
        values={{
          symbol: message.symbol,
        }}
      />
    </Typography>
  );
};

export default TransferFanToken;
