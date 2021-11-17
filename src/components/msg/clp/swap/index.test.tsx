import React from 'react';
import { RecoilRoot } from 'recoil';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import { MsgSwap } from '@models';
import Swap from '.';

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
describe('screen: TransactionDetails/Swap', () => {
  it('matches snapshot', () => {
    const message = new MsgSwap({
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
    });

    const component = renderer.create(
      <RecoilRoot>
        <MockTheme>
          <Swap
            message={message}
          />
        </MockTheme>
      </RecoilRoot>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({ id: 'Trans' }).props.i18nKey).toEqual('message_contents:MsgSwap');
    expect(component.root.findByProps({ id: 'Trans' }).props.values.minReceivingAmount).toEqual('51 DARIC');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
