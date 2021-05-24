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

jest.mock('@contexts', () => ({
  useChainContext: () => ({
    findAddress: jest.fn(() => ({
      moniker: 'moniker',
      imageUrl: null,
    })),
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
    transaction: [],
    block: [
      {
        height: 300,
        hash: 'A8067C16018C78B7729FEA891A292C559C7E565B61524E0162C0C30A9BC2A467',
        timestamp: '2021-04-27T15:26:36.986315',
        txs: 0,
        validator: {
          validatorInfo: {
            operatorAddress: 'desmosvaloper18kvwy5hzcu3ss08lcfcnx0eajuecg69uvk76c3',
          },
        },
        preCommits: [
          {
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
              votingPower: 603,
            },
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
