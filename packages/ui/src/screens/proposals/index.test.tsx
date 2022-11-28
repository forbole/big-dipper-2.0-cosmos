import { ProposalsDocument } from '@/graphql/types/general_types';
import Proposals from '@/screens/proposals';
import { MockTheme, wait } from '@/tests/utils';
import { ApolloClient, ApolloProvider, from, InMemoryCache } from '@apollo/client';
import { MockedProvider } from '@apollo/client/testing';
import renderer from 'react-test-renderer';

// ==================================
// mocks
// ==================================
jest.mock('@/components/layout', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Layout" {...props} />
));

jest.mock('@/screens/proposals/components/list', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="List" {...props} />
));

const mockProposals = jest.fn().mockReturnValue({
  data: {
    proposals: [
      {
        title: 'Staking Param Change Part Two',
        proposalId: 7,
        status: 'PROPOSAL_STATUS_REJECTED',
        description: 'Update max validators',
      },
      {
        title: 'upgrading the software',
        proposalId: 6,
        status: 'PROPOSAL_STATUS_INVALID',
        description: 'software upgrade description',
      },
      {
        title: 'Staking Param Change',
        proposalId: 5,
        status: 'PROPOSAL_STATUS_INVALID',
        description: 'Update max validators',
      },
      {
        title: 'BD Proposal',
        proposalId: 4,
        status: 'PROPOSAL_STATUS_REJECTED',
        description: 'My not so awesome proposal',
      },
    ],
    total: {
      aggregate: {
        count: 4,
      },
    },
  },
});

// ==================================
// unit tests
// ==================================
describe('screen: Proposals', () => {
  it('matches snapshot', async () => {
    const mockClient = new ApolloClient({ link: from([]), cache: new InMemoryCache() });
    let component: renderer.ReactTestRenderer | undefined;

    renderer.act(() => {
      component = renderer.create(
        <ApolloProvider client={mockClient}>
          <MockedProvider
            mocks={[{ request: { query: ProposalsDocument }, result: mockProposals }]}
          >
            <MockTheme>
              <Proposals />
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
