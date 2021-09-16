import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgCreateIssuer } from '@models';
import { useChainContext } from '@contexts';
import useTranslation from 'next-translate/useTranslation';

const CreateIssuer = (props: {
  message: MsgCreateIssuer;
}) => {
  const { findAddress } = useChainContext();
  const { message } = props;
  const { t } = useTranslation('transactions');

  const authority = findAddress(message.authority);
  const authorityMoniker = authority ? authority?.moniker : message
    .authority;

  const issuer = findAddress(message.issuer);
  const issuerMoniker = issuer ? issuer?.moniker : message.issuer;

  const denom = message.denominations;
  const parsedDenom = denom.reduce((text, value, i, array) => text + (i < array.length - 1 ? ', ' : ` ${t(' and ')} `) + value);

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
          denominations: parsedDenom,
        }}
      />
    </Typography>
  );
};

export default CreateIssuer;
