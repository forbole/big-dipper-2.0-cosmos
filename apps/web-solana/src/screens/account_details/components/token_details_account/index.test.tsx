/* eslint-disable */
import React from 'react';
import { createMockClient } from 'mock-apollo-client';
import { ApolloProvider } from '@apollo/client';
import renderer from 'react-test-renderer';
import {
  MockTheme, wait,
} from '@tests/utils';
import { TokenDetailsAccountDetailsDocument } from '@graphql/types';
import TokenAccount from '.';

// ==================================
// mocks
// ==================================
jest.mock('next/router', () => ({
  useRouter: () => ({
    query: {
      address: "9XfsbcUJ8qM4esLtMocrMGLqRPkgYNbcmKLebtBzSjjZ",
    },
  }),
}));

jest.mock('./components', () => ({
  Overview: (props) => <div id="Overview" {...props} />,
}));

const mockData = jest.fn().mockResolvedValue({
  "data": {
    "tokenAccount": [
      {
        "address": "V9nuamcxTwr2iVkVQwidTdzJxuRhtVHsbmkvmroHaAf",
        "mint": "EEhosSQvC2yVDRXRGpkonGFF2WNjtUdzb48GV8TSmhfA",
        "owner": "9T2iv4yXzarKyKgVX4ShNx42NjUAUh63xGohR5B5hjsH",
        "tokenInfo": {
          "decimals": 9
        },
        "tokenUnit": {
          "unitName": "Ammo",
          "logoUrl": "https://arweave.net/rjP_BdMqFsXBWoInFYuVNDdqLzW1xo82egb74WRl3Hc"
        }
      }
    ],
    "tokenAccountBalance": []
  }
});

// ==================================
// unit tests
// ==================================
describe('screen: TokenAccount', () => {
  it('matches snapshot', async () => {
    const mockClient = createMockClient();
    mockClient.setRequestHandler(
      TokenDetailsAccountDetailsDocument,
      mockData,
    );

    let component;
    renderer.act(() => {
      component = renderer.create(
        <ApolloProvider client={mockClient}>
          <MockTheme>
            <TokenAccount />
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
