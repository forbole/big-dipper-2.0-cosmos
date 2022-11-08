import React from 'react';
import { RecoilRoot } from 'recoil';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import { MsgTransfer } from '@models';
import Transfer from '.';

// ==================================
// mocks
// ==================================

jest.mock('@components', () => ({
  Name: (props) => <div id="Name" {...props} />,
}));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/IBCTransfer', () => {
  it('matches snapshot', () => {
    const message = MsgTransfer.fromJson({
      category: 'ibc',
      type: 'MsgTransfer',
      sender: 'desmos1jrld5g998gqm4yx26l6cvhxz7y5adgxquy94nz',
      receiver: 'desmos1qttd3g665gqm4yx26l6pqqal7y5pqlatty22nz',
      token: {
        denom: 'udaric',
        amount: '2000000',
      },
      sourceChannel: 'channel-2',
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
          <Transfer
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