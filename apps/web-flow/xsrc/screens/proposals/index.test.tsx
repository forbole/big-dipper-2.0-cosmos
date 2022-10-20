import React from 'react';
import renderer from 'react-test-renderer';
import {
  MockTheme, wait,
} from '@tests/utils';

import { ApolloProvider } from '@apollo/client';
import { createMockClient } from 'mock-apollo-client';
import {
  ProposalsDocument,
} from '@graphql/types';
import Proposals from '.';

// ==================================
// mocks
// ==================================
jest.mock('@components', () => ({
  Layout: (props) => <div id="Layout" {...props} />,
}));

jest.mock('./components', () => ({
  List: (props) => <div id="List" {...props} />,
}));

const mockProposals = jest.fn().mockResolvedValue({
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
    const mockClient = createMockClient();

    mockClient.setRequestHandler(
      ProposalsDocument,
      mockProposals,
    );
    let component;
    renderer.act(() => {
      component = renderer.create(
        <ApolloProvider client={mockClient}>
          <MockTheme>
            <Proposals />
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
