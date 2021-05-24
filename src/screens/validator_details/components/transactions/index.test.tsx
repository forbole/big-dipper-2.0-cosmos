import React from 'react';
import renderer from 'react-test-renderer';
import {
  MockTheme, wait,
} from '@tests/utils';
import { ApolloProvider } from '@apollo/client';
import { createMockClient } from 'mock-apollo-client';
import {
  GetMessagesByAddressDocument,
} from '@graphql/types';
import List from '.';

// ==================================
// mocks
// ==================================
jest.mock('@components', () => ({
  Box: (props) => <div id="Box" {...props} />,
  TransactionsListOld: (props) => <div id="TransactionsListOld" {...props} />,
}));

const mockTransactions = jest.fn().mockResolvedValue({
  data: {
    messagesByAddress: [
      {
        transaction: {
          height: 1117165,
          hash: '2B0732E5ADBE72F388E869ADD9C0400453D6228FA58D32EE4501E9773D53F23C',
          success: true,
          messages: [
            {
              '@type': '/cosmos.staking.v1beta1.MsgDelegate',
              amount: {
                denom: 'udaric',
                amount: '1000000',
              },
              delegator_address: 'desmos1wsu3kx6gxnp57a9xnr3jxspdq6un7vxnyfj404',
              validator_address: 'desmosvaloper1wsu3kx6gxnp57a9xnr3jxspdq6un7vxn6y6p98',
            },
          ],
          block: {
            height: 1117165,
            timestamp: '2021-04-11T10:09:52.470504',
          },
        },
      },
    ],
  },
});

// ==================================
// unit tests
// ==================================
describe('screen: Transactions/List', () => {
  it('matches snapshot', async () => {
    const mockClient = createMockClient();

    mockClient.setRequestHandler(
      GetMessagesByAddressDocument,
      mockTransactions,
    );

    let component;

    renderer.act(() => {
      component = renderer.create(
        <ApolloProvider client={mockClient}>
          <MockTheme>
            <List />
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
