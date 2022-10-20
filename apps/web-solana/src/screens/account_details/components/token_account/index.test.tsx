/* eslint-disable */
import React from 'react';
import { createMockClient } from 'mock-apollo-client';
import { ApolloProvider } from '@apollo/client';
import renderer from 'react-test-renderer';
import {
  MockTheme, wait,
} from '@tests/utils';
import { TokenDetailsDocument } from '@graphql/types';
import BlockDetails from '.';

// ==================================
// mocks
// ==================================
jest.mock('next/router', () => ({
  useRouter: () => ({
    query: {
      height: 300,
    },
  }),
}));

jest.mock('@components', () => ({
  Layout: (props) => <div id="Layout" {...props} />,
  LoadAndExist: (props) => <div id="LoadAndExist" {...props} />,
}));

jest.mock('./components', () => ({
  Header: (props) => <div id="Header" {...props} />,
  Overview: (props) => <div id="Overview" {...props} />,
  // Transactions: (props) => <div id="Transactions" {...props} />,
  TopHolders: (props) => <div id="TopHolders" {...props} />,
  Market: (props) => <div id="Market" {...props} />,
}));

jest.mock('..', () => ({
  Transactions: (props) => <div id="Transactions" {...props} />,
}));

const mockData = jest.fn().mockResolvedValue({
  "data": {
    "tokenUnit": [
      {
        "mint": "SBTCB6pWqeDo6zGi9WVRMLCsKsN6JiR1RMUqvLtgSRv",
        "unitName": "Saber Wrapped Bitcoin (Sollet) (8 decimals)",
        "logo": "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/SBTCB6pWqeDo6zGi9WVRMLCsKsN6JiR1RMUqvLtgSRv/icon.png",
        "tokenPrice": {
          "marketCap": 807393897904,
          "price": 42485
        }
      }
    ],
    "token": [
      {
        "mint": "SBTCB6pWqeDo6zGi9WVRMLCsKsN6JiR1RMUqvLtgSRv",
        "freezeAuthority": "",
        "decimals": 8,
        "mintAuthority": "GpkFF2nPfjUcsavgDGscxaUEQ2hYJ563AXXtU8ohiZ7c"
      }
    ],
    "tokenSupply": [
      {
        "supply": 28421156478
      }
    ],
    "tokenAccountAggregate": {
      "aggregate": {
        "count": 3355
      }
    }
  }
});

// ==================================
// unit tests
// ==================================
describe('screen: BlockDetails', () => {
  it('matches snapshot', async () => {
    const mockClient = createMockClient();
    mockClient.setRequestHandler(
      TokenDetailsDocument,
      mockData,
    );

    let component;
    renderer.act(() => {
      component = renderer.create(
        <ApolloProvider client={mockClient}>
          <MockTheme>
            <BlockDetails />
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
