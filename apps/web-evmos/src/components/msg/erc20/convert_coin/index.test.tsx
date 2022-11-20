import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from 'ui/tests/utils';
import MsgConvertCoin from '@models/evmos/msg/erc20/msg_convert_coin';
import ConvertCoin from '.';

// ==================================
// mocks
// ==================================

jest.mock('ui/components/name', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Name" {...props} />
));

jest.mock('next-translate/Trans', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Trans" {...props} />
));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/MsgConvertCoin', () => {
  it('matches snapshot', () => {
    const message: MsgConvertCoin = {
      category: 'erc20',
      type: 'MsgSend',
      receiver: '0x6B6A7D59f854d1d9F38881A6502f4970f96A0104',
      sender: 'evmos1s9waleajyy7hzdzpml3kvhakea0vfepkw7x8a2',
      coin: {
        denom: 'udaric',
        amount: '33600',
      },
      json: {},
    };
    const component = renderer.create(
      <MockTheme>
        <ConvertCoin message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
    expect(component.root.findByProps({ id: 'Trans' }).props.values.receiver).toEqual(
      '0x6B6A7D59f854d1d9F38881A6502f4970f96A0104'
    );
    expect(component.root.findByProps({ id: 'Trans' }).props.i18nKey).toEqual(
      'message_contents:MsgConvertCoin'
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
