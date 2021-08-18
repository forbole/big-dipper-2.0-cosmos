import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import { MsgRedelegate } from '@models';
import Redelegate from '.';

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
describe('screen: TransactionDetails/Redelegate', () => {
  it('matches snapshot', () => {
    const message = new MsgRedelegate({
      category: 'staking',
      type: 'MsgEditValidator',
      delegatorAddress: 'delegatorAddress',
      validatorSrcAddress: 'validatorSrcAddress',
      validatorDstAddress: 'validatorDstAddress',
      amount: {
        denom: 'udaric',
        amount: '1000000000',
      },
    });
    const component = renderer.create(
      <MockTheme>
        <Redelegate
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
