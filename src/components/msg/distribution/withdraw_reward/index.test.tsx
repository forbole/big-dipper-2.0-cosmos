import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import { MsgWithdrawDelegatorReward } from '@models';
import WithdrawReward from '.';

// ==================================
// mocks
// ==================================
jest.mock('@contexts', () => ({
  useChainContext: () => ({
    findAddress: jest.fn(() => ({
      moniker: 'moniker',
      imageUrl: null,
    })),
  }),
}));

jest.mock('@components', () => ({
  Name: (props) => <div id="Name" {...props} />,
}));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/WithdrawReward', () => {
  it('matches snapshot', () => {
    const message = new MsgWithdrawDelegatorReward({
      category: 'distribution',
      type: 'MsgWithdrawDelegatorReward',
      delegatorAddress: 'delegatorAddress',
      validatorAddress: 'validatorAddress',
      amounts: [
        {
          denom: 'udaric',
          value: 3000000,
        },
      ],
    });
    const component = renderer.create(
      <MockTheme>
        <WithdrawReward
          message={message}
        />
      </MockTheme>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
