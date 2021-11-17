import React from 'react';
import { RecoilRoot } from 'recoil';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import { MsgRemoveLiquidity } from '@models';
import RemoveLiquidity from '.';

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
describe('screen: TransactionDetails/MsgRemoveLiquidity', () => {
  it('matches snapshot', () => {
    const message = new MsgRemoveLiquidity({
      category: 'bank',
      type: 'MsgRemoveLiquidity',
      signer: 'signer',
      externalAsset: {
        symbol: 'udaric',
      },
    });
    const component = renderer.create(
      <RecoilRoot>
        <MockTheme>
          <RemoveLiquidity
            message={message}
          />
        </MockTheme>
      </RecoilRoot>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({ id: 'Trans' }).props.i18nKey).toEqual('message_contents:MsgRemoveLiquidity');
    expect(component.root.findByProps({ id: 'Trans' }).props.values.symbol).toEqual('DARIC');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
