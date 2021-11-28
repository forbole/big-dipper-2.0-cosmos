import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgUnlinkChainAccount } from '@models';
import { useProfileRecoil } from '@recoil/profiles';

const UnlinkChainAccount = (props: {
  message: MsgUnlinkChainAccount;
}) => {
  const { message } = props;
  const owner = useProfileRecoil(message.owner);
  const ownerMoniker = owner ? owner?.name : message
    .owner;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txMsgUnlinkChainAccount"
        components={[
          (
            <Name
              address={message.owner}
              name={ownerMoniker}
            />
          ),
          (
            <b />
          ),
        ]}
        values={{
          chainName: message.chainName,
        }}
      />
    </Typography>
  );
};

export default UnlinkChainAccount;
