import React from 'react';
import renderer from 'react-test-renderer';
import {
  MockTheme, wait,
} from '@tests/utils';
import {
  createMockClient, createMockSubscription,
} from 'mock-apollo-client';
import { ApolloProvider } from '@apollo/client';
import {
  TransactionsListenerDocument,
} from '@graphql/types';
import Transactions from '.';

// ==================================
// mocks
// ==================================
const mockI18n = {
  t: (key: string) => key,
  lang: 'en',
};
jest.mock('next-translate/useTranslation', () => () => mockI18n);
jest.mock('@components', () => ({
  Box: (props) => <div id="Box" {...props} />,
  NoData: (props) => <div id="NoData" {...props} />,
}));

jest.mock('./components', () => ({
  Mobile: (props) => <div id="Mobile" {...props} />,
  Desktop: (props) => <div id="Desktop" {...props} />,
  Box: (props) => <div id="Box" {...props} />,
}));

const mockTxsListenerDocument = {
  data: {
    transactions: [
      {
        slot: 812768640,
        success: true,
        hash: '76nwV8zz8tLz97SBRXH6uwHvgHXtqJDLQfF66jZhQ857',
        timestamp: '2021-09-13T20:06:17.363145',
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

    mockClient.setRequestHandler(
      TransactionsListenerDocument,
      () => mockSubscription,
    );

    let component;

    renderer.act(() => {
      component = renderer.create(
        <ApolloProvider client={mockClient}>
          <MockTheme>
            <Transactions />
          </MockTheme>
        </ApolloProvider>,
      );
    });

    await wait();

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
