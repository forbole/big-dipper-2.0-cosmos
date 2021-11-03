import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgTransfer } from '@models';
import { useProfileRecoil } from '@recoil/profiles';
import numeral from 'numeral';
import { formatDenom } from '@utils/format_denom';

const Transfer = (props: {
  message: MsgTransfer;
}) => {
  const { message } = props;

  const sender = useProfileRecoil(message.sender);
  const senderMoniker = sender ? sender?.name : message.sender;
  const receiver = useProfileRecoil(message.receiver);
  const receiverMoniker = receiver ? receiver?.name : message.receiver;
  const tokenFormatDenom = formatDenom(message.token?.amount, message.token?.denom);
  const token = `${numeral(tokenFormatDenom.value).format(tokenFormatDenom.format)} ${tokenFormatDenom.denom.toUpperCase()}`;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txTransferContent"
        components={[
          (
            <Name
              address={message.sender}
              name={senderMoniker}
            />
          ),
          (
            <Name
              address={message.receiver}
              name={receiverMoniker}
            />
          ),
          <b />,
        ]}
        values={{
          token,
          sourceChannel: message.sourceChannel,
        }}
      />
    </Typography>
  );
};

export default Transfer;
