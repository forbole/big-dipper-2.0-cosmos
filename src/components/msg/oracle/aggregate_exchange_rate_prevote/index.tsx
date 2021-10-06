import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgAggregateExchangeRatePrevote } from '@models';
import { useChainContext } from '@contexts';

const AggregateExchangeRatePrevote = (props: {
  message: MsgAggregateExchangeRatePrevote;
}) => {
  const { findAddress } = useChainContext();
  const { message } = props;

  const validator = findAddress(message.validator);
  const validatorMoniker = validator ? validator?.moniker : message
    .validator;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txAggregateExchangeRatePrevote"
        components={[
          (
            <Name
              address={message.validator}
              name={validatorMoniker}
            />
          ),
          <b />,
        ]}
        values={{
          hash: message.hash,
        }}
      />
    </Typography>
  );
};

export default AggregateExchangeRatePrevote;
