import React from 'react';
import numeral from 'numeral';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgMigrateCode } from '@models';
import { useChainContext } from '@contexts';

const MigrateCode = (props: {
  message: MsgMigrateCode;
}) => {
  const { findAddress } = useChainContext();
  const { message } = props;

  const sender = findAddress(message.sender);
  const senderMoniker = sender ? sender?.moniker : message
    .sender;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txMigrateCode"
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

export default MigrateCode;
