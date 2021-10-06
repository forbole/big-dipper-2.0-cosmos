import React from 'react';
import numeral from 'numeral';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgRequestData } from '@models';
import { useChainContext } from '@contexts';

const RequestData = (props: {
  message: MsgRequestData;
}) => {
  const { findAddress } = useChainContext();
  const { message } = props;

  const sender = findAddress(message.sender);
  const senderMoniker = sender ? sender?.moniker : message
    .sender;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txRequestData"
        components={[
          (
            <Name
              address={message.sender}
              name={senderMoniker}
            />
          ),
          (
            <b />
          ),
        ]}
        values={{
          oracleScriptId: numeral(message.oracleScriptId).format('0,0'),
        }}
      />
    </Typography>
  );
};

export default RequestData;
