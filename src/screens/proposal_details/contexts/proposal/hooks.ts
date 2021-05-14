import { useState } from 'react';
import { useRouter } from 'next/router';
import {
  useProposalDetailsQuery,
  ProposalDetailsQuery,
} from '@graphql/types';
import { ProposalState } from './types';

export const useProposal = (initialState: ProposalState) => {
  const router = useRouter();
  // const fakeVote = {
  //   voter: {
  //     image: 'https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg',
  //     moniker: 'Forbole',
  //     identity: 'FKsC411dik9ktS6xPADxs4Fk2SCENvAiuccQHLAPndvk',
  //   },
  //   votingPower: '34,000,300',
  //   vote: 1,
  // };

  // const fakeVoteTwo = {
  //   voter: {
  //     image: 'https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg',
  //     moniker: 'Forbole',
  //     identity: 'FKsC411dik9ktS6xPADxs4Fk2SCENvAiuccQHLAPndvk',
  //   },
  //   votingPower: '34,000,300',
  //   vote: 2,
  // };

  // const fakeDeposit = {
  //   depositor: {
  //     image: 'https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg',
  //     moniker: 'Forbole',
  //     identity: 'FKsC411dik9ktS6xPADxs4Fk2SCENvAiuccQHLAPndvk',
  //   },
  //   amount: '12',
  //   time: 1615187146246,
  // };

  // const fakeData = {
  //   id: 3,
  //   proposer: {
  //     image: 'https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg',
  //     moniker: 'Forbole',
  //     identity: 'FKsC411dik9ktS6xPADxs4Fk2SCENvAiuccQHLAPndvk',
  //   },
  //   type: 'text proposal',
  //   title: 'Enable IBC transfers',
  //   content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse placerat velit ipsum, tempus tristique tellus rhoncus tempus. Duis elementum varius neque, eu pharetra eros porttitor in.',
  //   submissionTime: 1615187146246,
  //   votingTimeStart: 1615187146246,
  //   status: 1,
  //   votes: [...Array(2).fill(fakeVote), ...Array(15).fill(fakeVoteTwo)],
  //   deposits: Array(10).fill(fakeDeposit),
  // };

  const [state, setState] = useState(initialState);

  return {

  };
};
