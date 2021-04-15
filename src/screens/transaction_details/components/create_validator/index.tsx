import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgCreateValidator } from '@models';
import { useChainContext } from '@contexts';
import {
  VALIDATOR_DETAILS, ACCOUNT_DETAILS,
} from '@utils/go_to_page';

const CreateValidator = (props: {
  message: MsgCreateValidator;
}) => {
  const { findAddress } = useChainContext();
  const { message } = props;

  const delegator = findAddress(message.delegatorAddress);
  const delegatorMoniker = delegator ? delegator?.moniker : message
    .delegatorAddress;
  const delegatorHref = delegator ? VALIDATOR_DETAILS : ACCOUNT_DETAILS;

  return (
    <Typography>
      <Trans
        i18nKey="transactions:txCreateValidatorContent"
        components={[
          (
            <Name
              address={message.delegatorAddress}
              name={delegatorMoniker}
              href={delegatorHref}
            />
          ),
          (
            <Name
              address={message.validatorAddress}
              name={message?.description?.moniker || message.validatorAddress}
              href={VALIDATOR_DETAILS}
            />
          ),
        ]}
      />
    </Typography>
  );
};

export default CreateValidator;
