import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme, wait } from 'ui/tests/utils';
import { ApolloClient, ApolloProvider, from, InMemoryCache } from '@apollo/client';
import { MockedProvider } from '@apollo/client/testing';
import { TransactionsListenerDocument } from '@graphql/types/general_types';
import Transactions from '.';

// ==================================
// mocks
// ==================================
const mockI18n = {
  t: (key: string) => key,
  lang: 'en',
};
jest.mock('next-translate/useTranslation', () => () => mockI18n);
jest.mock('ui/components/box', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Box" {...props} />
));
jest.mock('ui/components/no_data', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="NoData" {...props} />
));

jest.mock('./components', () => ({
  Mobile: (props: JSX.IntrinsicElements['div']) => <div id="Mobile" {...props} />,
  Desktop: (props: JSX.IntrinsicElements['div']) => <div id="Desktop" {...props} />,
  Box: (props: JSX.IntrinsicElements['div']) => <div id="Box" {...props} />,
}));

const mockTxsListenerDocument = jest.fn().mockReturnValue({
  data: {
    transactions: [
      {
        height: 2000,
        block: {
          timestamp: '2021-05-28T00:08:33.700487',
        },
        hash: '76nwV8zz8tLz97SBRXH6uwHvgHXtqJDLQfF66jZhQ857',
        messages: 12,
        success: true,
        logs: [],
      },
    ],
  },
});

// ==================================
// unit tests
// ==================================
describe('screen: Home/Blocks/Mobile', () => {
  it('matches snapshot', async () => {
    const mockClient = new ApolloClient({ link: from([]), cache: new InMemoryCache() });
    let component: renderer.ReactTestRenderer | undefined;

    renderer.act(() => {
      component = renderer.create(
        <ApolloProvider client={mockClient}>
          <MockedProvider
            mocks={[
              { request: { query: TransactionsListenerDocument }, result: mockTxsListenerDocument },
            ]}
          >
            <MockTheme>
              <Transactions />
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
