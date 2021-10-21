import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgMintNFT } from '@models';
import { useChainContext } from '@contexts';

const MintNFT = (props: {
  message: MsgMintNFT;
}) => {
  const { findAddress } = useChainContext();
  const { message } = props;

  const sender = findAddress(message.sender);
  const senderMoniker = sender ? sender?.moniker : message.sender;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txMintNFTContent"
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
          id: message.id,
        }}
      />
    </Typography>
  );
};

export default MintNFT;
