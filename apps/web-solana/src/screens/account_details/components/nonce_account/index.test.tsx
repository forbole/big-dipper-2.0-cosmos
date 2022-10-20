/* eslint-disable */
import React from 'react';
import { createMockClient } from 'mock-apollo-client';
import { ApolloProvider } from '@apollo/client';
import renderer from 'react-test-renderer';
import {
  MockTheme, wait,
} from '@tests/utils';
import { NonceAccountDetailsDocument } from '@graphql/types';
import NonceAccount from '.';

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
    "nonceAccount": [
      {
        "address": "BcxTbVYxaZ9Uw92mDvQwWo8f8Kt4fnUGjaEvnyKvZFh",
        "authority": "38QU8LKVK1Ew5uzsqttamNTTFxvnfzgi2ACQvj3ekuom",
        "lamportsPerSignature": 5000,
        "blockhash": "CJm1NSWAm3NDDNtXZyCfK4oRukkS1kXKaWBn3CGQErHi",
        "nativeBalance": {
          "balance": 2500000
        }
      }
    ]
  }
});

// ==================================
// unit tests
// ==================================
describe('screen: NonceAccount', () => {
  it('matches snapshot', async () => {
    const mockClient = createMockClient();
    mockClient.setRequestHandler(
      NonceAccountDetailsDocument,
      mockData,
    );

    let component;
    renderer.act(() => {
      component = renderer.create(
        <ApolloProvider client={mockClient}>
          <MockTheme>
            <NonceAccount />
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
