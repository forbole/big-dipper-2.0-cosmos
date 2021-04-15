import React from 'react';
import Link from 'next/link';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgSubmitProposal } from '@models';
import { useChainContext } from '@contexts';
import { PROPOSAL_DETAILS } from '@utils/go_to_page';

const SubmitProposal = (props: {
  message: MsgSubmitProposal;
}) => {
  const { findAddress } = useChainContext();
  const { message } = props;

  const proposer = findAddress(message.proposer);
  const proposerMoniker = proposer ? proposer?.moniker : message.proposer;
  console.log('im in here');
  return (
    <Typography>
      <Trans
        i18nKey="transactions:txSubmitProposalContent"
        components={[
          (
            <Name
              address={message.proposer}
              name={proposerMoniker}
            />
          ),
          (
            <Link href={PROPOSAL_DETAILS(1)}>
              <a>
                <p>
                  #1
                </p>
              </a>
            </Link>
          ),
        ]}
      />
    </Typography>
  );
};

export default SubmitProposal;
