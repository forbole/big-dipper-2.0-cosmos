import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgMigrateContract } from '@models';
import { useChainContext } from '@contexts';

const MigrateContract = (props: {
  message: MsgMigrateContract;
}) => {
  const { findAddress } = useChainContext();
  const { message } = props;

  const admin = findAddress(message.admin);
  const adminMoniker = admin ? admin?.moniker : message
    .admin;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txMigrateContract"
        components={[
          (
            <Name
              address={message.admin}
              name={adminMoniker}
            />
          ),
          <b />,
        ]}
        values={{
          contract: message.contract,
        }}
      />
    </Typography>
  );
};

export default MigrateContract;
