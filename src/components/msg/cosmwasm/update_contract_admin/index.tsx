import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgUpdateContractAdmin } from '@models';
import { useProfileRecoil } from '@recoil/profiles';

const UpdateContractAdmin = (props: {
  message: MsgUpdateContractAdmin;
}) => {
  const { message } = props;

  const sender = useProfileRecoil(message.sender);
  const senderMoniker = sender ? sender?.name : message.sender; 

  const newAdmin = useProfileRecoil(message.newAdmin);
  const newAdminMoniker = newAdmin ? newAdmin?.name : message.newAdmin;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txUpdateContractAdmin"
        components={[
          (
            <Name
              address={message.sender}
              name={senderMoniker}
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