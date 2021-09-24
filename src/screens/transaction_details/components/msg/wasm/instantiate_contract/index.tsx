import React from 'react';
import numeral from 'numeral';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgInstantiateContract } from '@models';
import { useChainContext } from '@contexts';

const InstantiateContract = (props: {
  message: MsgInstantiateContract;
}) => {
  const { findAddress } = useChainContext();
  const { message } = props;

  const sender = findAddress(message.sender);
  const senderMoniker = sender ? sender?.moniker : message
    .sender;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txInstantiateContract"
        components={[
          (
            <Name
              address={message.sender}
              name={senderMoniker}
            />
          ),
          <b />,
        ]}
        values={{
          codeId: numeral(message.codeId).format('0,0'),
        }}
      />
    </Typography>
  );
};

export default InstantiateContract;
