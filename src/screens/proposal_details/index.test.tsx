import React from 'react';
import renderer from 'react-test-renderer';
import {
  createMockClient, createMockSubscription,
} from 'mock-apollo-client';
import { ApolloProvider } from '@apollo/client';
import {
  MockTheme, wait,
} from '@tests/utils';
import {
  ProposalDetailsDocument,
  ProposalVotesListenerDocument,
  ProposalTallyListenerDocument,
  TallyParamsDocument,
} from '@graphql/types';
import ProposalDetails from '.';

// ==================================
// mocks
// ==================================
jest.mock('next/router', () => ({
  useRouter: () => ({
    query: {
      id: 4,
    },
  }),
}));

jest.mock('@contexts', () => ({
  useChainContext: () => ({
    findAddress: jest.fn(() => ({
      moniker: 'moniker',
      imageUrl: null,
    })),
  }),
}));

jest.mock('@components', () => ({
  Layout: (props) => <div id="Layout" {...props} />,
  LoadAndExist: (props) => <div id="LoadAndExist" {...props} />,
}));

jest.mock('./components', () => ({
  Overview: (props) => <div id="Overview" {...props} />,
  Votes: (props) => <div id="Votes" {...props} />,
  Deposits: (props) => <div id="Deposits" {...props} />,
  VotesGraph: (props) => <div id="VotesGraph" {...props} />,
}));

const mockProposalVotesListenerDocument = {
  data: {
    proposalVote: [
      {
        option: 'VOTE_OPTION_YES',
        voterAddress: 'desmos124xa66ghhq5hrgv28slhmszgvcqa0skcfwphh3',
      },
      {
        option: 'VOTE_OPTION_NO',
        voterAddress: 'desmos1c2zkjtg5rhtux0x4gd0nq6q7x79uwnh96r8a4s',
      },
      {
        option: 'VOTE_OPTION_ABSTAIN',
        voterAddress: 'desmos15g8dfvn3m4lg9pdtpwp4gkygvwpfxywf2rzxly',
      },
    ],
  },
};

const mockProposalTallyListenerDocument = {
  data: {
    proposalTallyResult: [
      {
        yes: 170003125372,
        no: 0,
        noWithVeto: 0,
        abstain: 0,
      },
    ],
  },
};

const mockTallyParamsDocument = jest.fn().mockResolvedValue({
  data: {
    govParams: [
      {
        tallyParams: {
          quorum: '0.334000000000000000',
          threshold: '0.500000000000000000',
          veto_threshold: '0.334000000000000000',
        },
      },
    ],
    stakingPool: [
      {
        bondedTokens: 3893835180066,
      },
    ],
  },
});

const mockProposalDetailsDocument = jest.fn().mockResolvedValue({
  data: {
    proposal: [
      {
        title: 'Staking Param Change Part Two',
        description: 'Update max validators',
        status: 'PROPOSAL_STATUS_REJECTED',
        content: {
          '@type': '/cosmos.params.v1beta1.ParameterChangeProposal',
          title: 'Staking Param Change Part Two',
          changes: [
            {
              key: 'MaxValidators',
              value: '105',
              subspace: 'staking',
            },
          ],
          description: 'Update max validators',
        },
        proposalId: 7,
        submitTime: '2021-05-17T05:15:17.990588',
        depositEndTime: '2021-05-19T05:15:17.990588',
        votingStartTime: '2021-05-17T05:15:17.990588',
        votingEndTime: '2021-05-19T05:15:17.990588',
        proposalDeposits: [
          {
            amount: [
              {
                denom: 'udaric',
                amount: '10000000',
              },
            ],
            depositorAddress: 'desmos124xa66ghhq5hrgv28slhmszgvcqa0skcfwphh3',
          },
        ],
      },
    ],
  },
});

// ==================================
// unit tests
// ==================================
describe('screen: ProposalDetails', () => {
  it('matches snapshot', async () => {
    const mockClient = createMockClient();
    const mockSubscription = createMockSubscription();
    const mockSubscriptionTwo = createMockSubscription();

    mockClient.setRequestHandler(
      ProposalVotesListenerDocument,
      () => mockSubscription,
    );

    mockClient.setRequestHandler(
      ProposalTallyListenerDocument,
      () => mockSubscriptionTwo,
    );

    mockClient.setRequestHandler(
      ProposalDetailsDocument,
      mockProposalDetailsDocument,
    );

    mockClient.setRequestHandler(
      TallyParamsDocument,
      mockTallyParamsDocument,
    );

    let component;

    renderer.act(() => {
      component = renderer.create(
        <ApolloProvider client={mockClient}>
          <MockTheme>
            <ProposalDetails />
          </MockTheme>
        </ApolloProvider>,
      );
    });
    await wait();
    renderer.act(() => {
      mockSubscription.next(mockProposalVotesListenerDocument);
      mockSubscriptionTwo.next(mockProposalTallyListenerDocument);
    });

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
