import React from 'react';
import { RecoilRoot } from 'recoil';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import { MsgCreateValidator } from '@models';
import CreateValidator from '.';

// ==================================
// mocks
// ==================================
jest.mock('@components', () => ({
  Name: (props) => <div id="Name" {...props} />,
}));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/CreateValidator', () => {
  it('matches snapshot', () => {
    const message = new MsgCreateValidator({
      category: 'staking',
      type: 'MsgCreateValidator',
      description: {
        moniker: 'forbole',
        identity: '123123ASD',
        website: 'https://forbole.com',
        securityContact: '',
        details: '',
      },
      commission: {
        rate: '0.1',
        maxRate: '1.00',
        maxChangeRate: '1.00',
      },
      minSelfDelegation: '1000000',
      delegatorAddress: 'delegatorAddress',
      validatorAddress: 'validatorAddress',
      pubkey: {
        type: 'pubkey',
        key: 'key',
      },
      value: {
        denom: 'udaric',
        amount: '10000000',
      },
    });
    const component = renderer.create(
      <RecoilRoot>
        <MockTheme>
          <CreateValidator
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
