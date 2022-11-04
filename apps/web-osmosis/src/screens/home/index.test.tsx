import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme, wait } from '@tests/utils';
import { createMockClient } from 'mock-apollo-client';
import { ApolloProvider } from '@apollo/client';
import { LatestBlockTimestampDocument } from '@graphql/types/general_types';
import Home from '.';

// ==================================
// mocks
// ==================================
jest.mock('@components/layout', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Layout" {...props} />
));

jest.mock('./components', () => ({
  DataBlocks: (props: JSX.IntrinsicElements['div']) => <div id="DataBlocks" {...props} />,
  Hero: (props: JSX.IntrinsicElements['div']) => <div id="Hero" {...props} />,
  Consensus: (props: JSX.IntrinsicElements['div']) => <div id="Consensus" {...props} />,
  Tokenomics: (props: JSX.IntrinsicElements['div']) => <div id="Tokenomics" {...props} />,
  Blocks: (props: JSX.IntrinsicElements['div']) => <div id="Blocks" {...props} />,
  Transactions: (props: JSX.IntrinsicElements['div']) => <div id="Transactions" {...props} />,
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
    mockClient.setRequestHandler(LatestBlockTimestampDocument, mockBlockTime);
    let tree: ReactTestRendererJSON | ReactTestRendererJSON[] | null = null;

    renderer.act(() => {
      tree = renderer
        .create(
          <ApolloProvider client={mockClient}>
            <MockTheme>
              <Home />
            </MockTheme>
          </ApolloProvider>
        )
        .toJSON();
    });
    await wait();

    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
