import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgUpdateContractAdmin } from '@models';
import { useChainContext } from '@contexts';

const UpdateContractAdmin = (props: {
  message: MsgUpdateContractAdmin;
}) => {
  const { findAddress } = useChainContext();
  const { message } = props;

  const admin = findAddress(message.admin);
  const adminMoniker = admin ? admin?.moniker : message
    .admin;

  const newAdmin = findAddress(message.newAdmin);
  const newAdminMoniker = newAdmin ? newAdmin?.moniker : message
    .newAdmin;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txUpdateContractAdmin"
        components={[
          (
            <Name
              address={message.admin}
              name={adminMoniker}
            />
          ),
          <b />,
          (
            <Name
              address={message.newAdmin}
              name={newAdminMoniker}
            />
          ),
        ]}
        values={{
          contract: message.contract,
        }}
      />
    </Typography>
  );
};

export default UpdateContractAdmin;
