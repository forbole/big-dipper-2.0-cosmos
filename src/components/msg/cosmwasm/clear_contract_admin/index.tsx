import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgClearContractAdmin } from '@models';
import { useProfileRecoil } from '@recoil/profiles';

const ClearContractAdmin = (props: {
  message: MsgClearContractAdmin;
}) => {
  const { message } = props;

  const sender = useProfileRecoil(message.sender);
  const senderMoniker = sender ? sender?.name : message.sender;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txClearContractAdmin"
        components={[
          (
            <Name
              address={message.sender}
              name={senderMoniker}
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

export default ClearContractAdmin;