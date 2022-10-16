import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgSubmitProposal } from '@models';
import { useProfileRecoil } from '@recoil/profiles';

const SubmitProposal = (props: {
  message: MsgSubmitProposal;
}) => {
  const { message } = props;

  const proposer = useProfileRecoil(message.proposer);
  const proposerMoniker = proposer ? proposer?.name : message.proposer;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txSubmitProposalContent"
        components={[
          (
            <Name
              address={message.proposer}
              name={proposerMoniker}
            />
          ),
        ]}
      />
    </Typography>
  );
};

export default SubmitProposal;
