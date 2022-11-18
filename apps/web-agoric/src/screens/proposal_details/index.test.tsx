import React from 'react';
import renderer from 'react-test-renderer';
import { ApolloClient, ApolloProvider, from, InMemoryCache } from '@apollo/client';
import { MockTheme, wait } from 'ui/tests/utils';
import { ProposalDetailsDocument } from '@graphql/types/general_types';
import { MockedProvider } from '@apollo/client/testing';
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
jest.mock('ui/components/layout', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Layout" {...props} />
));
jest.mock('ui/components/load_and_exist', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="LoadAndExist" {...props} />
));

jest.mock('./components/overview', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Overview" {...props} />
));
jest.mock('./components/votes', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Votes" {...props} />
));
jest.mock('./components/deposits', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Deposits" {...props} />
));
jest.mock('./components/votes_graph', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="VotesGraph" {...props} />
));

const mockProposalDetailsDocument = jest.fn().mockReturnValue({
  data: {
    proposal: [
      {
        proposer: 'desmos1e4g9807ephy5t7zzt6vu0kw7tryqh9k39w3gc2',
        title: 'Increase minimum commission rate to 5%',
        description:
          'Set the minimum commission to 5%. This will help ensure network stability. It also ensures that validators earn enough to support secure and stable validation. We must create a healthier network. If this proposal is accepted, it will mean that the blockchain needs to be updated so that the fee of all validators can be changed automatically.',
        status: 'PROPOSAL_STATUS_PASSED',
        content: {
          '@type': '/cosmos.gov.v1beta1.TextProposal',
          title: 'Increase minimum commission rate to 5%',
          description:
            'Set the minimum commission to 5%. This will help ensure network stability. It also ensures that validators earn enough to support secure and stable validation. We must create a healthier network. If this proposal is accepted, it will mean that the blockchain needs to be updated so that the fee of all validators can be changed automatically.',
        },
        proposalId: 14,
        submitTime: '2022-02-19T19:03:14.969688',
        depositEndTime: '2022-02-22T19:03:14.969688',
        votingStartTime: '2022-02-19T19:03:14.969688',
        votingEndTime: '2022-02-26T19:03:14.969688',
      },
    ],
  },
});

// ==================================
// unit tests
// ==================================
describe('screen: ProposalDetails', () => {
  it('matches snapshot', async () => {
    const mockClient = new ApolloClient({ link: from([]), cache: new InMemoryCache() });
    let component: renderer.ReactTestRenderer | undefined;

    renderer.act(() => {
      component = renderer.create(
        <ApolloProvider client={mockClient}>
          <MockedProvider
            mocks={[
              { request: { query: ProposalDetailsDocument }, result: mockProposalDetailsDocument },
            ]}
          >
            <MockTheme>
              <ProposalDetails />
            </MockTheme>
          </MockedProvider>
        </ApolloProvider>
      );
    });
    await wait(renderer.act);

    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
