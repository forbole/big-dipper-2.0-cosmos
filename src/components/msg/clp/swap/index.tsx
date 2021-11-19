import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import {
  formatToken, formatNumber,
} from '@utils/format_token';
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

  const sentAmount = formatToken(message.sentAmount, message.sentAsset.symbol);
  const parsedSentAmount = `${formatNumber(sentAmount.value, sentAmount.exponent)} ${sentAmount.displayDenom.toUpperCase()}`;

  const receivedAmount = formatToken(message.receivedAmount, message.receivedAsset.symbol);
  const parsedReceivedAmount = `${formatNumber(receivedAmount.value, receivedAmount.exponent)} ${receivedAmount.displayDenom.toUpperCase()}`;

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
