import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from 'ui/tests/utils';
import MsgCreatePool from '@models/sifchain/msg/clp/msg_create_pool';
import CreatePool from '.';

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
describe('screen: TransactionDetails/CreatePool', () => {
  it('matches snapshot', () => {
    const message = new MsgCreatePool({
      category: 'bank',
      type: 'MsgCreatePool',
      signer: 'signer',
      externalAsset: {
        symbol: 'ubar',
      },
      nativeAssetAmount: '4000000',
      externalAssetAmount: '0',
    });
    const component = renderer.create(
      <MockTheme>
        <CreatePool message={message} />
      </MockTheme>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({ id: 'Trans' }).props.i18nKey).toEqual(
      'message_contents:MsgCreatePool'
    );
    expect(component.root.findByProps({ id: 'Trans' }).props.values.nativeAssetAmount).toEqual(
      '4,000,000 UEROWAN'
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
