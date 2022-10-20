import React from 'react';
import { RecoilRoot } from 'recoil';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import { MsgUpdateCethReceiverAccount } from '@models';
import UpdateCethReceiverAccount from '.';

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
describe('screen: TransactionDetails/CreateEthBridgeClaim', () => {
  it('matches snapshot', () => {
    const message = new MsgUpdateCethReceiverAccount({
      category: 'dispensation',
      type: 'MsgBurn',
      cosmosSender: 'cosmosSender',
      cethReceiverAccount: 'cethReceiverAccount',
    });
    const component = renderer.create(
      <RecoilRoot>
        <MockTheme>
          <UpdateCethReceiverAccount
            message={message}
          />
        </MockTheme>
      </RecoilRoot>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({ id: 'Trans' }).props.i18nKey).toEqual('message_contents:MsgUpdateCethReceiverAccount');
    expect(component.root.findByProps({ id: 'Trans' }).props.values.cethReceiverAccount).toEqual('cethReceiverAccount');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
