/* eslint-disable */
import React from 'react';
import { createMockClient } from 'mock-apollo-client';
import { ApolloProvider } from '@apollo/client';
import { RecoilRoot } from 'recoil';
import renderer from 'react-test-renderer';
import { TxByAddressDocument } from '@graphql/types';
import {
  MockTheme, wait,
} from '@tests/utils';
import Transactions from '.';

// ==================================
// mocks
// ==================================
jest.mock('next/router', () => ({
  useRouter: () => ({
    query: {
      address: '84gebYpPpEafPeGJUVA8QzfaTQC3GeyVufCTHpqsQqE2',
    },
  }),
}));

jest.mock('@components', () => ({
  Box: (props) => <div id="Box" {...props} />,
  TransactionsList: (props) => <div id="TransactionsList" {...props} />,
}));

const mockTx = jest.fn().mockResolvedValue({
  "data": {
    "transactionsByAddress": [
      {
        "signature": "3wEzEsZzmPMm43HqcNx9ndGquEYe9mzndY66BzVekkGGjTDbnxAakLSpnkWiNfr9LMew5F4Ad8KXdGLbLze1qr4P",
        "slot": 132302410,
        "success": true,
        "numInstructions": 1,
        "block": {
          "timestamp": "2022-05-03T12:05:52"
        }
      }
    ]
  }
});

// ==================================
// unit tests
// ==================================
describe('screen: Transactions/List', () => {
  it('matches snapshot', async () => {
    const mockClient = createMockClient();
    mockClient.setRequestHandler(
      TxByAddressDocument,
      mockTx,
    );
    let component;

    renderer.act(() => {
      component = renderer.create(
        <ApolloProvider client={mockClient}>
          <RecoilRoot>
            <MockTheme>
              <Transactions />
            </MockTheme>
          </RecoilRoot>
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
