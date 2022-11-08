import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import MsgAddLiquidity from '@models/sifchain/msg/clp/msg_add_liquidity';
import AddLiquidity from '.';

// ==================================
// mocks
// ==================================

jest.mock('@components/name', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Name" {...props} />
));

jest.mock('next-translate/Trans', () => (props) => <div id="Trans" {...props} />);

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/AddLiquidity', () => {
  it('matches snapshot', () => {
    const message = new MsgAddLiquidity({
      category: 'bank',
      type: 'MsgAddLiquidity',
      signer: 'signer',
      externalAsset: {
        symbol: 'ubar',
      },
      nativeAssetAmount: '4000000',
      externalAssetAmount: '0',
    });
    const component = renderer.create(
      <MockTheme>
        <AddLiquidity message={message} />
      </MockTheme>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({ id: 'Trans' }).props.i18nKey).toEqual(
      'message_contents:MsgAddLiquidity'
    );
    expect(component.root.findByProps({ id: 'Trans' }).props.values.nativeAssetAmount).toEqual(
      '4,000,000 UEROWAN'
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
