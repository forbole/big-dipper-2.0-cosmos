import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@/tests/utils';
import { MsgSend } from '@/models';
import Send from '@/components/msg/bank/send';

// ==================================
// mocks
// ==================================
jest.mock('@/components/name', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Name" {...props} />
));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/MsgSend', () => {
  it('matches snapshot', () => {
    const message = MsgSend.fromJson({
      category: 'bank',
      type: 'MsgSend',
      fromAddress: 'fromAddress',
      toAddress: 'toAddress',
      amount: [
        {
          denom: 'udaric',
          amount: '200000000',
        },
      ],
      json: JSON.stringify({
        from: 'fromAddress',
        to: 'toAddress',
        amount: [
          {
            denom: 'udaric',
            amount: '200000000',
          },
        ],
      }),
    });
    const component = renderer.create(
      <MockTheme>
        <Send message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
