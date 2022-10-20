import React from 'react';
import numeral from 'numeral';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgWithdraw } from '@models';
import { useProfileRecoil } from '@recoil/profiles';

const Withdraw = (props: {
  message: MsgWithdraw;
}) => {
  const { message } = props;

  const recipient = useProfileRecoil(message.recipient);
  const recipientMoniker = recipient ? recipient?.name : message.recipient;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txMsgWithdraw"
        components={[
          (
            <Name
              address={message.recipient}
              name={recipientMoniker}
            />
          ),
          <b />,
        ]}
        values={{
          id: numeral(message.auctionId).format('0,0'),
        }}
      />
    </Typography>
  );
};

export default Withdraw;
