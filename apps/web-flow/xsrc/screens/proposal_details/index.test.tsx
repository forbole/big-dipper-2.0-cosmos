import React from 'react';
import renderer from 'react-test-renderer';
import {
  createMockClient,
} from 'mock-apollo-client';
import { ApolloProvider } from '@apollo/client';
import {
  MockTheme, wait,
} from '@tests/utils';
import {
  ProposalDetailsDocument,
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

const mockProposalDetailsDocument = jest.fn().mockResolvedValue({
  data: {
    proposal: [
      {
        title: 'Desmos v1.0.4 upgrade',
        description: 'This proposal aims at upgrading the chain software to version v1.0.4, alligning _Morpheus Apollo_ to the same Desmos version of our mainnet. This will allow us to test future mainnet on-chain upgrades here before they go live on our official chain. By voting YES to this proposal you will signal that you are ready for the upgrade. If this proposal passes, the upgrade will be scheduled to happen at height 2.121.236 which will be around Friday September 24th 2021 07:00 UTC.',
        status: 'PROPOSAL_STATUS_PASSED',
        content: {
          plan: {
            info: 'https://raw.githubusercontent.com/desmos-labs/morpheus/master/morpheus-apollo-2/upgrades/v1.0.4.json?checksum=sha256:fbfb8eda3337b392cb9b2d712a7b575d6f6d19a3a7aa6f2c84bac4307ecdd880',
            name: 'v1.0.4',
            time: '0001-01-01T00:00:00Z',
            height: '2121236',
            upgraded_client_state: null,
          },
          '@type': '/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal',
          title: 'Desmos v1.0.4 upgrade',
          description: 'This proposal aims at upgrading the chain software to version v1.0.4, alligning _Morpheus Apollo_ to the same Desmos version of our mainnet. This will allow us to test future mainnet on-chain upgrades here before they go live on our official chain. By voting YES to this proposal you will signal that you are ready for the upgrade. If this proposal passes, the upgrade will be scheduled to happen at height 2.121.236 which will be around Friday September 24th 2021 07:00 UTC.',
        },
        proposalId: 22,
        submitTime: '2021-09-21T10:00:30.107709',
        depositEndTime: '2021-09-23T10:00:30.107709',
        votingStartTime: '2021-09-21T10:01:10.657743',
        votingEndTime: '2021-09-23T10:01:10.657743',
        proposalDeposits: [
          {
            amount: [
              {
                denom: 'udaric',
                amount: '100000000',
              },
            ],
            depositorAddress: 'desmos1kmw9et4e99ascgdw0mmkt63mggjuu0xuqjx30w',
          },
        ],
      },
    ],
    proposalVote: [
      {
        option: 'VOTE_OPTION_YES',
        voterAddress: 'desmos1kmw9et4e99ascgdw0mmkt63mggjuu0xuqjx30w',
      },
    ],
    proposalTallyResult: [
      {
        yes: 18099851525752,
        no: 0,
        noWithVeto: 0,
        abstain: 0,
      },
    ],
    govParams: [
      {
        tallyParams: {
          quorum: '0.334000000000000000',
          threshold: '0.500000000000000000',
          veto_threshold: '0.334000000000000000',
        },
      },
    ],
    stakingParams: [
      {
        params: {
          bond_denom: 'udaric',
          max_entries: 7,
          max_validators: 200,
          unbonding_time: 259200000000000,
          historical_entries: 10000,
        },
      },
    ],
    stakingPool: [
      {
        bondedTokens: 30959846018678,
      },
    ],
    validatorStatuses: [
      {
        validatorAddress: 'desmosvalcons1c29eyczh5lw4npe0a9n40nm5g299fq8nt5lerw',
        status: 3,
        votingPower: 598178,
        validator: {
          validatorInfo: {
            selfDelegateAddress: 'desmos1txdthvutrrfzzf9htelcnfz655afu4yh30lhfc',
          },
        },
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

    mockClient.setRequestHandler(
      ProposalDetailsDocument,
      mockProposalDetailsDocument,
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

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
