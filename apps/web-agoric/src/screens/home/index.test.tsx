import React from 'react';
import renderer, { ReactTestRendererJSON } from 'react-test-renderer';
import { MockTheme, wait } from 'ui/tests/utils';
import { ApolloClient, ApolloProvider, from, InMemoryCache } from '@apollo/client';
import { MockedProvider } from '@apollo/client/testing';
import { LatestBlockTimestampDocument } from '@graphql/types/general_types';
import Home from '.';

// ==================================
// mocks
// ==================================
jest.mock('ui/components/layout', () => (props: JSX.IntrinsicElements['div']) => (
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

const mockBlockTime = jest.fn().mockReturnValue({
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
    let component: renderer.ReactTestRenderer | undefined;

    renderer.act(() => {
      component = renderer.create(
        <ApolloProvider client={new ApolloClient({ link: from([]), cache: new InMemoryCache() })}>
          <MockedProvider
            mocks={[{ request: { query: LatestBlockTimestampDocument }, result: mockBlockTime }]}
          >
            <MockTheme>
              <Home />
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
