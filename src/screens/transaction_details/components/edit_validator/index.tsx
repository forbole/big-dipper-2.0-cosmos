import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgEditValidator } from '@models';
import { VALIDATOR_DETAILS } from '@utils/go_to_page';
import { useChainContext } from '@contexts';

const EditValidator = (props: {
  message: MsgEditValidator;
}) => {
  const { findAddress } = useChainContext();
  const { message } = props;

  const validator = findAddress(message.validatorAddress);
  const validatorMoniker = validator ? validator?.moniker : message
    .validatorAddress;

  return (
    <Typography>
      <Trans
        i18nKey="transactions:txEditValidatorContent"
        components={[
          (
            <Name
              address={message.validatorAddress}
              name={validatorMoniker}
              href={VALIDATOR_DETAILS}
            />
          ),
        ]}
      />
    </Typography>
  );
};

export default EditValidator;
