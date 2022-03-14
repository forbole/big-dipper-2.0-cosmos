import React from 'react';
import { RecoilRoot } from 'recoil';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import { MsgConvertCoin } from '@models';
import ConvertCoin from '.';

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
describe('screen: TransactionDetails/MsgConvertCoin', () => {
  it('matches snapshot', () => {
    const message = new MsgConvertCoin({
      category: 'erc20',
      type: 'MsgSend',
      receiver: '0x6B6A7D59f854d1d9F38881A6502f4970f96A0104',
      sender: 'evmos1s9waleajyy7hzdzpml3kvhakea0vfepkw7x8a2',
      coin: {
        denom: 'udaric',
        amount: '33600',
      },
    });
    const component = renderer.create(
      <RecoilRoot>
        <MockTheme>
          <ConvertCoin
            message={message}
          />
        </MockTheme>
      </RecoilRoot>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    expect(component.root.findByProps({ id: 'Trans' }).props.values.receiver).toEqual('0x6B6A7D59f854d1d9F38881A6502f4970f96A0104');
    expect(component.root.findByProps({ id: 'Trans' }).props.i18nKey).toEqual('message_contents:MsgConvertCoin');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
