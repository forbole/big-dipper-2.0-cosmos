import React from 'react';
import { RecoilRoot } from 'recoil';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import { MsgSetWithdrawAddress } from '@models';
import SetWithdrawalAddress from '.';

// ==================================
// mocks
// ==================================
jest.mock('@components', () => ({
  Name: (props) => <div id="Name" {...props} />,
}));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/SetWithdrawalAddress', () => {
  it('matches snapshot', () => {
    const message = new MsgSetWithdrawAddress({
      category: 'distribution',
      type: 'MsgSetWithdrawAddress',
      delegatorAddress: 'delegatorAddress',
      withdrawalAddress: 'withdrawalAddress',
    });
    const component = renderer.create(
      <RecoilRoot>
        <MockTheme>
          <SetWithdrawalAddress
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
