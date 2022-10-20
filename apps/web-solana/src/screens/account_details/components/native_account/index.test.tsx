/* eslint-disable */
import React from 'react';
import { createMockClient } from 'mock-apollo-client';
import { ApolloProvider } from '@apollo/client';
import renderer from 'react-test-renderer';
import {
  MockTheme, wait,
} from '@tests/utils';
import { NativeAccountDetailsDocument } from '@graphql/types';
import NativeAccount from '.';

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

jest.mock('..', () => ({
  Tokens: (props) => <div id="Tokens" {...props} />,
}));

jest.mock('./components', () => ({
  Overview: (props) => <div id="Overview" {...props} />,
  Balance: (props) => <div id="Balance" {...props} />,
  Accounts: (props) => <div id="Accounts" {...props} />,
}));

const mockData = jest.fn().mockResolvedValue({
  "data": {
    "accountBalance": [
      {
        "balance": 1997950720
      }
    ],
    "stake": {
      "nodes": []
    },
    "nonce": {
      "nodes": []
    },
    "validator": {
      "nodes": []
    }
  }
});

// ==================================
// unit tests
// ==================================
describe('screen: NativeAccount', () => {
  it('matches snapshot', async () => {
    const mockClient = createMockClient();
    mockClient.setRequestHandler(
      NativeAccountDetailsDocument,
      mockData,
    );

    let component;
    renderer.act(() => {
      component = renderer.create(
        <ApolloProvider client={mockClient}>
          <MockTheme>
            <NativeAccount />
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
