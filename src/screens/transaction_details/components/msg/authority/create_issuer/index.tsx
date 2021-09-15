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

  const authority = findAddress(message.authority);
  const authorityMoniker = authority ? authority?.moniker : message
    .authority;

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
              address={message.authority}
              name={authorityMoniker}
            />
          ),
          (
            <Name
              address={message.issuer}
              name={issuerMoniker}
            />
          ),
        ]}
        values={{
          denom,
        }}
      />
    </Typography>
  );
};

export default CreateIssuer;
