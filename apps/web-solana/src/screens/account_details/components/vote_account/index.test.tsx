/* eslint-disable */
import React from 'react';
import { createMockClient } from 'mock-apollo-client';
import { ApolloProvider } from '@apollo/client';
import renderer from 'react-test-renderer';
import {
  MockTheme, wait,
} from '@tests/utils';
import { VoteAccountDetailsDocument } from '@graphql/types';
import VoteAccount from '.';

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
  Validator: (props) => <div id="Validator" {...props} />,
  SkipRate: (props) => <div id="SkipRate" {...props} />,
}));

const mockData = jest.fn().mockResolvedValue({
  "data": {
    "validator": [
      {
        "address": "44MUR8uuQZZvNBe9qGBud1EtgYBsUndpiYLAae6HYUc1",
        "nativeBalance": {
          "balance": 26858640
        },
        "commission": 100,
        "voter": "F5NgZ5RtJW6fcDTcsYjSo8DgksbWx3mh4Ms2igbhHQTC",
        "withdrawer": "8RLmw25NXPZ2Ry1iRJFtn5fFkWwpVETEXwu5bnHbWcTJ",
        "validatorStatus": null,
        "validatorConfig": null,
        "validatorSkipRate": {
          "epoch": 303,
          "skip": 5,
          "skipRate": 0.046296296296296294,
          "total": 108
        }
      }
    ]
  }
});

// ==================================
// unit tests
// ==================================
describe('screen: VoteAccount', () => {
  it('matches snapshot', async () => {
    const mockClient = createMockClient();
    mockClient.setRequestHandler(
      VoteAccountDetailsDocument,
      mockData,
    );

    let component;
    renderer.act(() => {
      component = renderer.create(
        <ApolloProvider client={mockClient}>
          <MockTheme>
            <VoteAccount />
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
