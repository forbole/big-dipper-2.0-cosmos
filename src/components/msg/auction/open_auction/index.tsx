import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgOpenAuction } from '@models';
import { useChainContext } from '@contexts';

const OpenAuction = (props: {
  message: MsgOpenAuction;
}) => {
  const { findAddress } = useChainContext();
  const { message } = props;

  const owner = findAddress(message.owner);
  const ownerMoniker = owner ? owner?.moniker : message.owner;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txMsgOpenAuction"
        components={[
          (
            <Name
              address={message.owner}
              name={ownerMoniker}
            />
          ),
          <b />,
        ]}
        values={{
          nftId: message.nftId,
        }}
      />
    </Typography>
  );
};

export default OpenAuction;
