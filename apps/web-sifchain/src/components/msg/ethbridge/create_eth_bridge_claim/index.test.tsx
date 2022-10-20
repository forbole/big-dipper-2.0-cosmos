import React from 'react';
import { RecoilRoot } from 'recoil';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import { MsgCreateEthBridgeClaim } from '@models';
import CreateEthBridgeClaim from '.';

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
    const message = new MsgCreateEthBridgeClaim({
      category: 'dispensation',
      type: 'MsgBurn',
      ethBridgeClaim: {
        cosmosreceiver: 'cosmosreceiver',
      },
    });
    const component = renderer.create(
      <RecoilRoot>
        <MockTheme>
          <CreateEthBridgeClaim
            message={message}
          />
        </MockTheme>
      </RecoilRoot>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({ id: 'Trans' }).props.i18nKey).toEqual('message_contents:MsgCreateEthBridgeClaim');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
