import React from 'react';
import { RecoilRoot } from 'recoil';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import { MsgConnectionOpenAck } from '@models';
import ConnectionOpenAck from '.';

// ==================================
// mocks
// ==================================

jest.mock('@components', () => ({
  Name: (props) => <div id="Name" {...props} />,
}));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/IBCConnectionOpenAck', () => {
  it('matches snapshot', () => {
    const message = MsgConnectionOpenAck.fromJson({
      category: 'ibc',
      type: 'MsgConnectionOpenAck',
      signer: 'desmos1jrld5g998gqm4yx26l6cvhxz7y5adgxquy94nz',
      connectionId: '1',
      counterpartyConnectionId: '21',
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
          <ConnectionOpenAck
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
