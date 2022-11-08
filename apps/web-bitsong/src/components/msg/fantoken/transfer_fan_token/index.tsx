import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import Name from '@components/name';
import MsgTransferFanTokenOwner from '@models/bitsong/msg/fantoken/msg_transfer_fan_token';
import { useProfileRecoil } from '@recoil/profiles';

const TransferFanToken = (props: { message: MsgTransferFanTokenOwner }) => {
  const { message } = props;

  const src = useProfileRecoil(message.srcOwner);
  const srcMoniker = src ? src?.name : message.srcOwner;

  const dst = useProfileRecoil(message.dstOwner);
  const dstMoniker = dst ? dst?.name : message.dstOwner;

  return (
    <Typography>
      <Trans
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
