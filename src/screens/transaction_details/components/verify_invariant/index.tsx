import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgVerifyInvariant } from '@models';
import { useChainContext } from '@contexts';

const VerifyInvariant = (props: {
  message: MsgVerifyInvariant;
}) => {
  const { findAddress } = useChainContext();
  const { message } = props;

  const user = findAddress(message.sender);
  const userMoniker = user ? user?.moniker : message.sender;

  return (
    <Typography>
      <Trans
        i18nKey="transactions:txVerifyInvariantContent"
        components={[
          (
            <Name
              address={message.sender}
              name={userMoniker}
            />
          ),
        ]}
      />
    </Typography>
  );
};

export default VerifyInvariant;
