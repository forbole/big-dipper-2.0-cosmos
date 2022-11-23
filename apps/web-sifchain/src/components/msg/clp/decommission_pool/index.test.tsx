import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@/tests/utils';
import MsgDecommissionPool from '@/models/msg/clp/msg_decommission_pool';
import DecommissionPool from '@/components/msg/clp/decommission_pool';

// ==================================
// mocks
// ==================================

jest.mock('@/components/name', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Name" {...props} />
));

jest.mock('next-translate/Trans', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Trans" {...props} />
));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/DecommissionPool', () => {
  it('matches snapshot', () => {
    const message: MsgDecommissionPool = {
      category: 'bank',
      type: 'MsgCreatePool',
      signer: 'signer',
      symbol: 'udaric',
      json: {},
    };
    const component = renderer.create(
      <MockTheme>
        <DecommissionPool message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({ id: 'Trans' }).props.i18nKey).toEqual(
      'message_contents:MsgDecommissionPool'
    );
    expect(component.root.findByProps({ id: 'Trans' }).props.values.symbol).toEqual('DARIC');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
