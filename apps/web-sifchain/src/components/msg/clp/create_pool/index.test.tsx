import React from 'react';
import { RecoilRoot } from 'recoil';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import { MsgCreatePool } from '@models';
import CreatePool from '.';

// ==================================
// mocks
// ==================================

jest.mock('@components', () => ({
  Name: (props) => <div id="Name" {...props} />,
}));

jest.mock('next-translate/Trans', () => (
  (props) => <div id="Trans" {...props} />
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
      <RecoilRoot>
        <MockTheme>
          <CreatePool
            message={message}
          />
        </MockTheme>
      </RecoilRoot>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({ id: 'Trans' }).props.i18nKey).toEqual('message_contents:MsgCreatePool');
    expect(component.root.findByProps({ id: 'Trans' }).props.values.nativeAssetAmount).toEqual('4 DARIC');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
