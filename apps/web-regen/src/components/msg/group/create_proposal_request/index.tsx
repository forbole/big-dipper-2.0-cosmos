import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgCreateProposalRequest } from '@models';
import {
  useProfileRecoil,
} from '@recoil/profiles';

const CreateProposalRequest = (props: {
  message: MsgCreateProposalRequest;
}) => {
  const { message } = props;

  const address = useProfileRecoil(message.address);
  const addressMoniker = address ? address?.name : message.address;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:MsgCreateProposalRequest"
        components={[
          (
            <Name
              address={message.address}
              name={addressMoniker}
            />
          ),
        ]}
      />
    </Typography>
  );
};

export default CreateProposalRequest;
