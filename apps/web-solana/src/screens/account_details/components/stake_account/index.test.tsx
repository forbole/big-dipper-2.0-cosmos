/* eslint-disable */
import React from 'react';
import { createMockClient } from 'mock-apollo-client';
import { ApolloProvider } from '@apollo/client';
import renderer from 'react-test-renderer';
import {
  MockTheme, wait,
} from '@tests/utils';
import { StakeAccountDetailsDocument } from '@graphql/types';
import StakeAccount from '.';

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
  StakeInfo: (props) => <div id="StakeInfo" {...props} />,
}));

const mockData = jest.fn().mockResolvedValue({
  "data": {
    "block": [
      {
        "slot": 131479854
      }
    ],
    "stakeAccount": [
      {
        "address": "Gs2tWRu1Y5FbDmwss74CDcJ2azEsc9RbqZPVMvVbg1bq",
        "nativeBalance": {
          "balance": 430282877615
        },
        "staker": "12Euh1pmCycRLq4grkyY7VDubawWJKXxbX9FJQAs4hZy",
        "withdrawer": "EhYXq3ANp5nAerUpbSgd7VK2RRcxK1zNuSQ755G5Mtxx",
        "stakeDelegation": {
          "stake": 430276028975,
          "activationEpoch": 200,
          "deactivationEpoch": 18446744073709552000,
          "voter": "964w4qykexipZ7aCur1BEeJtexTMa1ehMUc9tCcxm9J3"
        }
      }
    ]
  }
});

// ==================================
// unit tests
// ==================================
describe('screen: StakeAccount', () => {
  it('matches snapshot', async () => {
    const mockClient = createMockClient();
    mockClient.setRequestHandler(
      StakeAccountDetailsDocument,
      mockData,
    );

    let component;
    renderer.act(() => {
      component = renderer.create(
        <ApolloProvider client={mockClient}>
          <MockTheme>
            <StakeAccount />
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
