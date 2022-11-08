import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import MsgCreateEthBridgeClaim from '@models/sifchain/msg/ethbridge/msg_create_eth_bridge_claim';
import CreateEthBridgeClaim from '.';

// ==================================
// mocks
// ==================================

jest.mock('@components/name', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Name" {...props} />
));

jest.mock('next-translate/Trans', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Trans" {...props} />
));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/CreateEthBridgeClaim', () => {
  it('matches snapshot', () => {
    const message = new MsgCreateEthBridgeClaim({
      category: 'dispensation',
      type: 'MsgBurn',
      ethBridgeClaim: {
        cosmosreceiver: 'cosmosreceiver',
      },
    });
    const component = renderer.create(
      <MockTheme>
        <CreateEthBridgeClaim message={message} />
      </MockTheme>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({ id: 'Trans' }).props.i18nKey).toEqual(
      'message_contents:MsgCreateEthBridgeClaim'
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
