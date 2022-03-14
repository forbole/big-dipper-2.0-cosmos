import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgConvertErc20 } from '@models';
import {
  useProfileRecoil,
} from '@recoil/profiles';

const ConvertErc20 = (props: {
  message: MsgConvertErc20;
}) => {
  const { message } = props;

  const receiver = useProfileRecoil(message.receiver);
  const receiverMoniker = receiver ? receiver?.name : message.receiver;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:MsgConvertErc20"
        components={[
          (
            <Name
              address={message.receiver}
              name={receiverMoniker}
            />
          ),
          <b />,
        ]}
        values={{
          sender: message.sender,
          amount: message.amount,
        }}
      />
    </Typography>
  );
};

export default ConvertErc20;
