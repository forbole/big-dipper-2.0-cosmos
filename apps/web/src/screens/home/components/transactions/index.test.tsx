import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme, wait } from 'ui/tests/utils';
import { createMockClient, createMockSubscription } from 'mock-apollo-client';
import { ApolloProvider } from '@apollo/client';
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
jest.mock('@components/box', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Box" {...props} />
));
jest.mock('@components/no_data', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="NoData" {...props} />
));

jest.mock('./components', () => ({
  Mobile: (props: JSX.IntrinsicElements['div']) => <div id="Mobile" {...props} />,
  Desktop: (props: JSX.IntrinsicElements['div']) => <div id="Desktop" {...props} />,
  Box: (props: JSX.IntrinsicElements['div']) => <div id="Box" {...props} />,
}));

const mockTxsListenerDocument = {
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
};

// ==================================
// unit tests
// ==================================
describe('screen: Home/Blocks/Mobile', () => {
  it('matches snapshot', async () => {
    const mockClient = createMockClient();
    const mockSubscription = createMockSubscription();

    mockClient.setRequestHandler(TransactionsListenerDocument, () => mockSubscription);

    let component;

    renderer.act(() => {
      component = renderer.create(
        <ApolloProvider client={mockClient}>
          <MockTheme>
            <Transactions />
          </MockTheme>
        </ApolloProvider>
      );
    });

    await wait(renderer.act);

    renderer.act(() => {
      mockSubscription.next(mockTxsListenerDocument);
    });

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
