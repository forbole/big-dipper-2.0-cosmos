import React from 'react';
import renderer from 'react-test-renderer';
import {
  MockTheme, wait,
} from '@tests/utils';
import { createMockClient } from 'mock-apollo-client';
import { ApolloProvider } from '@apollo/client';
import {
  LatestBlockTimestampDocument,
} from '@graphql/types';
import Home from '.';

// ==================================
// mocks
// ==================================
jest.mock('@components', () => ({
  Layout: (props) => <div id="Layout" {...props} />,
}));

jest.mock('./components', () => ({
  DataBlocks: (props) => <div id="DataBlocks" {...props} />,
  OnlineVotingPower: (props) => <div id="OnlineVotingPower" {...props} />,
  Consensus: (props) => <div id="Consensus" {...props} />,
  Tokenomics: (props) => <div id="Tokenomics" {...props} />,
  Blocks: (props) => <div id="Blocks" {...props} />,
  Transactions: (props) => <div id="Transactions" {...props} />,
}));

const mockBlockTime = jest.fn().mockResolvedValue({
  data: {
    block: [
      {
        timestamp: '2021-06-25T03:23:27.762512',
      },
    ],
  },
});

// ==================================
// unit tests
// ==================================
describe('screen: Home', () => {
  it('matches snapshot', async () => {
    const mockClient = createMockClient();
    mockClient.setRequestHandler(
      LatestBlockTimestampDocument,
      mockBlockTime,
    );
    let component;
    renderer.act(() => {
      component = renderer.create(
        <ApolloProvider client={mockClient}>
          <MockTheme>
            <Home />
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
