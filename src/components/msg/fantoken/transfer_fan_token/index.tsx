import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgTransferFanTokenOwner } from '@models';
import { useChainContext } from '@contexts';

const TransferFanToken = (props: {
  message: MsgTransferFanTokenOwner;
}) => {
  const { findAddress } = useChainContext();
  const { message } = props;

  const src = findAddress(message.srcOwner);
  const srcMoniker = src ? src?.moniker : message.srcOwner;

  const dst = findAddress(message.dstOwner);
  const dstMoniker = dst ? dst?.moniker : message.dstOwner;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txMsgTransferFanTokenOwner"
        components={[
          (
            <Name
              address={message.srcOwner}
              name={srcMoniker}
            />
          ),
          <b />,
          (
            <Name
              address={message.dstOwner}
              name={dstMoniker}
            />
          ),
        ]}
        values={{
          symbol: message.symbol,
        }}
      />
    </Typography>
  );
};

export default TransferFanToken;
