import React from 'react';
import numeral from 'numeral';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { formatDenom } from '@utils/format_denom';
import { Name } from '@components';
import { MsgSwap } from '@models';
import {
  useProfileRecoil,
} from '@recoil/profiles';

const Swap = (props: {
  message: MsgSwap;
}) => {
  const { message } = props;

  const signer = useProfileRecoil(message.signer);
  const signerMoniker = signer ? signer?.name : message.signer;

  const sentAmount = formatDenom(message.sentAmount, message.sentAsset.symbol);
  const parsedSentAmount = `${numeral(sentAmount.value).format(sentAmount.format)} ${sentAmount.denom.toUpperCase()}`;

  const receivedAmount = formatDenom(message.receivedAmount, message.receivedAsset.symbol);
  const parsedReceivedAmount = `${numeral(receivedAmount.value).format(receivedAmount.format)} ${receivedAmount.denom.toUpperCase()}`;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:MsgSwap"
        components={[
          (
            <Name
              address={message.signer}
              name={signerMoniker}
            />
          ),
          <b />,
        ]}
        values={{
          sentAmount: parsedSentAmount,
          receivedAmount: parsedReceivedAmount,
        }}
      />
    </Typography>
  );
};

export default Swap;
