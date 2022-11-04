import React from 'react';
import { RecoilRoot } from 'recoil';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import { MsgConnectionOpenTry } from '@models';
import ConnectionOpenTry from '.';

// ==================================
// mocks
// ==================================

jest.mock('@components', () => ({
  Name: (props) => <div id="Name" {...props} />,
}));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/IBCConnectionOpenTry', () => {
  it('matches snapshot', () => {
    const message = MsgConnectionOpenTry.fromJson({
      category: 'ibc',
      type: 'MsgConnectionOpenTry',
      signer: 'desmos1jrld5g998gqm4yx26l6cvhxz7y5adgxquy94nz',
      chainId: 'chain-1',
      clientId: '21',
      counterpartyClientId: '2',
      counterpartyConnectionId: '221',
      json: [
        {
          denom: 'udaric',
          amount: '2000000',
        },
      ],
    });
    const component = renderer.create(
      <RecoilRoot>
        <MockTheme>
          <ConnectionOpenTry
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
