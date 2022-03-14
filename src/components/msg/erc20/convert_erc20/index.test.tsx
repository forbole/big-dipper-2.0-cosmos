import React from 'react';
import { RecoilRoot } from 'recoil';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import { MsgConvertErc20 } from '@models';
import ConvertErc20 from '.';

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
describe('screen: TransactionDetails/MsgConvertErc20', () => {
  it('matches snapshot', () => {
    const message = new MsgConvertErc20({
      category: 'erc20',
      type: 'MsgSend',
      sender: '0x6B6A7D59f854d1d9F38881A6502f4970f96A0104',
      receiver: 'evmos1s9waleajyy7hzdzpml3kvhakea0vfepkw7x8a2',
      amount: '33600atevmos',
    });
    const component = renderer.create(
      <RecoilRoot>
        <MockTheme>
          <ConvertErc20
            message={message}
          />
        </MockTheme>
      </RecoilRoot>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    expect(component.root.findByProps({ id: 'Trans' }).props.values.sender).toEqual('0x6B6A7D59f854d1d9F38881A6502f4970f96A0104');
    expect(component.root.findByProps({ id: 'Trans' }).props.i18nKey).toEqual('message_contents:MsgConvertErc20');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
