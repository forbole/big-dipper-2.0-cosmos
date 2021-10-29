import React from 'react';
import { RecoilRoot } from 'recoil';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import { MsgWithdrawValidatorCommission } from '@models';
import WithdrawCommission from '.';

// ==================================
// mocks
// ==================================

jest.mock('@components', () => ({
  Name: (props) => <div id="Name" {...props} />,
}));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/WithdrawCommission', () => {
  it('matches snapshot', () => {
    const message = new MsgWithdrawValidatorCommission({
      category: 'distribution',
      type: 'MsgWithdrawValidatorCommission',
      validatorAddress: 'validatorAddress',
      amounts: [
        {
          denom: 'udaric',
          value: 3000000,
        },
      ],
    });
    const component = renderer.create(
      <RecoilRoot>
        <MockTheme>
          <WithdrawCommission
            message={message}
          />
        </MockTheme>
      </RecoilRoot>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
