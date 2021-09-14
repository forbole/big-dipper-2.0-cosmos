import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgCreateIssuer } from '@models';
import { useChainContext } from '@contexts';

const CreateIssuer = (props: {
  message: MsgCreateIssuer;
}) => {
  const { findAddress } = useChainContext();
  const { message } = props;

  const issuer = findAddress(message.issuer);
  const issuerMoniker = issuer ? issuer?.moniker : message.issuer;

  const denom = message.denominations.join(',');

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txCreateIssuerContent"
        components={[
          (
            <Name
              address={message.issuer}
              name={issuerMoniker}
            />
          ),
          <b />,
        ]}
        values={{
          denom,
        }}
      />
    </Typography>
  );
};

export default CreateIssuer;
