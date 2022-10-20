/* eslint-disable */
import React from 'react';
import renderer from 'react-test-renderer';
import {
  MockTheme, wait,
} from '@tests/utils';

import { ApolloProvider } from '@apollo/client';
import { createMockClient } from 'mock-apollo-client';
import {
  TokensDocument
} from '@graphql/types';
import Proposals from '.';

// ==================================
// mocks
// ==================================
jest.mock('@components', () => ({
  Layout: (props) => <div id="Layout" {...props} />,
  LoadAndExist: (props) => <div id="LoadAndExist" {...props} />,
}));

jest.mock('./components', () => ({
  List: (props) => <div id="List" {...props} />,
}));

const mockTokens = jest.fn().mockResolvedValue({
  "data": {
    "tokenUnit": [
      {
        "address": "EAniGDVY2VKUtZxvpHnbazHfZgfo3bp61TxUGHzw3Cn7",
        "unitName": "007 Exchange",
        "logo": "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EAniGDVY2VKUtZxvpHnbazHfZgfo3bp61TxUGHzw3Cn7/logo.png",
        "tokenPrice": null
      },
      {
        "address": "G2jrxYSoCSzmohxERa2JzSJMuRM4kiNvRA3DnCv7Lzcz",
        "unitName": "0x Protocol Token (Wormhole v1)",
        "logo": "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/G2jrxYSoCSzmohxERa2JzSJMuRM4kiNvRA3DnCv7Lzcz/logo.png",
        "tokenPrice": {
          "marketCap": 783277125,
          "price": 0.913409,
          "volume": 18333060,
        }
      }
    ]
  }
});

// ==================================
// unit tests
// ==================================
describe('screen: Proposals', () => {
  it('matches snapshot', async () => {
    const mockClient = createMockClient();

    mockClient.setRequestHandler(
      TokensDocument,
      mockTokens,
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
