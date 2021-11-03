import React from 'react';
import { createMockClient } from 'mock-apollo-client';
import { ApolloProvider } from '@apollo/client';
import renderer from 'react-test-renderer';
import {
  MockTheme, wait,
} from '@tests/utils';
import {
  BlockDetailsDocument,
} from '@graphql/types';
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
  Overview: (props) => <div id="Overview" {...props} />,
  Transactions: (props) => <div id="Transactions" {...props} />,
  Signatures: (props) => <div id="Signatures" {...props} />,
}));

const mockAverageBlockTime = jest.fn().mockResolvedValue({
  data: {
    transaction: [
      {
        height: 999,
        hash: '393310C681CB39E09CD3AC16C600DBFDACB2DF5085277DA81E52698620C06136',
        logs: [],
        messages: [
          {
            '@type': '/cosmos.staking.v1beta1.MsgDelegate',
            amount: {
              denom: 'udaric',
              amount: '27466368',
            },
            delegator_address: 'desmos18kvwy5hzcu3ss08lcfcnx0eajuecg69ujmkwjr',
            validator_address: 'desmosvaloper18kvwy5hzcu3ss08lcfcnx0eajuecg69uvk76c3',
          },
        ],
        success: true,
      },
    ],
    block: [
      {
        height: 999,
        hash: 'E568ACFE5717F79A44979563410FF7F6C3043A07307E541EF21E15FC478C3DF0',
        timestamp: '2021-04-27T16:27:34.331769',
        txs: 1,
        validator: {
          validatorInfo: {
            operatorAddress: 'desmosvaloper18kvwy5hzcu3ss08lcfcnx0eajuecg69uvk76c3',
          },
        },
      },
    ],
    preCommitsAggregate: {
      aggregate: {
        sum: {
          votingPower: 7304,
        },
      },
    },
    preCommits: [
      {
        validator: {
          validatorInfo: {
            operatorAddress: 'desmosvaloper1qlh47ty9ah2d5e0xq6gsvqjvfulljl9602k7f9',
          },
        },
      },
    ],
  },
});

// ==================================
// unit tests
// ==================================
describe('screen: BlockDetails', () => {
  it('matches snapshot', async () => {
    const mockClient = createMockClient();
    mockClient.setRequestHandler(
      BlockDetailsDocument,
      mockAverageBlockTime,
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
