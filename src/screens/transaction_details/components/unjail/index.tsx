import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgUnjail } from '@models';
import { useChainContext } from '@contexts';

const Unjail = (props: {
  message: MsgUnjail;
}) => {
  const { findAddress } = useChainContext();
  const { message } = props;
  const validator = findAddress(message.validatorAddress);
  const validatorMoniker = validator ? validator?.moniker : message.validatorAddress;

  return (
    <Typography>
      <Trans
        i18nKey="transactions:txUnjailContent"
        components={[
          (
            <Name
              address={message.validatorAddress}
              name={validatorMoniker}
            />
          ),
        ]}
      />
    </Typography>
  );
};

export default Unjail;
