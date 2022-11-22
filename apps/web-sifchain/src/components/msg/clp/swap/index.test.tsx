import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from 'ui/tests/utils';
import MsgSwap from '@models/sifchain/msg/clp/msg_swap';
import Swap from '.';

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
describe('screen: TransactionDetails/Swap', () => {
  it('matches snapshot', () => {
    const message: MsgSwap = {
      category: 'bank',
      type: 'MsgCreatePool',
      signer: 'signer',
      sentAsset: {
        symbol: 'udaric',
      },
      receivedAsset: {
        symbol: 'udaric',
      },
      sentAmount: '4000000',
      minReceivingAmount: '51000000',
      receivedAmount: '51000000',
      json: {},
    };

    const component = renderer.create(
      <MockTheme>
        <Swap message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({ id: 'Trans' }).props.i18nKey).toEqual(
      'message_contents:MsgSwap'
    );
    expect(component.root.findByProps({ id: 'Trans' }).props.values.receivedAmount).toEqual(
      '51 DARIC'
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
