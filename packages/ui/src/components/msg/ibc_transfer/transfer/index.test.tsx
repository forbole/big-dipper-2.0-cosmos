import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from 'ui/tests/utils';
import { MsgTransfer } from '@models';
import Transfer from '.';

// ==================================
// mocks
// ==================================

jest.mock('ui/components/name', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Name" {...props} />
));

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
      <MockTheme>
        <Transfer message={message} />
      </MockTheme>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
