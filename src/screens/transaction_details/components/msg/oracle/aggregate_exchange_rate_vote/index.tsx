import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgAggregateExchangeRateVote } from '@models';
import { useChainContext } from '@contexts';

const AggregateExchangeRateVote = (props: {
  message: MsgAggregateExchangeRateVote;
}) => {
  const { findAddress } = useChainContext();
  const { message } = props;

  const validator = findAddress(message.validator);
  const validatorMoniker = validator ? validator?.moniker : message
    .validator;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txAggregateExchangeRateVote"
        components={[
          (
            <Name
              address={message.validator}
              name={validatorMoniker}
            />
          ),
        ]}
      />
    </Typography>
  );
};

export default AggregateExchangeRateVote;
